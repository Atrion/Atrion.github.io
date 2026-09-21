---
layout: page
title: "Tags"
permalink: /tags/
custom_js: /assets/js/tags.js
description: "Browse posts, writings, and projects from Gravel Hill by topic."
---

<p class="tags-intro">
  Browse blog posts, writings, and projects by topic.
  Select a tag to see everything filed under it.
</p>

{% assign visible_projects = site.projects | where_exp: "item", "item.hidden != true" %}

<div class="tags-grid">

{% for tag_def in site.data.tags %}

  {% assign current_tag = tag_def.slug %}

  {% assign tagged_posts = site.posts
    | where_exp: "item", "item.tags contains current_tag"
    | sort: "date"
    | reverse %}

  {% assign tagged_writings = site.writings
    | where_exp: "item", "item.tags contains current_tag"
    | sort: "date"
    | reverse %}

  {% assign tagged_projects = visible_projects
    | where_exp: "item", "item.tags contains current_tag"
    | sort: "updated"
    | reverse %}

  {% assign post_count = tagged_posts | size %}
  {% assign writing_count = tagged_writings | size %}
  {% assign project_count = tagged_projects | size %}

  {% assign total_count = post_count
    | plus: writing_count
    | plus: project_count %}

  {% if total_count > 0 %}

    {% if tag_def.aliases %}
      {% for alias in tag_def.aliases %}
        <span
          id="{{ alias }}"
          class="tag-alias-anchor"
          data-tag-target="{{ current_tag }}"
          aria-hidden="true">
        </span>
      {% endfor %}
    {% endif %}

    <details class="tag-group" id="{{ current_tag }}">
      <summary class="tag-summary">
        <span class="tag-name">{{ tag_def.label }}</span>

        <span class="tag-count">
          {{ total_count }}
          {% if total_count == 1 %}item{% else %}items{% endif %}
        </span>
      </summary>

      <div class="tag-content">

        {% if post_count > 0 %}
          <p class="tag-section-heading">Blog Posts</p>

          <ul class="tag-post-list">
            {% for post in tagged_posts %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  {{ post.title }}
                </a>

                <span class="tag-post-date">
                  {{ post.date | date: "%B %d, %Y" }}
                </span>
              </li>
            {% endfor %}
          </ul>
        {% endif %}


        {% if writing_count > 0 %}
          <p class="tag-section-heading">Writings</p>

          <ul class="tag-post-list">
            {% for writing in tagged_writings %}
              <li>
                <a href="{{ writing.url | relative_url }}">
                  {{ writing.title }}
                </a>

                <span class="tag-post-date">
                  {{ writing.date | date: "%B %d, %Y" }}
                </span>
              </li>
            {% endfor %}
          </ul>
        {% endif %}


        {% if project_count > 0 %}
          <p class="tag-section-heading">Projects</p>

          <ul class="tag-post-list">
            {% for project in tagged_projects %}
              <li>
                <a href="{{ project.url | relative_url }}">
                  {{ project.title }}
                </a>

                {% if project.updated %}
                  <span class="tag-post-date">
                    Updated {{ project.updated | date: "%B %d, %Y" }}
                  </span>
                {% endif %}
              </li>
            {% endfor %}
          </ul>
        {% endif %}

      </div>
    </details>

  {% endif %}

{% endfor %}

</div>