#!/usr/bin/env ruby

require "yaml"
require "pathname"

# Historical migration helper.
# Normal tag maintenance should use _data/tags.yml
# and scripts/check_tags.rb.

ROOT = Pathname.new(__dir__).parent
CATALOG_PATH = ROOT.join("_data", "tags.yml")

WRITE_CHANGES = ARGV.include?("--write")

unless CATALOG_PATH.exist?
  warn "ERROR: _data/tags.yml does not exist."
  exit 1
end

# ------------------------------------------------------------
# Load canonical tag catalogue
# ------------------------------------------------------------

catalog = YAML.safe_load(
  CATALOG_PATH.read(encoding: "UTF-8"),
  aliases: true
) || []

canonical_tags = {}
alias_map = {}

catalog.each do |entry|
  slug = entry.fetch("slug").to_s.strip

  canonical_tags[slug] = true
  alias_map[slug.downcase] = slug

  Array(entry["aliases"]).each do |tag_alias|
    alias_map[tag_alias.to_s.strip.downcase] = slug
  end
end


# ------------------------------------------------------------
# Tags that should simply disappear.
#
# These describe site structure or incidental details rather
# than useful recurring subjects.
# ------------------------------------------------------------

DROP_TAGS = [
  # Structural/content-type labels
  "blog",
  "article",
  "writings",

  # Content format rather than subject
  "devotional",

  # Generic/incidental tags that are not useful
  # as recurring site-wide subjects
  "beginning",
  "introduction",
  "late-night",
  "winter",
  "house-sitting",
  "work",
  "silence",
  "change",
  "rant",
  "photos",
  "preparation",

  # One-off tags that do not justify permanent
  # taxonomy entries
  "allegory",
  "birthday",
  "doctor-who",
  "film",
  "motivation",
  "podcasts"
].freeze


# ------------------------------------------------------------
# Exact writing overrides
#
# These implement the writing decisions already made during
# the tag cleanup review.
# ------------------------------------------------------------

WRITING_OVERRIDES = {

  "_writings/articles/A Personal Communion Walking with God.md" =>
    %w[faith christian-life bible],

  "_writings/articles/Bring Your Loaves and Fishes and Trust in Gods Provision.md" =>
    %w[gospel faith ministry],

  "_writings/articles/Feelings of Faltering Strengthening our Faith.md" =>
    %w[faith christian-life fellowship],

  "_writings/articles/One Day You Will Hear I Am Dead.md" =>
    %w[faith gospel christian-life],

  "_writings/articles/Worship in Every Moment.md" =>
    %w[worship faith christian-life],

  "_writings/devotional/Grace for the Flawed.md" =>
    %w[grace christian-life faith],

  "_writings/devotional/The Spirit of the Nazarite in the Age of Grace.md" =>
    %w[christian-life worship grace],

  "_writings/devotional/Unto Us a Child Is Given.md" =>
    %w[gospel worship faith],

  "_writings/devotional/Whosoever Shall Call.md" =>
    %w[gospel salvation grace],

  "_writings/poems/Almost Familiar.md" =>
    %w[poetry reflection relationships],

  "_writings/poems/I Remember You Endure.md" =>
    %w[poetry grief relationships],

  "_writings/poems/Learning the Undertow.md" =>
    %w[poetry grief reflection],

  "_writings/poems/Living Each Day for Jesus.md" =>
    %w[poetry faith christian-life],

  "_writings/poems/The Book.md" =>
    %w[poetry gospel salvation],

  "_writings/poems/Unmoved Silence.md" =>
    %w[poetry reflection struggle],

  "_writings/poems/after the change.md" =>
    %w[poetry faith christian-life],

  "_writings/poems/anchor stone.md" =>
    %w[poetry grief relationships],

  "_writings/poems/writers lament.md" =>
    %w[poetry writing reflection]

}.freeze


# ------------------------------------------------------------
# Special exact-file overrides
# ------------------------------------------------------------

