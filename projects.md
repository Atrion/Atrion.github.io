---
layout: page
title: "Projects"
permalink: /projects/
description: "Historical, preservation, research, and personal projects from Gravel Hill."
---

{% assign visible_projects = site.projects
  | where_exp: "project", "project.hidden != true"
  | sort: "updated"
  | reverse %}

<div class="projects-container">

  {% for project in visible_projects %}

    {% assign card_image = project.thumbnail | default: project.image %}

    <article class="project-card">
      <a href="{{ project.url | relative_url }}">

        {% if card_image %}
          <img
            src="{{ card_image | relative_url }}"
            alt="{{ project.title | escape }}"
            decoding="async"
            {% if forloop.index > 2 %}loading="lazy"{% endif %}>
        {% endif %}

        <h2>{{ project.title }}</h2>

        {% if project.updated %}
          <p class="project-card-date">
            Updated {{ project.updated | date: "%B %d, %Y" }}
          </p>
        {% endif %}

      </a>
    </article>

  {% endfor %}

</div>