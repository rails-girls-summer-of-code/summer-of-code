---
title: Team Impact Devs - What a Whirlwind!
layout: post
created_at: Wed Oct 18 2017
permalink: blog/_posts/2017-10-18-What-a-Whirlwind
author: Team ImpactDevs
twitter: teamImpactdevs
---
After a hectic three months, it's hard to believe that our Rails Girls Summer of Code experience is coming to an end.  This past week we celebrated with a few milestones.  The first was giving a presentation to our host company, [info.nl](https://www.info.nl/) sharing all of our learnings and a project demo.  We also threw an End of Summer Celebration for all of our coaches and friends in typical Dutch fashion - with bier and borrel by the canal.

Preparing for the presentation and bringing together our RGSoC community gave us a great chance to reflect on everything we have learned and accomplished over the past few months:

<br>

## What did we build?

Our project requirements had two components:  

1) A notification center where website admins can create and save notification messages to Worldbrain's 4,000 users.  Notifications can consist of anything from product updates, security alerts and new features.  Notifications are then saved to a mongo db, and made available as an API.  

A react app that renders both a form and list of notifications previously created and sent.  

2) An addition to the chrome extension that shows users there are new notifications via a badge on the extension icon, and list that shows all the notifications, all in React.  All unread notifications are bolded, and when it has been read it then becomes un-bolded.  Each user's read & unread notifications are saved and updated locally in the browser using PouchDB.

![teamImpactdevs](/img/blog/2017/Worldbrain Project.png)
<div class="image-credits"> What we built this summer (Diagram created by Jess and Vanessa)</div>

<br>

## How did we build it?

From the beginning, we tried to stay organized and clearly communicate our goals for what we wanted to build and how to build it.  

Before the project began, we created a mockup and a project milestone plan with agreed-upon weekly and monthly goals and objectives with Oliver, our Worldbrain mentor.   

Once the project started, we made a [daily log](https://docs.google.com/spreadsheets/d/17InyrgQ1hkn8HB1uiYWIFWdKyPvT98qEaR2rn5tB6rQ/edit?usp=sharing) with what we did that day, and anything interested we learned with links.  It's really interesting to refer back to it now!  Each day we had at least one sit-down where we'd ask about each other's progress and maybe even teach each other what we learned or how to build something.  For example, I taught Jess how to build a node server, and she taught me how PouchDb works.

After two months of research, tutorials, building and deploying, we finally built the minimum viable product of our project. For the last month, we refactored, tested and added new features to each component.

<br>

## Lessons and Challenges

One of the best and worst parts of our project is that we were given free reign to build using whatever stack we wanted.  It was very freeing and made us feel like our mentor really trusted us with making the right decision.  However, as newbie developers sometimes we would spend days or even weeks researching different technologies, not knowing if we could overcome the steep learning curve for using React.  

Anticipating time to build - this was probably the trickiest aspect.  It's really hard to predict and allocate time for building a new page or feature - because a lot can go wrong, and can totally derail the project. For us deploying via Heroku was a huge challenge and took over a week to understand why it wouldn't work.  But while discussing this with our colleagues, we found out that this is a normal problem even for senior developers, which made us feel slightly better.

It sounds cheesy, but we also learned that we really love coding! Spending three months day in and day out, peppered with agonizing failures and small victories, we loved every minute of it!  Which is the best lesson of all from working on the RGSoC project this summer.

## What's next?

For now, we have an idea of what we want to put our skills towards next - Jess and a front end developer working with React and Vanessa as backend developer using Node.js.  We've made a great impression on our host company and they've even asked us to work with them after the project - which is incredible and we feel so lucky.  

We also want to continue building the Rails Girls Summer of Code community - we've started a [RGSoC Alumni Facebook](https://www.facebook.com/groups/851393618371358/) group to keep in touch and updated on events, conferences, life changes after this summer.  So please feel free to join and spread the word :)

![teamImpactdevs](/img/blog/2017/impact-devs-stickers.jpg)
<div class="image-credits"> How to be an Ally in Tech stickers - let us know if you want some! (Photo taken by Jessica)</div>

<br>

## You can find us here

__[@TeamImpactdevs](https://twitter.com/TeamImpactdevs)__

__[@vanny_ho](https://twitter.com/vanny_ho)__

__[@Jessicaleach6](https://twitter.com/jessicaleach6)__
