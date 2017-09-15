---
title: 💎 D for diamonds are forever
layout: post
created_at: Fri September 15 2017
permalink: blog/2017-09-15-d-for-diamonds
current: blog
author: Jen
twitter: jenlijo
categories: student-posts
---
## D for Discourse

It's incredible how fast the summer has gone! (literally as well in Berlin). Choosing a project wasn't easy at first. After researching and consulting our coaches, Discourse seemed the right one to go. In the beginning it was an unknown for us and soon we would discover the immensity of it! A big and beautiful deep ocean of Rails and Ember code hanging around the internet in every discuss corner.

Discourse is great to start to contribute to open source. The community in [http://meta.discourse.org](http://meta.discourse.org) is willing to help and answer any question you might have. It comes full of information to get to know the project and a [Beginner's tutorial](https://meta.discourse.org/t/beginners-guide-to-creating-discourse-plugins-part-1/30515) to build something locally and get familiar with their particular way to add plugins to the main app.

Kaja has also written [some posts in our blog](https://berlindiamonds.blogspot.de/) about what it is to contribute here, and we will try to add up more info to make it a complete guide.

## What we built

Our project was based on creating plugins to let the admins back up the information of the forum in some cloud provider.

We didn't know how long it would take us to build one plugin. I thought we would have one or two at the end of the summer, but we ended up [enabling 4 possibilities](https://meta.discourse.org/t/new-plugins-for-backups/68018) as well as a base class plugin from which all of them inherit (Google Drive, Nextcloud - Jan from Nextcloud left a message in our repo suggesting it, we were super happy to get it and built it right away! - Box, and a new version of the existent backups to Dropbox by [falco](https://github.com/xfalcox)). After this, our mentor [eviltrout](https://eviltrout.com/) found another cool task to give us: downloading these files directly from Discourse and send an email to the user when it's done, which we are on the way of building.

![Team berlindiamonds](/img/blog/2017/2017-09-15-berlindiamonds.png)
<div class="image-credits">Github screenshot</div>

We've learnt so many things this summer: inheritance, injecting code through class_eval and then through event listeners, git git git, a lot of interaction with APIs, the power of gems, how they're built, code structure, the "super" keyword, memoization, triggering Jobs, executing stuff in the console, debugging with puts, byebug, Rails.logger.debug, some testing, drawing routes from the outside, Ember basics and the importance of proper documentation!

![Team berlindiamonds](/img/blog/2017-09-15-berlindiamonds-w-markus.JPG)
<div class="image-credits">Absolventa - Kaja, Markus and Jen</div>

We also participated in a RG beginners workshop in August, Kaja is part of the organization and proposed me to coach. It was a great feeling to see so many women (around 40) curious to code and many coaches happy to share their skills.

## A huge "thank you" to:

The whole Rails Girls Summer of Code organization and supporters for giving life to this amazing project. This means the world to all newcomers and it fills the so important [tutorial/junior gap mentioned by Daniel Kehoe](https://books.google.de/books?id=tvazDQAAQBAJ&pg=PT83&lpg=PT83&dq=%22tutorial+gap%22+rails&source=bl&ots=zu4r8J1vpx&sig=62dYwycJiCjwiDrNAFAkb6RzD7s&hl=en&sa=X&ved=0ahUKEwjZ4fzs7JzWAhXKUlAKHaRrBOQQ6AEILjAB#v=onepage&q=%22tutorial%20gap%22%20rails&f=false).

Our in and offsite coaches for volunteering in this life-changing project. Robin, Markus and Carsten at Absolventa who've answered passionately so many questions the moment we've asked them, and took the time to guide us and use the whiteboard to explain the universe of Rails. To Rojo, the most active online coach who've challenged us with his answers to find the solution by ourselves, chapeau! To Robert, who's been there in our team events and found some time to help out online too.

![Team berlindiamonds](/img/blog/2017/2017-09-15-berlindiamonds-team.png)
<div class="image-credits">photo by Markus @ Absolventa</div>

To Lucas, our super easy going supervisor who had a very positive attitude and pinged us when we were about to miss some organizational stuff, oops! To the Discourse community, Sam and specially [eviltrout](https://eviltrout.com/)), our mentor, who's very clever at the time of dropping hints about the way to go with the requested features and cheered us up when we got stuck on the way.

We have been assigned our first-choice conference GOTO and are looking forward to it :) !

## What's next

We will both start as junior in different companies and will continue our coding journey. Here's an all-code-art-creation to not let the inspiration decay after the summer, cheers!

<iframe width="560" height="315" src="https://www.youtube.com/embed/zeNszro5dQ8" frameborder="0" allowfullscreen></iframe>
<div class="image-credits">live coding laptop band Benoît and the Mandelbrots with Visuals by cappel:nord</div>
