---
title: Clojurian's Update - Working on re-frame's Tracing Tool
layout: post
created_at: Mon September 4 2017
permalink: blog/2017-09-04-clojurians-update.md 
current: blog
author: Saskia and Chris
twitter: saskalii
categories:
- student-posts
---


# Really Great Summer of Clojure

It's really exciting to see and feel our progress. In the beginning we were grasping at the huge space of ClojureScript tools and libraries and editors, and now as the last month begins our contributions to re-frame’s tracing tool have already made it easier for developers to debug their applications! There's also a hint of melancholy that the summer of code will be ending in four weeks. Thoughts are starting to take shape about how to address the last third of the project. What do we want to achieve? What would be the ideal outcome? Let's gather some thoughts!

## Learning and Growing

Through a glorious combination of working on re-frame's tracing tool, reading other peoples' open source projects, hanging out with our wonderful mentors and coaches, and tinkering with our own side projects, we gathered experience in programming with ClojureScript and re-frame and learned about langugage specific idioms. What we find most valuable though is the great advice we got from our coaches and our mentor. They all have given us so much input for how to become good programmers, not only technically, but especially in terms of finding a good and efficient workflow, addressing problems on a conceptual level and the importance of clear and constructive communication. 

![image](/img/blog/2017/coaching.jpg)
<div class="image-credits">coaching with Matt! / Photo by: Chris Sun</div>

We are very thankful to have the opportunity to work together so closely with all of you! A big thank you for all your support!

## Building and Collaborating

We worked on many features for the [tracing tool](https://github.com/Day8/re-frame-trace) with the intention to make it more easily usable. The first things we focused on were improving the filter functionality, making resizing of the window smooth and easy and adding some adjustments to the user interface. Another important addition was saving user data like filters to localstorage to ensure persistence. The traces that are being shown in the panel are still a lot and can feel a bit overwhelming. Our focus for the next weeks is to reduce the amount of traces to the ones that are important. For the end of the summer, we want to compare the tracing tool before and after we started working on it.  

## Community <3

In the third week of our project, we went to **EuroClojure**, which took place in Berlin this year. 

![image](/img/blog/2017/euroclojure.png)
<div class="image-credits">EuroClojure / Photo by: Chris Sun</div>

It was a great opportunity to connect to people from around the globe some of which are using re-frame in their everyday work. Being at conferences always leaves us very inspired and full of ideas for what to look into next. We also got some feedback and ideas for how re-frame’s developer experience could be improved. In general, people were really excited about our project and some of them met us for lunch in the following weeks to talk about the project in more depth. These meetings were super valuable for us, as we were able to focus on very specific parts of development with re-frame. It's so wonderful to be surrounded by the community in person after chatting over slack and github and twitter!

We also went to the monthly [Clojure Berlin](https://www.meetup.com/Clojure-Berlin) meetups, where we chill with and hear about the projects and intellectual musings of local Clojurians. I love how close the Berlin Clojure community feels, and these meetups often feel more like hangouts than tech events. It's really special.

![image](/img/blog/2017/clojure-meetup.png)
<div class="image-credits">Clojure Meetup Berlin / Photo by: Chris Sun</div>


## RGSummerofChallenges

Open source and learning comes with difficulties along with the good times.

Clojure doesn't have the best documentation, and it's widely known within the community that the beginner experience is rough. The ClojureScript tech stack is so big! It took us the first couple of weeks to properly orient around tools of the ecosystem and the language itself: build tools, development tools, ClojureScript compiler, JavaScript interop, frameworks, libraries, fighting and reconciling with our editors. This is all before writing any code, which can feel really frustrating, because that's what we're here for, right?

![image](/img/blog/2017/cljs-comic.jpg)
<div class="image-credits">CLJS Comic / Comic by: Chris Sun</div>

Luckily, the Clojure community is very helpful and social, and sometimes posting in the proper channel of [Clojurians slack](http://clojurians.net) would result in solutions, feedback, encouragement, or a push in the right direction. And of course our coaches and mentors were really eager to help!

Organisation was also a challenge. Being self directed is already hard, and there were not only many parties to coordinate with, but it was also not explicitly defined who was supposed to take responsibility/have decision-making power for which things. Being that all the parties consist of kind and considerate humans, it was an odd and sometimes frustrating balancing act for everyone involved between wanting to take action and also not wanting to infringe on others. I imagine this is a common pain-point in open source, so it’s an important experience to learn to navigate. Project organisation was also a challenge because there were so many possibilities, so many ways we could make the developer experience better that it's hard to pick just a few!

## After the Summer

The future is uncertain, but the job hunt has begun, and we've both begun taking bold steps towards securing full-time Clojuretastic livelihoods. Continuing to work with Clojure and Clojurescript would be a dream, however improbably this might be, but with the momentum from Summer of Code and the support of the Clojure community we have high spirits!

Over the summer we've accumulated a huge pile of Clojure, programming, open source, and general life notes and feelings and hope to eventually sculpt these into blog posts. Also we've kicked off so many collaborations and personal ClojureScript projects we're really enthusastic about continuing to work on!

We are both helping organise [ClojureBridge Berlin](http://clojurebridge-berlin.org), which will take place right after RGSoC ends. ClojureBridge is close to our hearts, and is what brought us together as a team in the first place, so it feels like everything is coming full circle, starting and ending with community <3