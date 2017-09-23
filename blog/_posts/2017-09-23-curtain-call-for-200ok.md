---
title: Act II - Curtain Call For Team 200 OK
layout: post
created_at: Sat Sep 23 2017
permalink: blog/2017-09-23-curtain-call-for-200ok
current: blog
author: Prachi & Ipshita
twitter: Team200OK
categories:
- student-posts
---

Wow, it’s 23th September already and we just can’t believe that RGSoC is coming to an end. It has been a whirlwind of a summer - with so much learning both in our professional lives and personal. We will sorely miss the daily logs, catching up with each other, the superbly motivating coaching sessions, pair programming, code reviews and weekly sync ups with Mayar, who is the best ~~supervisor~~ team buddy we could have hoped for. 

### The Star of the moment - our project ‘coala’

We have already introduced our project, [coala](https://github.com/coala), a code analysis tool, in our first blog post.
Through the course of the summer, we were at complete liberty to choose which aspect of this vast project we wanted to work on. As the bonding period drew to a close and as the summer began, we gradually made small, but steady advances into understanding the codebase. We were ramped up to developers in the coala community.

### Lights, Camera, Code
Our project was writing generic bears for coala. Bears are Python scripts which help you check for bad coding practices, styles etc. in different languages.
 There are two types of bears :
 - Native Bears
 - Linter Bears
 
Linter bears are Python wrappers around existing code linting tools available in other languages, to integrate them into coala, using the coala API. To top it all, the coala docs also provides a comprehensive bear writing guide, which ensured that we could write bears smoothly.
 
In our second week, we started writing our first linter bears and as the summer draws to a close, we have already worked on several bears including:

- **RubyFlogBear** - Flog is a Ruby gem which performs complexity analysis on Ruby code using the ABC metrics. It is one of the most popularly used tools for measuring Ruby code complexity, or a measure of the amount of ‘pain’ the code is in, in an easy to read ‘torture’ report. RubyFlogBear wraps this gem and integrates it into coala.

- **HAMLLintBear** which wraps around a tool haml-lint that helps keep HAML files clean and readable. This bear is made super-configurable, implementing all the possible flags and functionalities of haml-lint.

- **OclintBear** a static code tool for improving quality and reducing defects by inspecting C, C++ and Objective-C code and looking for potential problems like possible bugs, unused code, code smells and bad practices

- **SpotBugsBear** which statically looks for potential bugs in Java code.
 
In addition, we also worked on **five other bear related issues** for different coala projects such as **coala-quickstart**, and **corobo**. Apart from this, as per the common coala community practise, we have persistently performed code reviews and helped out new developers to the community, just like we were helped out by others at the beginning of this summer.
 
<img src="/img/blog/2017/team200oksummer.png" alt="Our Summer in Numbers"/>
<div align="center" class="image-credits">Image Credits: Prachi, with the help of Canva</div>

### Cue Takeaways
- **Pair Programming** RGSoC introduced us to concept of pair programming that works by establishing a mentoring mechanism and spreading knowledge through the team. The constant iterations of writing code and getting it reviewed by the other person ensure that you not only write and send in quality code, but also debug it efficiently. Pair programming, for us, has ensured better designs, higher quality, bug-free code and more functionality per unit time in the long term perspective.
- **Code Reviews** Our project coala stresses heavily on code reviews. The practice of reading the comments others left on our PRs and reviewing others in exchange has helped us learn so much. Not only, have we learned to debug code written by others, we can also now reason why a certain functionality needs to be designed in a particular way.
- **Test Driven Development** The best practice is to write tests as you go. The developer who writes the development code is the best person for writing the testing suite. Ensure maximum code coverage. Keep in mind the 80–20 rule of code coverage _(20% of time will be spent in achieving 80% code coverage and 80% of time will be spent in achieving the remaining 20%)_ And lastly, Manual testing of code is important after automated testing is complete. There is no substitute for peer review and feedback.

You can learn more about our takeaways at our fortnightly blogs: [Prachi](https://medium.com/@prachi121096) and [Ipshita](https://medium.com/@ipshitachatterjee)

### The Final Act

This might be the final act, but for Team 200 OK, the show will go on. Our talk at **Codemotion Berlin 2017** has been accepted. We’ll be speaking about RGSoC, the program, our experience, our project coala and the work we did during the summer. It’s a dream come true for us! 

We plan to continue contributing to coala, finish up our open PRs and take up more challenging issues. We will also explore other open source organizations to work for. We are also extremely motivated to encourage other women to take up open source. 

It has been a wonderful summer. But, it isn’t over yet.

#### Fin.


