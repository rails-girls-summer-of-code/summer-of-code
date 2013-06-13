---
title: Rails Girls Summer of Code Blog
class: page blog
layout: default
---

<section class="main container">
  <div class="wrapper clearfix">
    <article>
      {% for post in site.posts %}
        <h1><a href="{{post.url}}">{{post.title}}</a></h1>

        <p class='meta'>
          {% if post.twitter %}
            <a href='http://twitter.com/{{ post.twitter }}'>{{ post.author }}</a>,
          {% else %}
            {{ post.author }},
          {% endif %}
          <time datetime="{{ post.created_at | date: "%Y-%m-%dT%H:%M:%S%z"  }}">{{ post.created_at | date: "%B %-d, %Y" }}</time>
        </p>

        {{ post.content }}
      {% endfor %}
    </article>
    <hr/>
  </div>
</section>
