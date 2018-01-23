---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
# layout: home
---
![URU - Relto]({{ "/assets/img/Relto.jpg" | absolute_url }})


<ul class="entries">
  {% for post in paginator.posts %}
  <li>
    <a href="{{ post.url }}">
    <h3>{{ post.title }}</h3>
    <p class="blogdate">{{ post.date | date: "%d %B %Y" }}</p>
    <div>{{ post.content |truncatehtml | truncatewords: 60 }}</div>
    </a>
  </li>
  {% endfor %}
</ul>
