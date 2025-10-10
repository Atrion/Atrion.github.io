---
layout: page
title: "Blog Posts Archive"
permalink: /blog/
---

{% assign current_year  = site.time | date: '%Y' %}
{% assign current_month = site.time | date: '%B' %}

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{%- comment -%}
If you want newest years first, uncomment:
{% assign posts_by_year = posts_by_year | sort: "name" | reverse %}
{%- endcomment -%}

{% for year_group in posts_by_year %}
  <details class="archive-year" {% if year_group.name == current_year %}open{% endif %}>
    <summary class="archive-year__summary">{{ year_group.name }}</summary>

    {% assign posts_by_month = year_group.items | group_by_exp: "post", "post.date | date: '%B'" %}
    {%- comment -%}
    To sort months, you can transform month names to numbers and sort,
    but for most cases the default grouping order is fine.
    {%- endcomment -%}

    {% for month_group in posts_by_month %}
      <details class="archive-month" {% if year_group.name == current_year and month_group.name == current_month %}open{% endif %}>
        <summary class="archive-month__summary">{{ month_group.name }}</summary>

        {% assign month_posts = month_group.items | sort: "date" | reverse %}
        <ul class="archive-list">
          {% for post in month_posts %}
            <li>
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              <span class="archive-date">— {{ post.date | date: "%B %d, %Y at %I:%M %p" }}</span>
            </li>
          {% endfor %}
        </ul>
      </details>
    {% endfor %}
  </details>
{% endfor %}
