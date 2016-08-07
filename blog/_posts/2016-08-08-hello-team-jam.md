---
title: Hello World from JaM!
layout: post
created_at: Mon Aug 08 2016
permalink: blog/2016-08-08-hello-team-jam
current: blog
author: Jeena Lee and Malisa Smith
twitter: rgsocJaM
categories:
- student-posts
---

<img src='/img/blog/2016/team-jam.png' onmouseover="this.src='/img/blog/2016/team-jam-funny.png';" onmouseout="this.src='/img/blog/2016/team-jam.png';" /><font color="grey"><small><i>We are silly sometimes! Left: Jeena. Right: Malisa. (photo: Malisa/Jeena)</i></small></font>


Hello World! We are Team JaM: Jeena and Malisa from beautiful Portland, Oregon, USA. We are two biologists who met each other while studying bioinformatics, the child of biology and computer science. This summer, we are working on [Servo](https://servo.org/), the parallel web browser engine written in [Rust](https://www.rust-lang.org/en-US/), and we cannot be having more fun! [Josh Matthews](https://twitter.com/lastontheboat) is our project mentor, [Stefan Novak](https://twitter.com/datahipster) and [Nick Fitzgerald](https://twitter.com/fitzgen) are our coaches, and [Scott Kobewka](http://scottontheinter.net/) is our supervisor.

### More about us!
![Debugging Cats](/img/blog/2016/team-jam-jeena-malisa.png)<font color="grey"><small><i>On our recent trip to a cat cafe. Jeena debugging next to a cat, and Malisa debugging a cat. (photo: Malisa/Jeena)</i></small></font>

**Jeena**:
I spent about half of my life in South Korea, and the other half in the West Coast, USA. I studied genetics in college because I was amazed by how DNA with only 4 letters could translate into so many different flavors of life, ranging from salmonella to elephants. After college I worked at [BoltThreads](https://boltthreads.com/) for a few years, where I programmed yeast to make spider silk. I recently realized that programming computers is similar to programming genomes with DNA, and I decided to study bioinformatics. The more I learn programming, the more I realize how fun it is! Maybe it is no surprise that I find programming fun because I like to make things, including ceramics, cooking, and knitting.

I always welcome learning opportunities, so please reach out to me through my [blog](http://jeenalee.com/) or [twitter](https://twitter.com/theJeenaLee)!

<!-- malisa -->
**Malisa**:
I've spent most of my life in Seattle and Pennsylvania, with bits here and there in Long Island, New Zealand, and Japan. I really love Portland so far! I majored in Biology as an undergrad, but I've always wanted to study more computer science because of its emphasis on problem solving and algorithms. To that end, a little over a year ago I decided to get my Master's in bioinformatics, and since then I've been coding full-time. I'm super excited to have an opportunity to broaden my programming skills this summer with RGSoC.

In my free time I enjoy the following in large quantities: eating, reading, cuddling with cats, swing dancing and ballet, and exploring different Portland-area neighborhoods.

**Stefan and Nick**
![JaM Coaches](/img/blog/2016/team-jam-coaches.png)<font color="grey"><small><i>Our coaches pretending to be not so silly... Left: Stefan. Right: Nick. (photo: Malisa/Jeena)</i></small></font>

Stefan works at Oregon Health and Science University, helping researchers and doctors share data. Though he may not admit, he is also a pinball master!

Nick works at Mozilla, where he hacks on Firefox Developer tools and Spider Monkey. On the weekends, you can find him playing bike polo.

<!-- malisa -->
### What are Rust and Servo?

[Rust](https://doc.rust-lang.org/book/README.html) is a systems-level programming language that was started in 2010 by an employee at Mozilla. It is a compiled language, so creating executable code is slow, but runtime is fast. It is also memory safe, so pointers will only point to things that actually exist. Lastly, it is designed for concurrency and parallelism on multiple cores. You might consider using it for projects where you would otherwise write C++ code. Plus we think Rust is easier to read and write than C++.

![rust-servo-doge](/img/blog/2016/team-jam-rust-servo.png)<font color="grey"><small><i>(photo: www.rust-lang.org/en-US/, www.servo.org)</i></small></font>

[Servo](https://servo.org/) is also Mozilla's baby. It is a parallel browser engine, and it is written in Rust! We are working on Servo this summer.

...what is a browser engine anyway? To generalize, a browser engine takes a URL and displays the document that corresponds to it. Every web browser has one. For example, Firefox's current browser engine is called Gecko and is written in C++. Mozilla's long-term plan is to replace bits of Gecko with bits of Servo. You can read more about browser engines [here](https://en.wikipedia.org/wiki/Web_browser_engine#Technical_operation).

<!-- malisa -->
### Our Project

![fetch](/img/blog/2016/team-jam-make-fetch-happen.jpg)<font color="grey"><small><i></i></small>(photo: www.slate.com. edited by: Malisa)</font>

Within the vast codebase that is Servo, our task is to implement the Fetch API. The Fetch API sends an HTTP Request, [similar to XMLHttpRequest](https://developers.google.com/web/updates/2015/03/introduction-to-fetch). We are writing the Fetch API in Rust and connecting it to the JavaScript task.

Sending an HTTP Request via the Fetch API involves a request and a response. Our task is to follow the class templates for Request, Response, Headers, and Fetch, which are specified by the [WHATWG standards for the Fetch API](https://fetch.spec.whatwg.org/). We're lucky to have very specific instructions and goals for our project. ;)

### What have we achieved so far?


So far we have implemented the Headers API and the Request API. We started out pair programming (which really revealed some of the differences in the way we think and approach programming), but then we moved onto independent tasks.

One cool thing is that because our code is so dependent on the rest of Servo and the WHATWG specifications, over the past month we have had to modify other parts of Servo's codebase to add additional functionality that our code depends on. We've also filed issues with WHATWG where the Fetch spec requires clarification. This has helped us realize "hey, what we're doing actually affects the rest of the world, and we're in it for real!"

Probably even more exciting is the influence that this project has had on *us*.

- The Rust and Servo communities are both really awesome, and since we started working with them our standards for human interaction have gotten higher. ;P
- Coming into this project, we had no experience with low-level languages. We were both used to writing lots of one-off scripts in Python. Working with Rust has really forced us to think about what's going on in [the stack and the heap](https://doc.rust-lang.org/book/the-stack-and-the-heap.html) and what happens in memory when you create or copy an object. It is tough but rewarding.
- On a related note, working on such a big project with such an unfamiliar codebase and lots of contributors is a very valuable experience. Good documentation and collaboration etiquette is appreciated by everybody.
- Plus this is the first time we've even heard that web browser engines exist!

<!-- together -->
### What tips do we want to share?
- Document your daily learnings with TIL ("today I learned"). When you feel like you're not making progress, go through your TILs and realize how far you have come!
- Be vocal about your thoughts, especially when pair-programming. Other people sadly cannot read your mind.
- Asking questions is the fastest way to becoming less dumb **fast** -- [Julia Evans](https://twitter.com/b0rk/status/755020037979856896)

### What will we do next for the project?
You can see our goals on [Servo's issue page](https://github.com/servo/servo/issues/11894). Our next steps are to address the remaining components of the Fetch API, which means:
- Finish the Request API implementation
- Finish the Response API implementation
- Implement the fetch method
- Implement Promise in Servo
- Refine the Request, Response, and Headers APIs

This fall, we are attending [Strange Loop](http://thestrangeloop.com/) and [Rust Conf](http://rustconf.com/), so come say hi! If you happen to be in Portland, OR, drop us a line, and we'll take you to our favorite cafe :)

Thanks for reading, and visit our [blog](https://rgsoc-jam.github.io/) for daily updates and in-depth discussions (coming soon)!
