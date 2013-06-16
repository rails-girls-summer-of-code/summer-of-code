---
title: Rails Girls Summer of Code Blog
class: page blog
layout: default
---

<section class="main container">
  <div class="wrapper-blog">
    {% for post in site.posts %}
      <article class="content-blog">
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
      </article>
    {% endfor %}
      <aside class="sidebar-blog">
        <div>
          <h3>Help us support more students!</h3>
          <a href="/campaign/" class="button">Donate Now!</a>
        </div>
        <div class="rss">
          <a href="/blog.xml"><img src="/img/icons/rss.png" alt="RSS icon"></a>
        </div>
      </aside>
  </div>
</section>
