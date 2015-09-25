---
title: A Tale of Sweet Cocoa with Gems
layout: post
created_at: Wed September 23 2015
permalink: blog/2015-09-23-a-tale-of-sweet-cocoa-with-gems
current: blog
author: Karla and Emma
twitter: cocoagems
---
<img src="/img/blog/2015/CG-FirstWeekGH.JPG" alt="Team CocoaGems">
<br><font color="grey"><small><i> Emma and Karla during the first week in the GitHub office.</i></small></font>

## A little bit of background

CocoaGems is a pretty large team. We had the great fortune of having four mentors from CocoaPods and a total of seven coaches. Five of our coaches are from GitHub and two of them are private coaches. GitHub hosted us during the entire Summer of Code and provided us with office space in there beautiful office in San Francisco. [CocoaPods](https://cocoapods.org/) is a dependency manager for iOS development written in Ruby. It allows iOS developers to use pods containing libraries and also to share their own pods with other developers.

## What we did together

While pairing with our CocoaPods coach Boris Bügling we worked on a CocoaPods plugin called [CocoaPods Label](https://rubygems.org/gems/cocoapods-label). Step by step we created and released our first gem together. We took terms driving, navigating and asking questions. As you fellow developers know, pairing is a great way to practice your patience, asking questions and taking initiative. Communicating about code can be frustrating when you are having trouble explaining what you mean, but it gives you hints about what you need to work on more since the only way to be good at explaining something is to really understand it. It is also pretty epic to put your trust in someone much more experienced to walk you through there ways of thinking and solving problems.

<img src="/img/blog/2015/CG-EBKTwitter.JPG" alt="Team CocoaGems">
<br><font color="grey"><small><i> Karla, Boris and Emma visiting the Twitter office .</i></small></font>

We also had more theoretical sessions with our coaches at GitHub about general Computer Science subjects like algorithms, search, sorting, regular expressions, piping etc. As individuals we worked on our own project helping CocoaPods with defined issues. This allowed us to work with projects that inspired us at our own pace. While working on our issues we scheduled tutorial sessions with our coaches and mentors about concepts we needed to understand to be able to solve our issues. As if this wasn’t enough we also worked on our side iOS projects with one of our savant GitHub coaches to better understand CocoaPods audience. We also created a [blog](http://cocoagems.github.io/) together using Jekyll. It is a developer friendly blog tool that allows you to write blog posts in markdown and just push it to your git hub repository to post a new blogpost using GitHub pages.

<img src="/img/blog/2015/CG-3DPrint.JPG" alt="Team CocoaGems">
<br><font color="grey"><small><i> During CodeConf in Nashville we got to take a 3D image.</i></small></font>

<img src="/img/blog/2015/CG-CodeConf.JPG" alt="Team CocoaGems">
<br><font color="grey"><small><i> We also got some nice t-shirts, had fun and learned a lot.</i></small></font>


## What we learned

Karla:

How do you work on an Open Source Project without a read.me as a newbie? As some of you may know this summer [CocoaGems](http://cocoagems.github.io/about.html)  have been working on CocoaPods. Sorting the order of how pods are listed in an Xcode project. The issue I have been working  on this Summer [Cork](https://github.com/CocoaPods/Cork) did not contain a read.me. Fortunately, I had mentors and coaches who offered there precious time to work with us. The question that confronted me shortly after choosing to work on Cork is how do you go about getting more background of the Code base while learning Ruby? Git-blame came to the rescue. Git-blame allows you to track down the first person to contribute to the file and also to track every other commit since the first to the most present connecting each one to its author and date. While working on an open source project it is useful to know whom the contributors of each commit are because it makes it a lot easier to ask them questions directly.

How to automate your learning process. Is that even possible? learn to schedule meetings with mentors, coaches, colleagues and managers naturally by scheduling one each and every single time after every session. The best resource available for learning aside of the web are definitely our coaches and mentors. I learned to schedule as many sessions with them. Some were in person, some were over screen hero and some of the meetings we scheduled were also with other RGSoC participating teams and or Github Summer of Code students in particular Mark Tareshawty. Google Calendar became my best friend. Adding Meetup events that I wanted to attend and also scheduling a well thought out plan for the day made it so that transitioning from one activity to the next happened with as least cognitive exertion as necessary.


Emma:

I wanted to take the opportunity to get exposed to different parts of programming during this summer. To get started I chose one of the issues labeled easy in the CocoaPods repository. The pods used to be ordered case sensitive and that caused confusion for users with a large number of pods. By working on this issue I learned a great deal of things that I can't imagine learning in a better way. I hadn't been exposed to a larger codebase before an it felt exciting to search for the lines of code that loaded the pods in Xocode. I picked my coaches and mentors brains for all of there tips and tricks to find the right place and ignore everything else. I also learned more about how sorting works and became better at understanding Ruby syntax. Once I got the sorting figured out it was time to rewrite the tests. I needed to learn how to write tests, did a bunch of online tutorials and got help from our coaches. Once the tests succeeded I was very proud to do my first [pull request](https://github.com/CocoaPods/Xcodeproj/pull/294) ever to an open source project.

After that I worked on moving the [source code for search](https://github.com/CocoaPods/cocoapods-search) to its own plugin (gem) to make the codebase more modular. By doing so it will be easier to make changes or improvements to search in the future. With my new skills from previous work it was easier to get started, however CocoaPods is pretty huge and has its own infrastructure to get your head around. I struggled with understanding the development environment and how to run my local changes with Rake. Once I got that figured out I worked myself backwards copying code too the new plugin and making sure I got everything right. Moving the tests for search was actually more complicated than moving the source code since the tests required a lot of files in the fixture folder to run the tests. By working on this I  got a better understanding of what a gem is an how it's structured. For the last month I chose to work on a new web project called [CocoaPods stories](https://github.com/CocoaPods/stories.cocoapods.org) that enables user generated lists of pods. I've always wanted to learn more about databases and I feel really inspired to be able to do so in this project working my way through the issues.


## Thank you <3

Karla:
The summer was a full on learning experience - it makes me happy to know  that we kept a RGSoC Team Apps journal- this summer has to be the best well spent three months of my life and best use of time. An enormous thank you to our CocoaPods Mentors: Kyle Fuller, Orta Therox, Boris Bugling and Samuel Giddins. To our GithHub coaches: Jake Boxer, Jesse Toth, Rachel Meyers,  Rob Rix and Ross Mc Farland. Learning about software development, fundamentals, Git, algorithms,how to write tests, and Agile has been a great experience with you!!

Emma:
I just want to aim a big thank you to everyone who made these three months of immersive learning possible. Thank you to Rails Girls Summer of Code organizers for creating this excellent program to help change the ratio in open source development. Thank you to CocoaPods for believing in us, giving us support and projects to work on. Thank you to GitHub for hosting us and giving us coaching in various subjects. Thank you to our private coaches for your patience, time and support.


<img src="/img/blog/2015/CG-2ndDinnerCocoaPods.JPG" alt="Team CocoaGems">
<br><font color="grey"><small><i> Memebers of CocoaPods getting together for dinner after AltConf. Photo by Karla</i></small></font>
