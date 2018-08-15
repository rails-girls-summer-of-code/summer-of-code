---
title: Team ☀️ 'Sunshine' on RGSoC 2018!
layout: post
created_at: Thu Jul 19 2018
permalink: blog/2018-07-19-team-sunshine
current: blog
author: Sujin Lee
twitter: sujinleeme
categories:
- student-posts
---

# Who we are

<center>
<img alt="team sunshine photo" src="https://sujinlee.me/content/images/2018/07/coding_rgsoc.jpg" width="100%" align="middle"/>
<div class="image-credits"><b>Team Sunshine: Sujin Lee & Gyujin Cho (image by Sujin Lee)</b></div>  
</center>

안녕하세요(annyeonghaseyo)! We are Sujin and Gyujin from 'Sunshine' team in Seoul, S.Korea. We are working for [Babel.js](https://babeljs.io/), an Open Source JavaScript Transpiler that converts cutting-edge JavaScript into plain old ES5 JavaScript that can run in any browser. 

We are full stack JavaScript developers who have common interests in UI development and interactive interfaces. Before jumping into the programming world, we were artists: Gyujin was a designer and Sujin was a musician. We love art, creativity and technology. Based on both sides of programming and art experiences, we say the process of making graphic design or composing a music piece is very similar to computer programming.

[Gyujin](https://twitter.com/MarinaGJCho) is a junior frontend engineer at [Ridibooks](https://ridibooks.com), South Korea's leading e-reading services company. Staring with ES6, she has used jQuery, Vue.js, React.js, and TypeScript last two years for company product.

[Sujin](https://twitter.com/sujinleeme) is a graduate student in Seoul National University and she has pursued her passions of music and programming with equal vigor, aiming to make creative work that inspires. Nowadays she is strongly interested in making interactive music applications using machine learning. She leads the Women Who Code Seoul Network and is trying to build a more diverse and inclusive tech community here in Korea. Everywhere she goes she always has a pair of running shoes with her to run.

# How we met
Last february, as soon as Sujin came across a news about the opening of the Rails Girls Summer of Code Applications, it just stuck in her mind. Sujin was confident that she could get a great opportunity to contribute to a real Open Source Software project as a member of Open Source ecosystem. After that Sujin searched for a like-minded team mate in Django Girls community in Seoul and Gyujin that's how we got on the same boat. We asked close senior engineers to be our team coaches and everyone eagerly accepted the request and this is how we formed Team Sunshine to start our open source journey. 

# What brings us to join RGSoC
It is certain that the numbers for women engineers in the tech industry are already pretty bleak, but the situation is even worse as far as participation in open source projects is concerned. Additionally, we thought there was no room for the entry level of developers in open source projects and we weren't familiar to open source community until we met RGSoC. Unfortunately, we couldn’t meet any woman open source contributor who works the world's leading repository of open-source code, in Korea. We were highly motivated by RGSoC's initiatives to bring more diversity into open source and last RGSoC fellows's successful stories boosted our confidence. And we couldn't be more thrilled to think that our code could be running on millions of computers! Yes, RGSoC is definitly worth it.

During our preparation for the RGSoC application, we had to pick candidate two projects. Among other projects, [Babel](https://babeljs.io/) was the best fit for our needs. We had already used ES6 features for mordern web development, experienced React for SPAs and moveover we have a passionate concern for the next generations of ES.

We also read a recent [Henry’s writing](https://medium.freecodecamp.org/were-nearing-the-7-0-babel-release-here-s-all-the-cool-stuff-we-ve-been-doing-8c1ade684039) published in free code camp medium. We were touched by the warmth of his welcome to Babel open source community. He says that "Babel is in a great position to be an educational tool for programmers so they can continue to learn how JavaScript works". We thought that  through contributing to the project, they can learn about Javascript core concepts such as ASTs, compilers, language specification. 

# Ta-da! What a surprise! 
One day in April, we had a video call from Ana and Ramón from the RGSoC team. We felt a little nervous at the beginning of about 5 min, however, it fell from us very quickly because these two warmhearted supervisors made us feel very comfortable. Actually, we didn't think that we were successful in making them enthusiastic about us so that any of us were expecting to be able to get in.

Two weeks later, Ana and Vaishali requested a second round interview because the selection process had been a bit more demanding than previous editions. It ended up being a surprise call were we learned that we were accepted in RGSoC! 🎉 We were thrilled with the good news and it was a moment we will never forget. 

<div>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Congrats to <a href="https://twitter.com/sujinleeme?ref_src=twsrc%5Etfw">@sujinleeme</a> and <a href="https://twitter.com/MarinaGJCho?ref_src=twsrc%5Etfw">@MarinaGJCho</a> on ☀️Team Sunshine ☀️! The <a href="https://twitter.com/babeljs?ref_src=twsrc%5Etfw">@babeljs</a> team is super excited to work with ya&#39;ll this summer for <a href="https://twitter.com/RailsGirlsSoC?ref_src=twsrc%5Etfw">@RailsGirlsSoC</a> 😊<a href="https://t.co/JaKjUiHlfE">https://t.co/JaKjUiHlfE</a></p>&mdash; Henry Zhu (@left_pad) <a href="https://twitter.com/left_pad/status/988019997023920128?ref_src=twsrc%5Etfw">April 22, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

## Our Project: Babel.js

<center>
<img alt="label logo" src="https://cdn-images-1.medium.com/max/1600/1*XmHUL5DeySv_dGmvbPqdDQ.png" width="50%" align="middle"/>
<div class="image-credits"><b>Babel official logo (image by babel.js)</b></div>  
</center>

Babel is an open-sourced JavaScript compiler that leader companies like Facebook, Netflix, and Spotify and countless others adopt to ship software for the web. Babel not only allows developers to use the latest syntax in older browsers, but even has its role in shaping the future of the language itself due to its adoption in the community. The SPA frameworks like Angular, React, Vue, Ember also use Babel. It's downloaded more than 14 million times a month on npm. Isn't it amazing? ✨

In Bable offical website, there is [Babel REPL](https://babeljs.io/repl/), a playground for ES6; where user can write ES6 code, check the relevant code in ES5; and also the output. 

<center>
<img alt="babel repl" src="https://sujinlee.me/content/images/2018/08/repl-example.png" width="80%" align="middle"/>
<div class="image-credits"><b>Repl - Babel website (image by Sujin Lee)</b></div>  
</center>

Currently, the [Babel core team](https://babeljs.io/team) is going to replace CodeMirror to [Ives'](https://twitter.com/CompuIves) [CodeSandBox](https://codesandbox.io/), the new code online editor. An end goal is to show a different view of the output code: [AST](https://astexplorer.net/), output code, or [time travel](https://github.com/babel/babel-time-travel). We have just started to work for integration time travel in REPL and are going to contribute for UI development with help of our mentors and coaches.

<center>
<img alt="babel join" src="https://sujinlee.me/content/images/2018/07/Screen-Shot-2018-07-17-at-11.06.38-PM.png" width="80%" align="middle"/>
<div class="image-credits"><b>Join babel team in GitHub (image by Sujin Lee)</b></div>  
</center>

## How we work
We are part-time sponsored team and we meet from 6pm to 10pm at [PeachTree](https://www.coworker.com/south-korea/seoul/peachtree), a co-working space that supports startups via its networks, spaces, amenities and various programs. The name 'PeachTree' comes from the tale of 'Romance of the Three Kingdoms'. Just like how Yubi, Gwanwoo and Jangbi pleged their brotherhood under the peach tree. We hope to cooperate in harmony each other in its space under the peach tree.

We have regular meeting with all members. Our team has 6 different time zones; Seoul, Lisbon, NY and more! 

<div>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">☀️<a href="https://twitter.com/hashtag/RGSoC2018?src=hash&amp;ref_src=twsrc%5Etfw">#RGSoC2018</a> <a href="https://twitter.com/hashtag/RGSoCSunshine?src=hash&amp;ref_src=twsrc%5Etfw">#RGSoCSunshine</a> DAY8 <a href="https://twitter.com/MarinaGJCho?ref_src=twsrc%5Etfw">@MarinaGJCho</a> <a href="https://twitter.com/sujinleeme?ref_src=twsrc%5Etfw">@sujinleeme</a><br>✅ We had two 📞; with <a href="https://twitter.com/AnaSofiaPinho?ref_src=twsrc%5Etfw">@AnaSofiaPinho</a>, and  <a href="https://twitter.com/existentialism?ref_src=twsrc%5Etfw">@existentialism</a> <a href="https://twitter.com/left_pad?ref_src=twsrc%5Etfw">@left_pad</a> <a href="https://twitter.com/CompuIves?ref_src=twsrc%5Etfw">@CompuIves</a> <br>✅ Checked Sandpack PR to REPL <br>✅ Ready to review code of current babel-time-travel <br>👉 Read More? <a href="https://t.co/M7oEjz8ygA">https://t.co/M7oEjz8ygA</a> <a href="https://t.co/ZraU9wJzCR">pic.twitter.com/ZraU9wJzCR</a></p>&mdash; Sujin Lee (@sujinleeme) <a href="https://twitter.com/sujinleeme/status/1017263419802521600?ref_src=twsrc%5Etfw">July 12, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

## Meet shining our supervisor, mentors, and coaches!

<center>
<img alt="team sunshine with supervisor, coaches and mentors photo" src="https://sujinlee.me/content/images/2018/08/repl-example.png" width="80%" align="middle"/>
<div class="image-credits"><b>Team Sunshine Collage (image by Ana Sofia Pinho)</b></div>  
</center>

We are honored to have the opportunity to join open source community and collaboration with the experts. We are pleased to introduce our supervisor, mentors, and coaches!

### Supervisor: RGSoC 
* [Ana Sofia Pinho](https://twitter.com/AnaSofiaPinho)
Ana lives in Coimbra, Portugal. She has been involved with RGSoC as an organizer and supervisor since 2016. She handles the marketing and social media related areas of RGSoC.
As a supervisor Ana is our RGSoC contact for the whole summer. She keeps an eye on the general well-being of the project's progress and assists in the non-coding aspects of the Rails Girls Summer of Code.

### Mentors : Babel.js
* [Henry Zhu](https://twitter.com/left_pad)
Henry is a developer in NYC who left his job at Behance this past March to maintain Babel full time with the support by backers on Patreon and Open Collective. He's interested in living out the parallels of digital communities and faith through open source.

* [Brian Ng](https://twitter.com/existentialism) 
Brian is a developer and startup advisor living in Houston, Texas. He helps maintain Babel and contributes to other open source projects in his free time.

* [Logan Smyth](https://twitter.com/loganfsmyth)
Logan is a Bay Area-based developer who has been involved with Babel for the past 3 years helping with development efforts, overall maintenance efforts, and user support. He is interested in open source, software language design, and writing good code.

### Coaches : Local
* [Byungjune Yoon](https://twitter.com/YoonByungjune)
Byungjune is a frontend engineer at [DANO](https://danoshop.net/), a health-care startup. He has a desire to make a better world with technology and loves that open source allows him to do just that. He is also interested in social, political, and gender issues. He worked on [voteforkorea.org](https://voteforkorea.org) project, the national voting lottery a.k.a, as an incentive, giving to the people who participated in the national election a chance to win a lottery.

* [Hyeonsu Lee](https://twitter.com/incleaf)
Hyeonsu is a frontend engineer at [Ridi](https://ridicorp.com), an e-book startup. He loves to learn the new things to get out of the comfort zone. He is familiar with JavaScript and React. He is serving in the military at the moment as a software engineer.

* [Joeun Park](https://github.com/corazzon)
Joeun is a senior backend engineer of wide experience on online games and advertising companies. Currently, she teaches data science and machine learning using python language to students from beginners to experts. Joeun runs a YouTube channel, '[Today Code](https://www.youtube.com/channel/UCLR3sD0KB_dWpvcsrLP0aUg)' featuring short, educational videos focusing on data science topics.

* [Seongjun Kim](https://twitter.com/wagurano)
Seongjun is a prominent rubyist writing code for world peace, however, he has used java for various type of products in his company. He contributed to make social campaign web platforms, [voteaward.com](https://github.com/peace-code/voteaward) and [ansim.me](Source) by ruby on rails and tries to raise local ruby community.

* [Dohyung Ahn](https://twitter.com/adhrinae)
Dohyung is a frontend engineer who has been working on React-Typescript based projects recently. He is in [protopie.io](https://www.protopie.io/) now. He has a huge enthusiasm for contributing to open source culture and he is happy to help programmers to not only improving their technical skills, but also products and projects. 

## What do we want to achieve by the end of the summer?
RGSoC is a shot at life. Again, it is a pleasure to join for Rails Girls Summer of Code program and meet fellow women developers in Open Source Community again. Our primary focus is continuing to learn advanced level of Javascript and growing up to be open source developers! We want to make people recognize the contributions women are making and inspire more women through our lines of code, PRs, and more during RGSoC. If we have a chance, we are willing to give a talk about our open source activities.

## Follow #RGSoCSunshine on twitter
We share our team news, daily working report, funny moments, achievements, compliments and more using [#RGSoCSunshine](https://twitter.com/hashtag/RGSoCSunshine?src=hash) on Twitter! 💖

> Keep your face to the sun and you will never see the shadows. - Helen Keller 

Sunshine is the vital and main source of energy for Life on Earth. So if we focus on the Sunshine - work, process, habit - it will bring us positivity in life and we will never feel frustration and negativity.

Just like our team name, we will always look on the bright side of life with a positive and optimistic energy.
