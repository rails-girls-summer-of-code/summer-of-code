---
title: Rails Girls Summer of Code Archive by category
class: page archive
layout: bootstrap
current: categoryview
permalink: /blog/categoryview/
---

<div class="container content--archive">
  <div class="col-md-8">
    <div>
    {% assign categories = site.categories | sort %}
    {% for category in categories %}
      <span class="site-tag">
        <a href="#{{ category | first | slugify }}">
                {{ category[0] | replace:'-', ' ' }} ({{ category | last | size }})
        </a>
      </span>
    {% endfor %}
    </div>

    <div id="index">

      {% for category in categories %}
        <a name="{{ category[0] }}"></a><h3>{{ category[0] | replace:'-', ' ' }} ({{ category | last | size }}) </h3>
        {% assign sorted_posts = site.posts | sort: 'title' %}
        {% for post in sorted_posts %}
          {%if post.categories contains category[0]%}

            <h4><a href="{{ site.url }}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">{{ post.title }} <p class="date">{{ post.date |  date: "%B %e, %Y" }}</p></a></h4>
             <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>

          {%endif%}
        {% endfor %}
      {% endfor %}
    </div>
  </div>
</div>