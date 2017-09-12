---
title: A story of an issue  
layout: post
created_at: Mon Sept 18 2017
permalink: blog/2017-09-18-story-of-an-issue
current: blog
author: Neta and Rete
twitter: ruby_bears
categories:
- student-posts
---

# A story of an issue

**No matter if the issue is big or small, complicated or simple, a bug or a feature - in our Summer of Code the issues have a similar cycle. Team "Code Bears" has some important lessons to share after two and a half months of working on [diaspora\*](https://diasporafoundation.org/).**

#### Pick out the issue

What do we want to achieve? What would we like to learn? Do we want to use skills we already learned or learn something new? Would we actually see the results of our work? We try to ask ourselves all those questions when we approach the long [list of issues](https://github.com/diaspora/diaspora/issues) of diaspora\*. Naturally at first we got a lot of direction from our coaches and mentor on this step, but as the summer progressed we had stronger opinions on those questions ourselves.

For instance, the more back-end the better. We just love our RoR programming! Of course we also love it when we learn and understand front-end code, but it's very clear that we both are more attracted to the back-end side.

#### Ask the diaspora\* community

Diaspora\* has a very active community and we had to find out for each issue we chose if it was still available. We got great feedback from the community just by asking about it on the issue page. In [some cases](https://github.com/diaspora/diaspora/issues/7471) it even triggered a long discussion about ways to solve the issue or even the very necessity of a solution. The community is very responsive whenever we have questions or require consultation on our solution. You just gotta love the diaspora\* community for their involvement and investment.

#### Search. Everywhere.

Like two Alices in diasporaland, with every issue we embark on an ongoing quest through the intricate and entangled maze called the diaspora source code. It is not your typical MVC app (if that even really exists). Finding the related files to the issue and trying to understand the relationship between them is no less than a superpower one needs to develop.

Apart from the familiar models, controllers and views, we have encountered, and thereby learned about, lots of other types of files: mailers, presenters, helpers, services, workers, templates, javascript files, specs, factories and more.  
<div style="text-align:center"><img src ="https://media.giphy.com/media/ACLCA6bvwBEvC/giphy.gif" style="width: 350px;" /></div>

#### Tutorials, Tutorials, Tutorials

In order to understand all the new terms we learn, we spend quite a lot of time watching and reading tutorials (We find [Lynda[](https://www.lynda.com/), among others, to be an excellent source for beginners tutorials). Overwhelmed by all this new theory, our coaches are very helpful with mediating and explaining new and complicated concepts.

#### Get confused

Connecting theory and practice always, but always, resulted in a big confusion. Things on diaspora almost never work according to theory. We think we figured out where we need to add code, it fails, the error raises some filename we don't know, which leads us to go back to our diasporaland quest, where we don't understand the code, or we find a bunch of new terms, or we can't figure out why this file even exists, and so on.

The most common sentence called out loud during this summer, by students and coaches alike, while looking at the code is: "This is weird".      
<div style="text-align:center"><img src ="https://media.giphy.com/media/h2JpSEKZRbYtO/giphy.gif" /></div>

#### Play with the code

Puzzled, with no other choice, we play with the code and see what happens. After realizing we can't really ruin anything as long as we work on our local branch, anything goes.

This trial and error process, combined with a pinch of the theoretical understanding we acquire and alongside coaching sessions, leads us to write code in one file, change code in another, delete code in a third file and refactor code in a fourth one. We made a habbit out of checking things in the terminal, rails console and the browser console, inspecting the page and using a debugger.

This is usually when we make our progress with the issue: typing on our keyboards, while feeling clueless, but seeing stuff happening on our screen - BEST. FEELING. EVER! We are quite sure that after the summer the other engineers in our workspace will really miss the squeaking sounds we make when we get something to work.     

#### The git dance

When we think our code is ready, it's time to open the PR and break out in our git dance. We have a kind of a complicated git setup, with two remote repositories and two local ones, as well as git-flow which requires re-basing and squashing commits. It took us a while to understand what we are doing and dare to push code by ourselves. Common mishaps include, but not limited to, `git reset --hard`, mysterious branch diversions, merge conflicts and the occasional "mind f***" moment. It was hard to keep our `HEAD` in the right place.

Therefore, during the first half of SoC, we had a very helpful weekly git session with one of the coaches. Although we still sometime struggle with git, we now have our own git dance and can handle it quite independently.
<div style="text-align:center"><img src ="https://avatars3.githubusercontent.com/u/23492828?v=3&s=200" style="width: 250px;" /></div>

#### Code review

Obviously every PR resulted with some corrections and suggestions to improve our code. The beauty of the code review is that it always comes with explanations! We learn a lot just from everyone's comments. Again, you just gotta love the diaspora\* community that understands our state (beginners), reviews our code accordingly and helps us with the fixes.

#### Eat ice cream

while celebrating merged PR.  

## What did the story of an issue teach us so far?

Here are some lessons, big and small, we've learned from this roller coaster called SoC:

**Know your study materials:** Find your favorite source for study materials: whether you like to watch, read or practice, whether you prefer it on-line or hard-copy, it is very efficient to have a go-to learning sources.

**Mix and match:** Using diverse ways of learning, which means a combination of watching, reading, exercising and working on the source code, is the most useful way to tackle new topics. It might seem obvious, but it's still an important lesson for us.

**Master git:** Pretty self explanatory, but we can't stress enough how helpful it was to understand our git-flow.

**Keep a notebook:** Use the traditional pen and paper to keep track of new terms and concepts, which at first glimpse could be quite overwhelming and even intimidating. It's also a great place to sketch and doodle.

**Try not to be afraid** to make mistakes, play with your code, express your opinions and make your own decisions. After 10 weeks of working regularly with 6 coaches, each one with their own way of solving problems, we realized the only thing we have left to do is decide which way works best for us.

**Try not to be shy** and ask for help and explanations. Experience shows it often works for the best.

**Learn from your code reviews:** See "Code review" above :).

**We are in love with diaspora\*:** The complexity of the code and the involvement of the community have made this summer very challenging and rewarding. Check the [project on github](https://github.com/diaspora/diaspora), maybe you would want to contribute as well.

**Remember to celebrate:** Did you open a PR, did your code get merged, did you just finish refactoring a beautiful piece of code? Great! Celebrate and go eat some ice cream.

## Thanks

This amazing summer would not be amazing without our team and the help of other supportive people:

* Our team's coaches: **Chiara, Dani, David, Glauber, Jano** and **Laura**, thank you so much for all you help, time, energy, patience, white-board sessions, source-code sessions, exercises and so much more.
* Other coaches: **Alon, Andrey, Liron** and **Remi** for helping on specific topics and substituting for coaches on vacation.  
* Our supervisor: **Fanny**, thank you for caring for our well-being throughout the summer and always being there for questions.
* Our mentor: **Lisa**, thanks for your availability for questions and tips about diaspora\*.
* Diaspora community: Thank you for being so responsive and helpful, and for keeping such a pleasant communication with your contributers. Special thanks for members who reviewed patiently and commented on our code- **@Flaburgan, @SuperTux88** and **@svbergerem**.
* Our coaching company: thank you **SoundCloud** for hosting us and suppling us with a brilliant learning atmosphere and amazing coffee.    
<div style="text-align:center"><img src ="http://content.mycutegraphics.com/graphics/thankyou/owl-chalkboard-thank-you.png" /></div>
