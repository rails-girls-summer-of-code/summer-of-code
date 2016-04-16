---
title: This isn't a goodbye, it is a continuity
layout: post
created_at: Sat October 03 2015
permalink: blog/2015-10-03-this-isn't-a-goodbye-it-is-a-continuity
current: blog
author: Fanxhe Team
twitter: fanxhe
categories: 
- student-posts
---

It is incredible that three months have passed already and this code summer has ended. It seems like it was yesterday when we decided to participate in RGSoC and the moment that our small great adventure began feels even closer. However, when we recap these months, we realize how many things can happen in such a little time.  

They have been three very intense months, with a lot of new apprenticeship and knowledge, in which we met great people, grew in many aspects and dove into the fascinating world of programming.
What started for us as curiosity a little over a year with the [“Codificadas”](https://es-la.facebook.com/Codificadas) girls, converted into reality at the moment in which we were selected to participate in this summer of code, and now that the experience ends, we’ve realized that it has become a big passion and we want to do this in our profession.  

A brief answer would be an infinity of things, but we believe that it is worth to expatiate for you so there can be a general idea of the effect that RGSoC has had and still has in our lives.  

### TEAM  

We have turned into a great unit team. One that is not only shaped for both of us but also:  

<div align="center"><img src="/img/blog/2015/fanxhe-team.gif" alt="Fanxhe Team" style= "width: 560px" height="315px"></div>  

<p align="center">
  <font color="grey">
    <small>
      <i>Fanxhe Team (left to right: Jonathan Tapia, Ignacio Galindo, Alejandro Espinoza, Gilberto Villa, Anyelina Moreno and Estefanía Cano) =)</i>
    </small>
  </font>
</p>

Our coaches Nacho, Tapia and Gil that have had a great patience, they have dedicated us their time and they have put all their efforts,  determination and desire to teach us everything that was possible and they have become an example to follow and they’re both great teachers.

Our mentor Nico, that despite the distance, the time difference and all the work that had to be done, he has supported us and have found the way and the right moments to be present, and the Content and Media Chief, Jen; She was always willing to help, cared about us and was always smiling.

Our supervisors, the great Katrin and always cheerful Ramón. They both are amazing people attentive professionals who were concerned.

