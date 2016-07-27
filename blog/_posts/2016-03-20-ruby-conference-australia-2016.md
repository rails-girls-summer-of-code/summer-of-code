---
title: Ruby Conference Australia 2016 — Gold Coast!
layout: post
created_at: Sun Mar 20 2016
permalink: blog/2016-03-20-ruby-conference-australia-2016
current: blog
author: Vi Nguyen and Sarah Ni
twitter: teammelbkoala
categories: 
- conferences
- student-posts
---

This year’s Ruby Conference Australia was held on the Gold Coast, a vibrant and breathtaking city, known for its world famous Surfer’s Paradise — a beach and surfing haven — and home to the country’s most exciting theme parks.   

Over two days in February, 26 amazing speakers from around the world came to Sea World Resort to share their knowledge in all things Ruby-related — technical and non-technical. There were five elective workshops that were offered on the first day being Developer Flow, Go, Trailblazer, Rails Girls and Rails Girls Next. As Vi attended the conference and Sarah attended a workshop separately, this blog post will be split in two parts. The first highlighting the main talking points from the various talks, whilst the second will be a description of Rails Girls Next, a workshop that follows from Rails Girls. Each section represents our own personal views and experiences.

### 5 Take Aways from the Talks by Vi Nguyen

Though Ruby Conf was a technology conference, for me, it really brought home the idea that what enhances technology is the human element, and that code really is just an expression of that. 

**Takeaway #1 — Want to go from newbie to expert coder? Read code & fill in your learning gaps.**

Saron Yitbarek's talk “Reading Code Good” shared eight guidelines on how a person could go from newbie to expert code.  One hour every Sunday, Saron would read code with a few mates and from this social learning she tried new things that then prompted questions, research and interaction with the code. The digression from what was known and what wasn’t known was where most of her learning happened.  Importantly, by learning together, it filled a gap in that self-learning to code can be excruciatingly lonely and overwhelming, but, when done together, it’s not so scary.  