FILE_OVERRIDES = {

  # ----------------------------------------------------------
  # Older posts needing editorial tag cleanup
  # ----------------------------------------------------------

  "_posts/2025/2025-04/2025-04-29-Website-Rant.md" =>
    %w[
      website
      reflection
    ],

  "_posts/2025/2025-05/2025-05-19-Post-Conference-Reflections-and-Birthday-Moments.md" =>
    %w[
      conferences
      gospel
      ministry
      fellowship
      reflection
      relationships
    ],

  "_posts/2025/2025-06/2025-06-01-Zoom-Messages-Missed-Opportunities-and-the-Week-Ahead.md" =>
    %w[
      gospel
      ministry
      conferences
      travel
      mental-health
      prayer
    ],

  "_posts/2025/2025-06/2025-06-18-Insecurities-and-Digitizing-Memories.md" =>
    %w[
      island-books
      family-history
      personal
      writing
      biking
      scanning
    ],

  "_posts/2025/2025-07/2025-07-04-On-the-Road-to-Pugwash-and-Other-Wandering-Thoughts.md" =>
    %w[
      conferences
      personal
      travel
      gospel
      technology
      reflection
    ],

  "_posts/2025/2025-07/2025-07-14-A-New-Direction-for-the-Glorious-Gospel-and-Some-Technical-Tinkering.md" =>
    %w[
      website
      projects
      gospel
      ministry
      technology
      personal
    ],

  "_posts/2025/2025-08/2025-08-08-Domains-Projects-and-Plenty-on-My-Plate.md" =>
    %w[
      website
      gospel
      ministry
      projects
      technology
      assembly-life
    ],

  "_posts/2025/2025-09/2025-09-10-Shifting-Focus-Audio-Archives-and-a-Few-Reminders.md" =>
    %w[
      gospel
      website
      conferences
      audio-archive
      writing
      faith
    ],

  "_posts/2025/2025-10/2025-10-09-Sussex-Weekend-Ministry-Miles-and-a-Sky-on-Fire.md" =>
    %w[
      conferences
      ministry
      travel
      audio-archive
      technology
      reflection
    ],

  "_posts/2025/2025-10/2025-10-21-From-PEI-to-Labrador.md" =>
    %w[
      travel
      gospel
      fellowship
      conferences
      faith
      ministry
    ],

  "_posts/2025/2025-10/2025-10-22-An-Unexpected-Library.md" =>
    %w[
      books
      gospel
      christian-life
      library
      reading
    ],

  "_posts/2025/2025-11/2025-11-12-RED-Magazines-and-Old-Glenwood-Notes.md" =>
    %w[
      writing
      pei
      local-history
      poetry
      publishing
      scanning
    ],

  # These two devotional-style blog posts benefit from
  # subject tags rather than the generic "devotional" tag.

  "_posts/2025/2025-12/2025-12-07-Three-Glimpses-of-Christ-in-Luke-7.md" =>
    %w[
      bible
      gospel
      christian-life
    ],

  "_posts/2025/2025-12/2025-12-10-When-Conviction-Feels-Like-Fog.md" =>
    %w[
      christian-life
      faith
      reflection
    ],

  "_posts/2026/2026-01/2026-01-13-A-Late-Start-to-the-New-Year.md" =>
    %w[
      website
      personal
      gospel
      conferences
      audio-archive
      pilgrims-progress
    ],

  "_posts/2026/2026-02/2026-02-04-Sussex-Static-and-Small-Steps-Forward.md" =>
    %w[
      website
      conferences
      gospel
      projects
      audio-archive
      technology
    ],

  "_posts/2026/2026-04/2026-04-12-Book-Review-The-Pilgrims-Progress.md" =>
    %w[
      book-review
      books
      pilgrims-progress
      gospel
      christian-life
    ],

  "_posts/2026/2026-04/2026-04-17-From-Gravel-Hill-Enterprises-Rebrand-Websites-and-Reset.md" =>
    %w[
      business
      website
      gospel
      life-update
      organization
      accounting
    ],


  # ----------------------------------------------------------
  # Internet Archive article
  # ----------------------------------------------------------

  "_posts/2026/2026-08/2026-08-31-why-the-internet-archive-matters.md" =>
    %w[
      internet-archive
      digital-preservation
      web-history
      technology
      library
    ],


  # ----------------------------------------------------------
  # Projects
  # ----------------------------------------------------------

  "_projects/1881 Lot 8 PEI Census.md" =>
    %w[
      history
      pei
      census
      lot-8
      glenwood
    ],

  "_projects/Personal PEI Book Collection.md" =>
    %w[
      books
      island-books
      pei
      history
      library
    ]

}.merge(WRITING_OVERRIDES).freeze


