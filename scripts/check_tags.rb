#!/usr/bin/env ruby

require "yaml"
require "date"
require "pathname"

ROOT = Pathname.new(__dir__).parent
CATALOG_PATH = ROOT.join("_data", "tags.yml")

unless CATALOG_PATH.exist?
  warn "ERROR: _data/tags.yml does not exist."
  exit 1
end

catalog = YAML.safe_load(
  CATALOG_PATH.read,
  aliases: true
) || []

allowed_tags = catalog.map { |entry| entry.fetch("slug") }

errors = []

all_aliases = {}

catalog.each do |entry|
  slug = entry.fetch("slug")

  Array(entry["aliases"]).each do |tag_alias|
    normalized_alias = tag_alias.to_s.strip.downcase

    if all_aliases.key?(normalized_alias)
      errors << "_data/tags.yml: alias '#{normalized_alias}' is assigned to both " \
                "'#{all_aliases[normalized_alias]}' and '#{slug}'"
    else
      all_aliases[normalized_alias] = slug
    end

    if allowed_tags.include?(normalized_alias) &&
       normalized_alias != slug
      errors << "_data/tags.yml: alias '#{normalized_alias}' conflicts with a canonical tag"
    end
  end
end



duplicate_catalog_tags =
  allowed_tags.group_by(&:itself)
              .select { |_tag, values| values.length > 1 }
              .keys

unless duplicate_catalog_tags.empty?
  errors << "Duplicate tags in _data/tags.yml: #{duplicate_catalog_tags.join(', ')}"
end

content_patterns = [
  "_posts/**/*.{md,markdown}",
  "_writings/**/*.{md,markdown}",
  "_projects/**/*.{md,markdown}"
]

files =
  content_patterns.flat_map do |pattern|
    Dir.glob(ROOT.join(pattern).to_s)
  end.sort

files.each do |file|
  text = File.read(file, encoding: "UTF-8")

  front_matter_match =
    text.match(/\A(?:\uFEFF)?---\s*\r?\n(.*?)\r?\n---\s*(?:\r?\n|\z)/m)

  next unless front_matter_match

  begin
    data = YAML.safe_load(
      front_matter_match[1],
      permitted_classes: [Date, DateTime, Time],
      aliases: true
    ) || {}
  rescue Psych::SyntaxError => e
    errors << "#{Pathname.new(file).relative_path_from(ROOT)}: invalid YAML (#{e.message})"
    next
  end

  tags = Array(data["tags"])

  next if tags.empty?

  relative_path = Pathname.new(file).relative_path_from(ROOT)

  if tags.length > 6
    errors << "#{relative_path}: has #{tags.length} tags; maximum is 6"
  end

  duplicates =
    tags.group_by(&:itself)
        .select { |_tag, values| values.length > 1 }
        .keys

  unless duplicates.empty?
    errors << "#{relative_path}: duplicate tags: #{duplicates.join(', ')}"
  end

  tags.each do |tag|
    unless tag.is_a?(String)
      errors << "#{relative_path}: tag #{tag.inspect} is not a string"
      next
    end

    unless tag.match?(/\A[a-z0-9]+(?:-[a-z0-9]+)*\z/)
      errors << "#{relative_path}: '#{tag}' is not lowercase hyphenated format"
    end

    unless allowed_tags.include?(tag)
      errors << "#{relative_path}: '#{tag}' is not in _data/tags.yml"
    end
  end
end

if errors.empty?
  puts "Tag validation passed."
  puts "Checked #{files.length} content files."
  puts "Approved tags: #{allowed_tags.length}"
  exit 0
end

warn
warn "TAG VALIDATION FAILED"
warn "=" * 60

errors.each do |error|
  warn "- #{error}"
end

warn
warn "#{errors.length} problem(s) found."

exit 1