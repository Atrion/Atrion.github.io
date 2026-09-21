## Summary
- Brief overview of changes

## Why
- Reason/motivation for the change

## Changes
- Bulleted list of files/areas touched

## Screenshots
<!-- optional -->

## How to test locally

```bash
bundle _2.6.9_ install
ruby scripts/check_tags.rb
bundle _2.6.9_ exec jekyll build --trace
git diff --check
```

## Checklist

- [ ] `ruby scripts/check_tags.rb` passes
- [ ] Jekyll production build passes
- [ ] `git diff --check` passes
- [ ] Internal links/images reviewed
- [ ] Mobile layout checked where relevant
- [ ] Spelling/grammar reviewed
- [ ] No unintended large files added