Our coaching-company [“Magma Labs”](http://www.magmalabs.io/), that has provided us with all the possible resources, people have believed in us and they showed support in everything they could.

And for all those people who have been there when we have needed help or support, not only speaking  professionally, but also personally.  

### US IN A NEW WORLD  

The summer of Rails Girls has transformed us, and when we think about the moment we arrived at the office, this comes into our minds:

<div align="center"><img src="/img/blog/2015/fanxhe-team-crazy.gif" alt="Fanxhe Team" style= "width: 150px" height="120px"></div>  
<p align="center">
  <font color="grey">
    <small>
      <i>(Image: <a href="http://ar.cdn01.mundotkm.com/2014/11/buying-tickets-gif.gif" target="_blank">mundotkm.com</a>)</i>
    </small>
  </font>
</p>

A new world opened in front of us, and it was inevitable that we felt insecure, they were hard times… we even thought that all of this was too much for us.  

But as after the storm comes calmness, we had to make a great effort: practice, study, more practice and more study… and more of the same thing over and over again. Bit by bit we gained confidence and fluency, completing our tasks,  getting familiarized with the gem code and developing our logic;  the time we got rid of the nervousness, everything passed by inadvertently.  

The summer of code hasn’t only made us grow as programmers, but also personally. We both have learned more about ourselves, and also about the other; we have won more confidence and we have noticed that perseverance and tenacity, before or after, everything is possible. So we just think that we have been transformed after this summer.  

<div align="center"><img src="/img/blog/2015/fanxhe-team-superwoman.gif" alt="Fanxhe Team" style= "width: 150px" height="120px"></div>  

<p align="center">
  <font color="grey">
    <small>
      <i>(Image: <a href="http://www.giphy.com" target="_blank">giphy</a>)</i>
    </small>
  </font>
</p>

### LEARNING  

RGSoC supposes  a continue learning that starts from the very  first minute. They are team apprenticeship, about how it is worked within the programming world, the basic process to do it, new tools, good practices and, above all, of code that is shown in different languages and under different logics, so there are diverse visions and ways to solve the same task.  

RGSoC also has helped us to overcome barriers. We have to confess that when we decided to start our adventure in the summer of code, we were very scared of our English level, and although there are still many obstacles to bring down that barrier, we have already jumped the first one by losing  fear and we feel safe that soon we’ll be done with this big barrier.  

During this time, we have studied, investigated, read, attended courses and workshops, talks, we have done hundreds of questions and received hundreds of answers or explanations, we have practiced and written many code lines. We have improved our knowledge about JavaScript, Ruby, HTML, CSS, Git and Markdown, we have taken our first steps in Rails and we have learned to use Sinatra, Sass, SCSS, HamL, Jekyll, RSpec, Minitest,  as well as the composition and performance of the gems and, in depth, about the structure and logic of the gem which we are working on: [Living Style Guide](http://livingstyleguide.org/).  

In our first blog post, we already said that since the first moment we believed in the potentiality of this gem bit by bit, as we have been analyzing its code, searched in order to do our task and complete it, we have confirmed  and, in point of fact, it has allowed us grow and learned so much about different areas of programming and also, it has turned us aware of what we have been and are able to do.
There have been hundreds of learning experiences, but the major revelation has been programming as profession and way of life.  

### OUR PROJECT: LIVING STYLE GUIDE  

Ended our summer of code, we can say that we worked and we completed the tasks that we had proposed and that had been accorded with our mentor Nico. Some of them were more simple and some were more complex that took us more time, effort and study than we expected. But, this was precisely what we wanted it: to grow with the project.  

#### What functionalities have we included in the gem?  

- We included the functionality to be able copy the hexadecimal codes  or the variables in the colors examples through a Click event or Alt + Click with vanilla javaScript.  

- We worked on a button that allows copying  your style guide code blocks.  

- We added a search-box that allows searching any word inside of your style guide. This search-box is a filter, so that the user of the gem can decide whether to put it or not in his style guide, putting @search-box, as well as personalizing its placeholder:  

          @search-box placeholder: I am search …  

- We did a button to hide the code blocks that appear in your style guide, and same as the former one, this is a filter that can be included or not, depending on the user:  

          @toggle-code  

- We included a menu of navigation that  is automatically generated  with the style guide in function of the titles and subtitles that the user includes in his own. This means, that is personalized and suitable to the style of each user ( in process of getting merged).  

- We added before and after filters so that the users can place content before or after the main container, and we also added tests for all the filters that we created. ( in process of getting merged)  

- The ultimate task in which we have been working and that we started from scratch is a [live editor](http://lsg-editor.herokuapp.com/). This editor allows you testing the functionality of the gem, learn to use it and see small examples of what is possible to do with the gem.  

There are many things in such a little time, it is a very intense experience, fun, enriching, great and highly recommended. It is something that we wouldn’t want to finish, but the ending of this great stage has come, so we’ll continue learning, contributing and  fighting to achieve a job, because there is nothing better than to convert our passion into a profession. We will be always grateful for the big experience that RGSoC left in our lives, for everything they taught us and the world that they made us discovered. Because, definitely it exists a before and an after in all levels.  

Our team will tell you about our experience in this video  

<div align="center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/LCV5QfbjWVU" frameborder="0" allowfullscreen></iframe>
</div>

<p align="center">
  <font color="grey">
    <small>
      <a href= "https://twitter.com/zazvick">By @zazvic</a>
    </small>
  </font>
</p>

And last but not least, to thank. To thank for each second of these three months that marked and changed our lives. Thank infinitely our coaches [Ignacio Galindo](https://twitter.com/joiggama), [Jonathan Tapia](https://twitter.com/jonat_on) and [Gilberto Villa](https://twitter.com/ingilniero), for supporting us, teaching  us so much, for being the best teachers and yet best people. Thankful to Living Style Guide for having opened us so many doors, to [Nico Hagenburger](https://twitter.com/Hagenburger) for allowing us work with him, helping us in this process, and letting us collaborate in his gem. To [Jennifer Geacone-Cruz](https://twitter.com/anomiseditrix), for being a huge support and a person with whom we can always count.  

Always thanks to [Katrin Kampfrath](https://twitter.com/_die_katrin), so dedicated, so watchful, so patient, so nice. Thanks to [Ramón Huidobro](https://twitter.com/senorhuidobro), for his time, dedication, happiness and contagious energy.  

We’d also like to thank our coaching company “Magma Labs” and [Víctor Velázquez](https://twitter.com/zazvick) as representative of the company, for always being attentive to us, following our process, supporting us and putting all the necessary tools at our disposal for this to be possible. Thanks to our coworkers at "Magma Labs", specially to [Alejandro Espinoza](https://twitter.com/alexesba) for helping us always we needed.  

Thanks to all the students and partners of this RGSoC edition for sharing their knowledge, for being always willing to provide help and support and for the sweet and funny GIFS that made us laugh every morning =).  

Thanks to our dear “Codificadas”, our big teachers that initiated us in this: [Viviana Palacios](https://twitter.com/Sixviv), [Erika Mejia](https://twitter.com/erin_mejiaa), [Ana Castro](https://twitter.com/anymoto) and [Selene Flores](https://twitter.com/enelesmai); also to all the partners and friends that  supported, motivated and believed in us.  

Thanks to the sponsors for contributing to make this possible.
And of course, thanks so much to all the team of RGSoC and its organizers to make this possible, for all the attention, support, dedication, for the great job and for making this experience simply amazing.  

We say goodbye but only for the momentarily, because this isn’t a goodbye, it is a continuity. We hope to keep on learning, contributing to open source, finding a job soon, writing many lines of code and follow on telling how we’re doing in our [blog](http://code.fanxhe.com/) or in [Twitter](https://twitter.com/Fanxhe).
