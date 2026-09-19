---
layout: page
title: "Tags"
permalink: /tags/
---

<p class="tags-intro">
  Browse blog posts by topic. Select a tag to view the posts filed under it.
</p>

{% assign sorted_tags = site.tags | sort %}

{% if sorted_tags.size > 0 %}

<div class="tags-grid">
  {% for tag in sorted_tags %}
    <details class="tag-group" id="{{ tag[0] | slugify }}">
      <summary class="tag-summary">
        <span class="tag-name">{{ tag[0] }}</span>
        <span class="tag-count">
          {{ tag[1].size }}
          {% if tag[1].size == 1 %}post{% else %}posts{% endif %}
        </span>
      </summary>

      <ul class="tag-post-list">
        {% assign tag_posts = tag[1] | sort: "date" | reverse %}

        {% for post in tag_posts %}
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
    </details>
  {% endfor %}
</div>

{% else %}

<p>No tags found.</p>

{% endif %}