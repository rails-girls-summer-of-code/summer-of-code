---
title: Meet Team Dysania
layout: post
created_at: Mon Aug 05 2013
permalink: blog/meet-team-dysania
current: blog
author: Vyki and JZ
twitter: krainboltgreene
---

Hi! We’re [Vyki](https://twitter.com/toastergrrl) & [JZ](https://twitter.com/jzeta) of [Team Dysania](https://teams.railsgirlssummerofcode.org/teams/20) from Los Angeles, California, and we started as part-time RGSoC student volunteers on July 8. This summer, we’re web interns by day (Vyki at the [City of Santa Monica](http://www.smgov.net/departments/pcd/), JZ at [Walt Disney Animation Studios](http://www.disneyanimation.com/)), and Ruby OSS developers (with coach [Kurtis Rainbolt-Greene](https://twitter.com/krainboltgreene)) by night.

<div style="text-align:center;font-size:.85em;font-style:italic;"><img src="https://f.cloud.github.com/assets/2158875/906813/348f7db4-fce2-11e2-9046-da644b6e65b8.jpg" width="80%" /><br /><span>FYI: we know how to make balloon arches</span></div>

__The word “dysania”__ is defined as the state of finding it hard to get out of bed in the morning...which we found to be fun and appropriate for our team name since we both suffer from this condition.

__We first met__ at Rails Girls Los Angeles in April 2013 (hosted by [Jessica Lynn Suttles](https://twitter.com/jlsuttles), coach of [Team Bundler](https://teams.railsgirlssummerofcode.org/teams/2)), which was the first time either of us had ever started learning Ruby/Rails. After that, we were hooked, getting more involved in the LA Ruby/Rails community, and attending local meetups and study groups.

__We first heard about RGSoC__ through [@railsgirls](https://twitter.com/railsgirls) and immediately wanted to participate. We were both aspiring software developers interested in starting to contribute to OSS, and we considered RGSoC to be the perfect introduction. We were excited about the idea of immersive hands-on learning while contributing to a real project. The fast pace and sheer amount of information would keep us on our toes, but we would have each other, our coach, and our mentors to keep us on track.

__Our project is working on [Discourse](http://www.discourse.org/),__ a 100% open source Rails forum software. Kurtis (aka Captain Kurt) first introduced it to us, and we found it to be the most interesting out of the Ruby OS projects we considered. We believed in its cause, and were especially drawn to the fact that [Discourse is so welcome to contributors](http://meta.discourse.org/).

__Our goal for the summer__ is to extract all [oneboxing](http://meta.discourse.org/t/what-is-a-onebox/4546) into a Ruby gem. Oneboxing is a feature of Discourse where if you include a link to a site (e.g.Twitter, Wikipedia), it will try to create a usable snippet/preview for you automatically. By extracting this feature into a gem, it can be used by projects other than Discourse, and will also make testing much easier since the code will be more modularized. If time permits, we'll also be implementing oneboxing for other popular sites that aren't supported yet.

__So far, we’ve been working on__ the beginnings of our [discourse-oneboxer](https://github.com/dysania/discourse-oneboxer) gem. We pulled in all of the oneboxer files and specs from Discourse and restructured them to work within the gem, removing Rails dependencies and fixing tests using RSpec. We’re now rewriting some methods that we don’t have good tests for. We'll be registering our gem on [rubygems.org](http://rubygems.org/) soon (possibly today!), which is pretty damn exciting. And of course, we like to think we’ve been getting better at Git and pair programming a little bit every day.

__We’d say our happiest moments so far__ are at the end of every session with Captain Kurt, when we realize we’d been focused and in the zone for 2-3 straight hours.

__If we could code anything in the world...__ Vyki would build OSS applications for city governments to improve workflow and transparency in the city planning process. JZ would invent teleportation.

Feel free to follow us on [GitHub](http://github.com/dysania) or our [blog](http://dysania.github.io/blog)!