# ------------------------------------------------------------
# Utility functions
# ------------------------------------------------------------

def normalize_basic_tag(tag)
  tag.to_s
     .strip
     .downcase
     .gsub(/[ _]+/, "-")
     .gsub(/-+/, "-")
     .gsub(/\A-|-+\z/, "")
end


def website_context?(tags, path)
  website_terms = %w[
    website
    site-update
    site-changes
    website-updates
    github
    coding
    jekyll
    domains
    email
    fromgravelhill
  ]

  normalized = tags.map { |tag| normalize_basic_tag(tag) }

  return true if (normalized & website_terms).any?

  path_downcase = path.downcase

  path_downcase.include?("website") ||
    path_downcase.include?("github") ||
    path_downcase.include?("jekyll") ||
    path_downcase.include?("site-update")
end


def parse_tags(block)
  parsed = YAML.safe_load(block)

  tags = parsed && parsed["tags"]

  case tags
  when nil
    []
  when Array
    tags.map(&:to_s)
  else
    [tags.to_s]
  end
rescue Psych::SyntaxError => e
  raise "Could not parse tags: #{e.message}"
end


# ------------------------------------------------------------
# Locate content files
# ------------------------------------------------------------

patterns = [
  "_posts/**/*.{md,markdown}",
  "_writings/**/*.{md,markdown}",
  "_projects/**/*.{md,markdown}"
]

files =
  patterns.flat_map do |pattern|
    Dir.glob(ROOT.join(pattern).to_s)
  end.sort


# ------------------------------------------------------------
# Process
# ------------------------------------------------------------

changed_files = []
unchanged_files = []
unknown_tags = Hash.new { |hash, key| hash[key] = [] }
too_many_tags = []

puts
puts WRITE_CHANGES ? "TAG MIGRATION — WRITE MODE" : "TAG MIGRATION — DRY RUN"
puts "=" * 72
puts