You can [watch Saron’s talk in full here](https://rubyconf.eventer.com/rubyconf-australia-2016-1489/learning-code-good-by-saron-yitbarek-1928).

**Takeaway #2 — Your ruby gem does more than just distribute libraries, you can use local ruby gems to better structure your large rails app.**

In Enrico Teotti’s talk, I learned that ruby gems could be used locally to better manage very large applications (previously, I just used remote ruby gems so I could avoid writing code from scratch).  Instead of generating new scaffolds and classes within one big app, local ruby gems could be used to create a dependency structure.  What this means is that a local ruby gem would contain everything that has your first feature in it and when you get new functionality, you extract shared functionality to another gem.  What you then get is a view of the application in chunks => reduced cognitive overload => more manageable application.   

If you are interested in the technical implementation of using local ruby gems, [watch Enrico’s talk](https://rubyconf.eventer.com/rubyconf-australia-2016-1489/build-and-maintain-large-ruby-applications-by-enrico-teotti-1929).

**Takeaway #3 — Empathy makes you a better developer because your feature implementations are likely to be closer to what the user wants.**

Ernie Miller’s talk was about empathy as a building block for humane development.  Humane development has at its core a simple and obvious belief that humans work with other humans to build software and this software is subsequently, used by humans.  Because of this, it’s important to cultivate empathy (i.e. how to speak the thoughts and feelings of someone who isn’t you).  Empathy makes you a better developer because you’ll have a better sense of why you’re building something and why it’s important. Your perception goes from “What would I want if I were them?” to “What would make them smile?”.  Programming is about building things and according to Miller, “If you’re empathizing well, you’ll build something people love”.  

Ernie’s talk is fantastic and you can [watch a recording of his talk on empathy here](https://rubyconf.eventer.com/rubyconf-australia-2016-1489/humane-development-empathy-by-ernie-miller-1945).

Below is a picture of Ernie and I — don't forget to check out his awesome t-shirt!

<img src="/img/blog/2016/ruby-conf-au-ernie-miller-and-vi.jpg" alt="Ernie Miller at Ruby Conf Au 2016">
<br><font color="grey"><small><i> Ernie Miller at Ruby Conf Au 2016 (Photo: Vi Nguyen).</i></small></font>

**Takeaway #4 — Event sourcing as an alternative to using the CRUD accepted actions of “update or destroy”**

The talk by Sebastian von Conrad questioned whether data should be destroyed or updated at all.  This was really useful to me because sometime in late 2015, my developer installed the [paranoia gem](https://rubygems.org/gems/paranoia/versions/2.1.5) because I wasn’t comfortable with deleting data that was associated with say, a user account.  When a rails app destroys or updates data using Active Record, the original data is lost.   Is it right to lose data?  Well…something that might not be useful now may be useful later.   In the case of organizations that rely on user generated content, like Wikipedia, destroying data could create huge problems - imagine what would happen if a user were to be able to delete their account and have their associated contributions deleted aswell…

Sebastian talked about Event Sourcing which ensures that all changes to the application state are stored as a sequence of events - kind of like an accounting system so that nothing is deleted but rather a balance is kept of all that’s happened. With event sourcing you can query events and use logs to go back to a past state.  That’s pretty neat!

If you’re interested in event sourcing, you can watch Sebastian’s talk [here](https://rubyconf.eventer.com/rubyconf-australia-2016-1489/event-sourcing-or-why-activerecord-must-die-by-sebastian-von-conrad-1933). 

**Takeaway #5 — Programming is an expression. Read what’s out there and look at style guides but also, find your own voice.**

As idioms exist in language, programming languages are not excluded.  Arne’s talk was about burning your idiomatic ruby.  While idiomatic language sounds natural and requires less mental processing, according to Arne, “treating idiom as normative hampers innovation”.  For example, what would happen if a new language got ported into Ruby?  In such cases, we shouldn’t be rigid in the way we approach programming.  Idiomatic doesn’t necessarily always equal good.  Programming is expression and there are style guides out there that you can reference, but it’s also important to find your own expression. 

Arne will be introducing a really exciting screencast and he's an expert in Clojure, so definitely [follow Arne on twitter](https://twitter.com/plexus).  You can also check out his [very intelligent talk called "Burn Your Idiomatic Ruby" here](https://rubyconf.eventer.com/rubyconf-australia-2016-1489/burn-your-idiomatic-ruby-by-arne-brasseur-1936).

**In conclusion…** 

While not a ‘takeaway’, it’s also worth mentioning for those interested in business or who are operating their own business, that Jeff Casimir’s talk shared some great business gems (pun intended).  [Mila Dymnikova's](https://twitter.com/milameow1) visual notes on this highlight the main points from his talk perfectly.  A big thank you to Mila for allowing me to share her notes on this blog.

<img src="/img/blog/2016/ruby-conf-au-mila-dymnikova-jeff-casimir-notes.jpg" alt="Notes on Jeff Casimir talk by Mila">
<br><font color="grey"><small><i> Ace notes on Jeff Casimir's talk by Mila Dymnikova (Notes and Photo: <a href="https://twitter.com/milameow1" target="_blank">Mila Dymnikova</a>).</i></small></font>

So that’s a wrap!  If you wish to [see the full set of talks, they’re online  here](https://rubyconf.eventer.com/rubyconf-australia-2016-1489).  But, before I go, this is an Australian conference right?  So I’ll leave you with a collage of party pictures and the obligatory Aussie animal pictures.

<img src="/img/blog/2016/ruby-conf-au-collage.jpg" alt="A collage of social events at Ruby Conf Au">
<br><font color="grey"><small><i>
1. From left to right: my roomie, Indah who is a front-end dev, Jo who is lead developer at <a href="https://www.cultureamp.com/" target="_blank">Culture Amp</a> and I at the opening party (Photo: Vi Nguyen).  
<br>2. A cutie pie koala, just because (Photo: Thomas (originally posted to Flickr as Koala Bear) <a href="http://creativecommons.org/licenses/by/2.0" target="_blank">CC BY 2.0</a>, via Wikimedia Commons).  
<br>3. From right to left: Timmy from <a href="https://buildkite.com/" target="_blank">BuildKite</a>, Indah and I at the opening party.  We forgot our logo tees (Photo: Vi Nguyen).  
<br>4. A surprise breakfast for the speakers and volunteers at Sea World Resort — we had breakfast next to dolphins (Photo: <a href="https://twitter.com/freibuis" target="_blank">Freibuis</a>).  
<br>5. From left to right: Lauren and Jo, both Ruby Australia committee members at the closing party at Movie World (Photo: Vi Nguyen).  
<br>6. An octopus, my favourite animal.  This is a blue-ringed octopus that you can find in Australia.  If you see it, get away from it quickly.  One of the few things that can kill you in Australia, other than crocodiles, poisonous spiders, snakes etc… (Photo: Elias Levy (Blue-Ringed Octopus) <a href="http://creativecommons.org/licenses/by/2.0" target="_blank">CC BY 2.0</a>, via Wikimedia Commons).     
<br>7. From left to right: Allison and I.  Allison was a speaker and her talk was about remote working (Photo: Vi Nguyen).  
<br>8. Batman and I.  He said I looked lovely… but then I heard him say that to all the other girls (Photo: Indah).  
</i></small></font>

### Rails Girls Next Workshop by Sarah.

What you need:

- Github account: [https://github.com/join?source=header-home](https://github.com/join?source=header-home)
- Cloud 9: [https://c9.io/web/sign-up/free](https://c9.io/web/sign-up/free)

The Rails Girls Next workshop is a step up from the Rails Girls workshop.

The workshop started at 9am at Sea World Resort. Nothing better than a fantastic location with great morning tea.

#### Why Sinatra instead of Rails?

**Rails**: Things happen magically under the hood.

**Sinatra**: More flexible in comparison, but would require you to implement some elements yourself.

We then began learning the ways of building a Rails app from scratch through Sinatra! Develop your app on the cloud!

#### [Ruby Girls Sinatra App Guide](http://railsgirls-bne.github.io/sinatra-app-guide)

This was written by Sorcha and is a very excellent step-by-step guide we followed to understand how each file works in Rails. It's very easy to follow and quite self-explanatory.

**Caution**: I learnt that Sinatra is NOT structured like how files in Rails would.

For instance, Routing in Sinatra is controlled in the controller, whereas Routing in Rails is in a separate routes file.

#### [Put Your App Online With Heroku](http://railsgirls-bne.github.io/heroku)

I then deployed the app to heroku. A couple of us in the workshop were having a problem with getting the app to deploy (Error: Application not found).

Here's the solution: Since Sinatra is structured slightly differently from Rails, you'll need to modify *config.ru* since gems and classes are located in *config/application.rb*

<img src="/img/blog/2016/ruby-conf-au-sinatra-config-rails-girls-next.jpg" alt="Sinatra configuration">
<br><font color="grey"><small><i> Configuration set up of Sinatra in Rails (Photo: Sarah Ni).</i></small></font>


Big thanks to Sorcha, Rachelle and Daphne for teaching us the tiny details of MVC and Routes.

#### Sarah and the conference

At first glance, this probably doesn't make sense.

In short, I actually had to make a quick trip up to Sydney (fun fact: it's a 1.5 hour-long flight) to attend an awards ceremony. I'm humbled to have been nominated by GradConnection as one of the [Top 100 students in Australia](https://au.gradconnection.com/top100/), 2016.  

### In closing…

Thank you to the team at Rails Girls Summer of Code and Ruby Conference Australia for giving both of us the opportunity to attend Ruby Conf Au 2016.  It was fantastic and a great time was had by all! 
