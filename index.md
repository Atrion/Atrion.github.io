---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
# layout: home
---
![URU - Relto]({{ "/assets/img/Relto.jpg" | absolute_url }})


<h1>Latest Post</h1>
{% for post in site.posts limit:1 %}
{% endfor %}

<h1>Recent Posts</h1>
{% for post in site.posts offset:1 limit:2 %}
{% endfor %}