files.each do |file|
  path = Pathname.new(file)
  relative = path.relative_path_from(ROOT).to_s

  text = File.read(file, encoding: "UTF-8")

  # Preserve a UTF-8 BOM if one exists.
  bom = text.start_with?("\uFEFF") ? "\uFEFF" : ""
  working_text = bom.empty? ? text : text.delete_prefix("\uFEFF")

  front_match =
    working_text.match(/\A---\s*\r?\n(.*?)\r?\n---/m)

  unless front_match
    unchanged_files << relative
    next
  end

  front_matter = front_match[1]

  # ----------------------------------------------------------
  # Find tags field without rewriting the rest of YAML.
  #
  # Supports:
  #
  # tags: [one, two]
  #
  # and:
  #
  # tags:
  #   - one
  #   - two
  # ----------------------------------------------------------

  lines = front_matter.lines

  tag_start = nil
  tag_end = nil

  lines.each_with_index do |line, index|
    if line.match?(/^tags\s*:/)
      tag_start = index
      break
    end
  end

  # File has no tags. Leave it alone.
  unless tag_start
    unchanged_files << relative
    next
  end

  first_tag_line = lines[tag_start]

  if first_tag_line.match?(/^tags\s*:\s*\S/)
    # Inline tags declaration.
    tag_end = tag_start
  else
    # Multiline YAML list.
    tag_end = tag_start

    ((tag_start + 1)...lines.length).each do |index|
      line = lines[index]

      # Stop when another top-level YAML property begins.
      if line.match?(/^[A-Za-z0-9_-]+\s*:/)
        break
      end

      tag_end = index
    end
  end

  tag_block =
    lines[tag_start..tag_end].join

  begin
    old_tags = parse_tags(tag_block)
  rescue => e
    warn "ERROR: #{relative}"
    warn "       #{e.message}"
    exit 1
  end


  # ----------------------------------------------------------
  # Exact file override
  # ----------------------------------------------------------

  if FILE_OVERRIDES.key?(relative)
    new_tags = FILE_OVERRIDES.fetch(relative).dup

  else

    new_tags = []

    old_tags.each do |original_tag|
      normalized = normalize_basic_tag(original_tag)

      # --------------------------------------
      # Structural / unwanted tags
      # --------------------------------------

      if DROP_TAGS.include?(normalized)
        next
      end


      # --------------------------------------
      # Do not use "devotional" merely because
      # something lives in _writings/devotional.
      # --------------------------------------

      if normalized == "devotional" &&
         relative.start_with?("_writings/")
        next
      end


      # --------------------------------------
      # Pilgrim's Progress chapter tags
      # --------------------------------------

      if normalized.match?(/\Achapter-\d+\z/) &&
         (
           relative.downcase.include?("pilgrim") ||
           old_tags.map { |t| normalize_basic_tag(t) }
                   .include?("pilgrims-progress")
         )

        new_tags << "pilgrims-progress"
        next
      end


      # --------------------------------------
      # "updates" is contextual.
      # --------------------------------------

      if normalized == "updates"
        if website_context?(old_tags, relative)
          new_tags << "website"
        else
          new_tags << "life-update"
        end

        next
      end


      # --------------------------------------
      # Look up canonical tag or alias.
      # --------------------------------------

      canonical = alias_map[normalized]

      if canonical
        new_tags << canonical
      else
        # Keep unknown tag for now so information
        # isn't silently destroyed.
        new_tags << normalized
        unknown_tags[normalized] << relative
      end
    end
  end


  # Remove blanks and duplicates while preserving order.
  new_tags =
    new_tags
      .reject(&:empty?)
      .uniq


  if new_tags.length > 6
    too_many_tags << [
      relative,
      new_tags
    ]
  end


  # ----------------------------------------------------------
  # Nothing changed
  # ----------------------------------------------------------

  if old_tags == new_tags
    unchanged_files << relative
    next
  end


  puts relative
  puts "  OLD: #{old_tags.join(', ')}"
  puts "  NEW: #{new_tags.join(', ')}"
  puts


  # ----------------------------------------------------------
  # Replace only the tags field.
  # ----------------------------------------------------------

  replacement =
    if new_tags.empty?
      nil
    else
      "tags: [#{new_tags.join(', ')}]\n"
    end


  if replacement
    lines[tag_start..tag_end] = [replacement]
  else
    lines[tag_start..tag_end] = []
  end


  new_front_matter = lines.join

  new_text =
    working_text.sub(
      front_match[1],
      new_front_matter
    )

  new_text = bom + new_text unless bom.empty?

  if WRITE_CHANGES
    File.write(
      file,
      new_text,
      mode: "w",
      encoding: "UTF-8"
    )
  end

  changed_files << relative
end


# ------------------------------------------------------------
# Report
# ------------------------------------------------------------

puts
puts "=" * 72

if WRITE_CHANGES
  puts "Migration complete."
else
  puts "Dry run complete. No files were changed."
end

puts
puts "Files scanned:   #{files.length}"
puts "Files changed:   #{changed_files.length}"
puts "Files unchanged: #{unchanged_files.length}"


unless unknown_tags.empty?
  puts
  puts "UNKNOWN TAGS"
  puts "-" * 72

  unknown_tags.sort.each do |tag, tag_files|
    puts
    puts tag

    tag_files.uniq.each do |tag_file|
      puts "  - #{tag_file}"
    end
  end
end


unless too_many_tags.empty?
  puts
  puts "FILES STILL CONTAINING MORE THAN 6 TAGS"
  puts "-" * 72

  too_many_tags.each do |file, tags|
    puts
    puts file
    puts "  #{tags.join(', ')}"
  end
end


puts

unless WRITE_CHANGES
  puts "Review the output above."
  puts
  puts "If it looks correct, run:"
  puts
  puts "  ruby scripts/migrate_tags.rb --write"
  puts
end