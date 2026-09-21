---
layout: page
title: Writings
permalink: /writings/
description: "Articles, devotionals, and poetry from Musings from Gravel Hill."
---

{% assign crosslisted_posts = site.posts | where: "show_in_writings", true %}
{% assign all_writings = site.writings | concat: crosslisted_posts %}
{% assign types = all_writings | map: "type" | uniq | sort %}

{% for type in types %}
  {% assign writings_by_type = all_writings | where: "type", type | sort: "date" | reverse %}

  {% if writings_by_type.size > 0 %}
## {{ type }}s

{% for writing in writings_by_type %}
- [{{ writing.title }}]({{ writing.url | relative_url }}) – {{ writing.date | date: "%B %d, %Y at %I:%M %p" }}
{% endfor %}

  {% endif %}
{% endfor %}