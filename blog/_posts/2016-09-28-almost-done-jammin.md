---
title: Almost done jammin'
layout: post
created_at: Wed Sep 28 2016
permalink: blog/2016-09-28-almost-done-jammin
current: blog
author: Jeena Lee and Malisa Smith
twitter: rgsocJaM
categories:
- student-posts
- conferences
---

Summer is over! Sadly this means our summer of code is also coming to an end.

### What have we accomplished so far?
First of all, we learned *a lot* about ***everything***! If we were to categorize the technical things we learned, it would be:

- computers (the heap and stack, garbage collection, unicode)
- internet and things (DNS, IP, HTTP, web browser engine, JS engine)
- Rust (memory-safe language that's also easy to use!)

As a bonus, we learned about what makes a good project good, how to motivate people to learn, and how to motivate ourselves to continue learning.

In terms of project related accomplishments, we have implemented the Headers, Request, and Response APIs. We have also added support for the Fetch method, and hopefully we are almost done with implementing Body mixin methods! Throughout this journey, we also discovered ambiguous wording and bugs in the Fetch spec. These improvements have come in the form of submitting 17 pull requests to [Servo](https://github.com/servo/servo) and opening 5 issues at [WHATWG](https://github.com/whatwg/fetch). How exciting! A lot of the groundwork was already done (thank you Servo contributors!), which made our project so much more tangible and productive.

### Fetch in action!

Below is a simple example of fetch usage in locally built Servo.

![Go fetch!](/img/blog/2016/team-jam-fetch-example.gif)<font color="grey"><small><i>Watch Servo making fetch happen! (gif: Team JaM)</i></small></font>

### Going to conferences
**RustConf**
<br>
We attended the first ever [RustConf](http://rustconf.com/). We were so lucky that it happened to be in our city, Portland, OR. We had a great time meeting other people who like Rust and learned a lot from the informative talks! Many thanks to RustConf organizers for granting us a day full of fun and learning.

- [Jeena's blog post about RustConf](http://jeenalee.com/2016/09/23/rust-conf.html)

**Strange Loop**
<br>
We also went to [Strange Loop](http://thestrangeloop.com/) in St. Louis, MO!

![Strange Loop 2016](/img/blog/2016/team-jam-strange-loop-silly.png)<font color="grey"><small><i>Having fun at the City Museum in St. Louis! X) Also featured: Ore from Team B'More Stunners and our coach Nick! (photo: Team JaM)</i></small></font>

Strange Loop was a large conference; this year, there were over 1000 attendants and 5 talks going on at once. We learned about many concepts that we were unfamiliar with, such as lambda calculus, turing machines, scheduling algorithms, and computational origami. We came back with a long list of things we want to learn deeper, which made us happy. We are grateful to Strange Loop and Rails Girls Summer of Code for the opportunity to learn new things!

- [Jeena's blog post about StrangeLoop](http://jeenalee.com/2016/09/27/strange-loop.html)
- [Malisa's blog post about RustConf and StrangeLoop](http://hellomalisa.me/2016-09-20/rustconf-and-strange-loop.html)

### Many *many* thanks to...

- Our mentor, Josh Matthews (aka jdm). Thank you, jdm, for your boundless patience while we learned the ropes, and for your easily digestable explanations of how Servo works! We asked a LOT of questions. jdm also gave a great talk about [Optimizing Open Source Projects for Contribution](http://www.joshmatthews.net/oscon16/)! By the way, we're half-convinced jdm has both a crystal ball and a time machine at his disposal.
- Our supervisor, [Scott Kobewka](http://scottontheinter.net/). We always finished our weekly video calls feeling better about how much we've accomplished, even when we sometimes felt like we were moving at a snail's pace! Only one more call left ;( ....
- Our coach [Nick](https://twitter.com/fitzgen). Nick was our go-to person for Rust questions and had our back whenever we (the front-line) were battling with the borrow-checker. As a Mozilla employee, he also knows a lot about Servo design, which was super helpful. Thanks, Nick!
- Our coach [Stefan](https://twitter.com/datahipster). We went to Stefan for all things git and web-related. Even when we sort of knew *how* to implement fetch, we were confused about *why* we were implementing fetch. Stefan helped clear that up for us!
- Tons of people from the Servo and Rust communities! Everyone on IRC and github was so responsive and helpful, we feel so warm and fuzzy all over. :) Thanks to [Manish](http://manishearth.github.io/) for taking time to help us with tricky Servo questions, even with the wacky time-zone situation. Thanks also to [annevk](https://annevankesteren.nl/) for helping us understand the [Fetch Spec](https://fetch.spec.whatwg.org/), [seanmonstar](https://github.com/seanmonstar) for help with [hyper](http://hyper.rs/), [KiChjang](https://github.com/KiChjang) for his feedback and Rust tips, and many, many more people...!
- And, of course, a giant thank you to everyone at Rails Girls Summer of Code who made this summer possible! <3 <3

### So, what's next?
We hope to have implemented a large chunk of the Body mixin by end of this week. After that, well, we both liked contributing to Servo so much that we plan on continuing to contribute. We're really proud of what we've accomplished in the last three months. Now that we know what we're capable of, nothing can stop us from trying and learning new things!
