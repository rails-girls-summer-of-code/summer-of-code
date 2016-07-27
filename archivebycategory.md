---
title: Rails Girls Summer of Code Archive by category
class: page archive
layout: bootstrap
current: categoryview
permalink: /blog/categoryview/
---

<div class="container content--archive">
  <div class="col-md-8">
    <h1>Browse by category</h1>
    <div>
    {% assign categories = site.categories | sort %}
      <ul class="list--none">
      {% for category in categories %}
        {% if category[0] != 'blog' %}
          <span class="site-tag">
            <li>
              <a href="#{{ category | first | slugify }}">
                    {{ category[0] | replace:'-', ' ' }} ({{ category | last | size }})
              </a>
            </li>
          </span>
        {% endif %}
      {% endfor %}
    </ul>
    </div>

    <div id="index">
      <ul class="list--archive list--none">
        {% for category in categories %}
          {% if category[0] != 'blog' %}
            <a name="{{ category[0] }}"></a><h3>{{ category[0] | replace:'-', ' ' }} ({{ category | last | size }}) </h3>
            {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
            {% for post in sorted_posts %}
              {%if post.categories contains category[0]%}
              <li>
                {{ post.date | date:"%d %b %Y" }} <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
                 <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
              </li>
              {%endif%}
            {% endfor %}
          {% endif %}
        {% endfor %}
      </ul>
    </div>
  </div>
  <div class="col-md-3 col-md-offset-1">
    {% include blog_sidebar.html %}
  </div>
</div>