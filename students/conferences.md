---
layout: page
title: Go to a conference!
class: page page-students-conferences
current-sub: conferences
sidebar: content
permalink: /students/conferences/
current: students
---
<h1>{{page.title}}</h1>

Rails Girls Summer of Code is all about contributing and being part of the Open Source community. We want you, our students, to explore and experience the inspiring vibe of conferences, user groups and meetups.

Of course, you should primarily focus on your work. But we’d also like for you to get in touch with the community whenever possible so you can get into the habit of attending events and connect with the people there.

## Local user groups and meetups
We highly recommend students visit events like local Ruby, Python or JS user groups. You can always ask your coaches about events that happen in your town/city.

Enjoy the atmosphere, learn new things from talks, meet fantastic people and get to know the lovely community! This isn’t just important during the program, but should also be something you do once you’ve graduated from RGSoC.

## Attending a conference with the help of RGSoC

Additionally, we suggest you visit a conference. Conferences are an important aspect of the community, and we’ll support you by organizing free conference tickets for our students.

If you’re a conference organizer and interested in supporting our students, please <a href="#organizers">read here for more information</a>.

* <a href="#basics">The Basics</a>
* <a href="#raffle">How do I Get a Ticket?</a>
* <a href="#conference">At the Conference</a>
* <a href="#travel">What About Travel and Accommodation?</a>
* <a href="#organizers">Infos for Conference Organizers</a>
* <a href="#conferences">Conference Sponsors in 2017</a>

<h3 id="basics">The Basics</h3>
The RGSoC orga team is in touch with many conference organizers all over the world and we try to provide free tickets for suitable conferences in your area. A suitable conference is one that is related to your main programming language or a general topic conference that is beginner friendly.

Additionally, we make sure conferences have a code of conduct in place or otherwise make an effort to create a harassment-free atmosphere where everyone feels welcome and respected.We have a list of conferences that you as a team can pick from and apply to get tickets for. You can also submit another conference, which you think is missing from our list, and we will consider adding it.

You will be free to apply for up to 3 conferences. This will happen via the Teams App and details will be given to you in time.

**Please make sure you only apply for conferences that you are really able to attend. We can’t provide support for travel and accommodation, so please keep this in mind and make a responsible choice.**

We contact conference organizers and ask for support. All the tickets we get, we distribute between teams based on the following criteria:

* teams’ preferences
* suitability (location/financial aspects, topic of the conference)

Usually, we recommend students pick local conferences, for financial reasons. However, if you are able to cover the costs to attend a conference at a far-away place, feel free to apply for one.

Once we have matched teams with conferences, we will put you in touch with the conference organizers. You can then directly talk about the details of how to get your personal tickets. Depending on how it’s done, you might need to sign up somewhere or simply provide your names so the organizers can put you on the list.

<h3>Is this also for part-time teams?</h3>
Yes!

<h3 id="conference">At the Conference</h3>
If you have received conference tickets, we want you to share your experience and write about it on the <a href="http://railsgirlssummerofcode.org/blog/">RGSoC blog</a>. Your post could look like this: <a href="http://railsgirlssummerofcode.org/blog/ross-conf-vienna">RGSoC @ ROSS Conf</a> or <a href="http://railsgirlssummerofcode.org/blog/eurucamp">Eurucamp Days</a>.

Sometimes there will be an opportunity to give a lightning talk at the conference, and we encourage you to use it when possible. Lightning Talks are usually 10–20 minutes long. The topic can, and preferably should be, your Rails Girls Summer of Code project. 

We usually check with the conference organizers, and if they have a lightning talk session at their conference, we will give you more information about it.

We are aware that this will likely be the first public talk you give. Stage fright is something we all experience, even if we already have given plenty of talks. Don’t worry, we’ll help you deal with it. Here’s a good place to start: <a href="http://railsgirlssummerofcode.org/blog/2014-07-29-talk-tips">How to ace your lightning talk</a>.

<h3 id="travel">What About Travel and Accommodation?</h3>
Unfortunately, we are not able to provide additional financial support for travel and accommodation. If we see an opportunity, we will ask conference organizers about it, but please consider that providing travel grants is a big effort for everyone involved and doesn’t happen that often.

Many companies support their employees in attending conferences. Ask your coaches if there’s an opportunity at your coaching company!

<h3 id="organizers">Infos for Conference Organizers</h3>
You are organizing a conference and want to provide free tickets for Rails Girls Summer of Code students? We will forever keep you in our hearts!

Our students are located all over the world. Our teams usually work on various projects using Ruby/Python/JS and other languages. But we are always looking for general topic developer conferences or full-stack conferences as well.

There are a few things to consider:

* Your conference should be beginner friendly. That means talks (or workshops) need to be suitable for people who are relatively new to the community (~1 year of coding experience).

* You take care to create a welcoming, respectful and harassment-free atmosphere. We expect you to have a Code of Conduct in place and to make an effort in dealing with — let us be plain — jerk behavior. Bonus points go to conferences who have assigned contact persons for potential incidents.

We ideally would want our students to hold a lightning talk about their project at the conferences they attend. If you have slots for this, we’d be very happy if a team could use one of them. If not, no worries.

We are not able to support our students with travel and accommodation. If you have any means to financially support people (e.g. a travel scholarship or a diversity program), please let us know about the details. We will inform the students about how it works and how they can apply.

Interested? Any further questions? Write us an <a href="mailto:contact@rgsoc.org">email</a> and we can talk about the details.

<h3 id="conferences">Conference Sponsors in 2017</h3>

A huge **thank you** to all conferences who supported our students and provided free tickets during Rails Girls Summer of Code 2017.

<section class="conferences-container">

  {% for conference in data.conferences %}
    <div class="conference-item">
      <p class="conference-logo">
        <a href="{{conference.url}}">
        <img src="{{conference.img}}"></a>
      </p>
      <p class="conference-text">
        <b><a href="{{conference.url}}">JSFoo</a></b> <br>
        <b>Date: </b>{{conference.date}} <br>
        <b>Location: </b>{{conference.location}} <br>
        <b>Twitter: </b><a href="{{conference.twitter_url}}">@{{conference.twitter_name}}</a>
      </p>
    </div>
  {% endfor %}

</section>
