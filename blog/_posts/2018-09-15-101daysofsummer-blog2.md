---
title: An enriching journey, Summers’ 2018 - Team 101 Days of Summer
layout: post
created_at: Sat Sep 15 2018
permalink: blog/2018-09-15-101daysofsummer-blog2
current: blog
author: Nupur Baghel
twitter: nupur_baghel
categories: 
- student-posts
---

## Everything is a dream, we can't stop smiling!!!
![Happy times!](/img/blog/2018/rgsoc-2019-09-15-101daysofsummer-blog2-01.jpeg)
<div class="image-credits"><em>In our happy workspace (Photo credits: Nupur's Laptop)</em></div>
*In our happy workspace (our hostel room :P) with tons of memories from this Summer with Servo and RGSoC ❤️ We wish we had taken a picture with Rakhi and Josh from one of our remote calls :P We’ll take one  soon... ;)*

The summer is about to come to an end and we are already sad about it :( We didn’t even realise how fast all the time escaped while we were busy scratching our heads over hidden surprises in Rust :P It has been the best summer so far <3
Thanks to Ana, Vaishali and every member of the Rails Girls Summer Of Code organising team who made it possible for us. We couldn’t ever thank enough our wonderful team with our super-excited and super-helpful mentor Josh, extremely lively and cheerful supervisor Rakhi, and the definitely the both of us....


## Something about Servo and our work - 
- Created by Mozilla Research using the new systems programming language **Rust**, Servo is an experimental project which is supporting Firefox’s new browser engine **Quantum**. It has been known to be safe, fast and concurrent which give it its superfast speed 🚀.  
- Our main task this summer was to add support for **Responsive Images** in Servo. This feature would allow us to specify different image sources in our html such that only the perfect one which suits our device would get loaded. It would save time as well as bandwidth because you would not want a heavy image meant for a desktop to get loaded on your phone!! Moreover if your device width changes for eg if you rotate your tablet to horizontal from vertical view, then a new and wider sized image will get loaded.
If you want to know more about responsive images, they have been explained very well in [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).


## A brief summary of things we learnt 📝
### DOM and DOM API’s 
Writing DOM Doge API was a lot of fun. This was the first starter task that we were supposed to complete. Here is the [link to the task](https://github.com/servo/servo/wiki/Implementing-a-web-standard-(RGSoC)). This gave us an insight into what document object model of a web browser is and how a DOM API can be implemented in Servo.

### Dereferencing in Rust 
When we pass the objects as a pointer, there might be a need to dereference the object to be able to use it. In the very beginning, we were actually stuck on a very basic error.
```
a = Root<Something>
```

We had to extract Something and use it. All we had to do is dereference, but how? It is very simple.
```
b = *a 
```

And use b directly. * Can be used to dereference as many times as you want.

### Match 
A very good alternative to if else conditions in Rust. An example is -
![how to use match example](/img/blog/2018/rgsoc-2019-09-15-101daysofsummer-blog2-02.jpeg)
<div class="image-credits"><em>Photo credits: Paavini's Laptop</em></div>

### Borrowing
Borrow errors and ownership is something that make Rust safer but the errors related to them can be irritating at times. 
```
One way to avoid those is to try and use a let binding to increase the scope of the variable if its being enclosed by `{}`
``` 

### Unwrap_or ()
Unbinding Option<> wrapper can be easy to use by a simple .unwrap(). But if in case you want to provide some default value to the variable (when the option’s value is None), you can provide that using unwrap_or().

### Mutability and DomRefCell binding in Rust -
Since by default every variable is immutable in Rust, once declared inside a structure its value cannot be changed. But DomRefCell does the magic and addes the capability to mutably borrow and alter its value at a later point of time. 

### Intermittent tests in Servo 
Our second PR could not be merged for may days because of these. These tests are something that one is not supposed to worry about :P. These are the tests that might pass on one’s local machine but when being built and tested by bors-servo, lead to some failure or vice-a-versa. This basically happens because of some timing issues in the tests. If bors-servo is complaining about these tests then all you have to do is create a issue with tag-intermittent, and magic, it won’t block your PR anymore.  

### Closures in Rust 
We cannot use `self` inside closures because passing `self` is unsafe. One has to use `this` instead. 

### Backtrace 
This gives you the power to get the whole backtrace of every call of a particular function. We had to use to all the time to know why some of tests that we had were failing. This is how you use it - 
```
println!("modifying edit_point: {:?}", Backtrace::new());
```

<hr>
Couldn’t understand anything of what was said above?
Here is a very good source to get started with these basic things in Rust - http://intorust.com/
Every time we faced issues in any of the above, our mentor Josh was there to help us! Not just him, everyone on IRC channel of Servo used to help us in solving these little things. We completely loved the Servo community <3 So feel free to ask anyone anytime you feel like contributing or get stuck somewhere!


## Let us get to know about some statistics now :P
- In total we got **20 PR’s** merged by the end of RGSoC. Approximately 10 each for the both of us. Hooray!! 
- We worked on more than **5 algorithms**, to name a few….
 - updating the source set
 - reacting to environmental changes
 - selecting the correct image source
 - updating image data
 - reintroduction of parse a sizes attribute
 - correcting behaviour of currentSrc 
- Our code resulted in passing of more than **700 new tests** 😮 Seems unbelievable? Go and search for the word fail at - [click me!](https://github.com/servo/servo/pull/21280/files?utf8=%E2%9C%93&diff=unified)
- And finally, we wrote more than **1000 lines** of code!

You can view pull requests made by both of us as well :D 
- [Nupur's Contributions](https://github.com/servo/servo/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Anupurbaghel+)
- [Paavini's Contributions](https://github.com/servo/servo/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Apaavininanda+)
That’s all for now!! (We guess its a good progress indeed! ) <br> <br>
![think-gif](/img/blog/2018/rgsoc-2019-09-15-101daysofsummer-blog2-03.gif)
<div class="image-credits"><b>Gif taken from http://www.reactiongifs.com/thinking-yes/</b></div>


## The most interesting things which happened to us ⚡⚡

### Landing our pull requests (PRs) :
We enjoyed completing our code and putting up new PRs every week and even wrote code for several small-to-large algorithms. But the fun part is, we jumped with joy each time any PR got merged, even if it was not a lengthy algo but just a new test we had written. The happiness and excitement made sure we were pumped up for the next task in line!

### Seeing the responsive images work 
Implementing responsive nature of images in Servo was one of the main tasks of our internship. A part of this was being implemented since last few years but with our code, we have finally completed this feature. Hurray!!  
Er, a few small parts remain, but with we are making sure that’s done too :) Resizing the screen in Servo now leads to changing sizes of the images (Well that’s being responsive :P) 

### Hundreds of passing tests
Adding new code resulted in new tests to start succeeding. But after successfully implementing the reacting to environment changes algorithm (a hard nut to crack), we were able to see hundreds of passing tests. We had to deal with a bunch of failing tests too. But finally being able to resolve all those was purely satisfying. It was such a happy moment :) We could feel the impact we were able to make in such a large codebase. 

### Learning new things from Rakhi
We had a video call with our supervisor every Monday. We discussed about the program including what were the things which were troubling us and were we being slow on making contributions (to mention she was also with Servo last summer so she had a complete idea) 
But apart from this we also chatted about some stories of our life which make such impact and leave long lasting impressions. Rakhi’s expressive, lively and frank nature made us open up to her completely. We cherish our interactions and we will definitely make sure we keep in touch <3 You are awesome!

## Its not the end!
Although the summer is about to end, all our enriching memories will last for life!! The happiness in our hearts is truly overwhelming. We enjoyed contributing a lot and would continue with the good work every now and then. Since we have learnt so much from everyone we would love to guide more people who want to start with open source :) Feel free to reach out to both of us!

### Twitter
[Nupur](https://twitter.com/nupur_baghel)
[Paavini](https://twitter.com/paavininanda)

### Github
[Nupur](https://github.com/nupurbaghel)
[Paavini](https://github.com/paavininanda)

### Medium
[Nupur](https://medium.com/@nupurbaghel)
[Paavini](https://medium.com/@paavininanda)

### Join the Servo community on IRC
#servo on [irc.mozilla.org](https://wiki.mozilla.org/IRC)

Thank you once again to everyone who helped us reached this stage!! Thank you RGSOC ❤️
Will miss this family a lot.....


