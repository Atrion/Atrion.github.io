# Atrion.github.io

[![Last Commit](https://img.shields.io/github/last-commit/Atrion/Atrion.github.io?logo=github)](https://github.com/Atrion/Atrion.github.io/commits/master)
![Made with Jekyll](https://img.shields.io/badge/Made%20with-Jekyll-%23cc0000)
![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222)
[![Pages Build](https://github.com/Atrion/Atrion.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/Atrion/Atrion.github.io/actions/workflows/pages/pages-build-deployment)
[![CI](https://github.com/Atrion/Atrion.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/Atrion/Atrion.github.io/actions/workflows/ci.yml)
![Code License](https://img.shields.io/badge/Code%20License-MIT-green)
![Content License](https://img.shields.io/badge/Content%20License-CC%20BY--NC--ND%204.0-blue)


Personal site and knowledge garden — posts, projects, writings, tags, and links — built with **Jekyll** and deployed via **GitHub Pages**.

## 📁 Structure
- Content: `_posts/`, `_projects/`, `_writings/`
- Pages: `index.md`, `blog.md`, `projects.md`, `writings.md`, `links.md`, `manifesto.md`, `about.md`, `tags.md`
- Config/build: `_config.yml`, `Gemfile`, `Gemfile.lock`
- Assets & snippets: `assets/`, `_site-snippets/`
- Custom domain via `CNAME`

## ✍️ Editing Content
- **Blog posts**: add Markdown to `_posts/` using `YYYY-MM-DD-title.md`.
- **Projects / writings**: add to `_projects/` and `_writings/`. Include front matter (`title`, `date`, `tags`, etc.).
- **Navigation / pages**: update the corresponding `*.md` files and, if needed, `_config.yml` navigation.

## 🧪 Run Locally

> **Prereqs**: Ruby and Bundler installed. On Windows, WSL is recommended; on macOS/Linux use system Ruby or a version manager (e.g., `rbenv`).

```bash
# Install dependencies
gem install bundler
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Open http://127.0.0.1:4000
```
If you encounter native extension issues, ensure Xcode Command Line Tools (macOS) or build-essential (Linux) are installed.

## Licensing
- **Code**: MIT — see `LICENSE`.
- **Content**: CC BY-NC-ND 4.0 — see `LICENSE-content`.
