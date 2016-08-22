# Contributing to the Rails Girls Summer of Code website

We're always very happy about contributions to our website, so thank you for taking the time to contribute! Here you will find some guidelines about what is expected from contributors. Before getting started, please make sure you read and understand our [Code of Conduct](https://github.com/rails-girls-summer-of-code/summer-of-code/blob/gh-pages/CODE_OF_CONDUCT.md).

#### Table of contents

1. [Setting up and getting started](#setting-up-and-getting-started)
2. [Reporting a bug](#reporting-a-bug)
3. [Suggesting a new feature](#suggesting-a-new-feature)
4. [Contributing to an existing issue](#contributing-to-an-existing-issue)
5. [Blog post contributions](#blog-post-contributions)
6. [Additional info](#additional-info)




## Setting up and getting started

The Rails Girls Summer of Code website is built using [Jekyll](https://jekyllrb.com/). In order to set up and run the site locally for development, you'll need to have Ruby installed on your machine, create a GitHub account, and fork our repo.  
"Forking" basically just means "making a copy"; this allows you to copy our `summer-of-code` repo (found [here](https://github.com/rails-girls-summer-of-code/summer-of-code)) without affecting it. Follow the instructions on forking a repo and cloning your fork [in the GitHub docs](https://help.github.com/articles/fork-a-repo/). When forking, you might be asked where you want to fork the repository to; select **your own Github profile**.  
Once you're all set up, you'll have to bundle the gems using bundler and start jekyll:

```
gem install bundler
bundle install
jekyll serve --watch

```

To see the site locally, just head to `http://localhost:4000` in your browser. If you are new to Jekyll, you can find more about it [here](http://jekyllrb.com/docs/home/). Otherwise, you're ready to go!

## Reporting a bug

Before reporting a bug, please check if it has [already been reported](https://github.com/rails-girls-summer-of-code/summer-of-code/issues?&q=is%3Aissue%20label%3Abug%20). If it hasn't and you want to file [a new bug report](https://github.com/rails-girls-summer-of-code/summer-of-code/issues/new), provide the following information: 

* Where/on which page did the error happen?
* How can the error be reproduced? 
* What was the expected and what the actual behaviour? 
* Can you provide an error message or a screenshot that illustrates the problem?  

## Suggesting a new feature

We are open to suggestions and ideas to improve the website or to contribute content for our [blog](http://railsgirlssummerofcode.org/blog/).  
As with filing a bug report, before suggesting a new feature or giving feedback please check it has not been [suggested before](https://github.com/rails-girls-summer-of-code/summer-of-code/issues). And if it hasn't, feel free to share your ideas [on our issue tracker](https://github.com/rails-girls-summer-of-code/summer-of-code/issues/new)!

## Contributing to an existing issue

You can view all of the currently open issues [on our issue tracker](https://github.com/rails-girls-summer-of-code/summer-of-code/issues). Most are [labeled](#issue-labels), to give you an idea of the sort of contribution that is expected. 

### Finding an issue

A good starting point if you're new to open source is the list of `beginner-friendly` [issues](https://github.com/rails-girls-summer-of-code/summer-of-code/issues?q=is%3Aissue+is%3Aopen+label%3Abeginner-friendly). These are issues that don't require much prior knowledge on our program or our website to get started. 
Before getting started, please check that no one else is working on the issue: this will be clear by the assigned user (if there is one) and by the issue's comments/discussion.   

If it seems like no one is working on the issue, great! You've officially found an issue to work on. You can leave a comment mentioning you'd like to work on the issue. Feel free to also leave a comment with your questions if anything is unclear or if you need help: Is the issue still valid? Are there any more detailed specifications to the issue?  

### Creating a pull request

Once you're happy with your changes, commit them:

- `git add .`
- `git commit -m "your commit message"`
- `git push origin your-branch` (where `your-branch` is the name of the branch you created at the beginning). Yhis will push your changes to `your-branch` of your own fork of the `summer-of-code` repo on github)
- make a pull request by navigating to your repo (`http://www.github.com/your_username/summer-of-code`) and your branch (`your-branch`), and by clicking the "Compare & Review" button, as explained [here](https://help.github.com/articles/using-pull-requests/).

You can find very thorough information on Pull Requests in [GitHub's documentation](https://help.github.com/articles/creating-a-pull-request/).
The most important thing to keep in mind is that all pull requests should be made against `gh-pages`, which is our main branch.

## Blog post contributions

### Requirements  

Every RGSoC team has to write two blog posts during the summer. **The first blog post** has to be done by **August 16th**; the second blog post should be scheduled **between September 19th and October 31st**.  
Please add your team name [to the editorial calendar](https://docs.google.com/spreadsheets/d/1sDqiNdSZLrwcAkH468E-FkyZ2VtC-5SwqBlraWPiqJU/) next to the date you wish to publish your blog posts on; the posts will be published at 12:00pm UTC.  
**Note: The blog post pull request must be submitted a minimum of 24h before publishing time to allow for feedback.**   

### Creating a new blog post

First off, go through the instructions to [set up and get started](#setting-up-and-getting-started). Once you have your local copy set up:

- create a new file in the `summer-of-code/blog/_posts` folder (on your computer).
- Call this file `yyyy-mm-dd-your-blog-post-name.md`, where yyyy-mm-dd is the publishing date for your post. Don't forget the .md extension, which stands for `MarkDown`.
- Add the Jekyll header for the meta data. See any of the posts in the `blog/_posts` folder for an example. Include the top section including the `---` lines and change the attributes where required (probably all of them except the `layout` attribute). **The date (`created_at`) should be the publishing date of your post**. On the twitter line, please just add **your twitter handle without @ character**.  
- Add all your text.
- don't forget to save your changes ;)

**IMPORTANT**: If you don't add your twitter handle or remove the twitter line in front matter, the metadata will not render properly. If your team doesn't have a team twitter account, you can:
- use one of your personal accounts or
- use our twitter handle (RailsGirlsSoC)

### Permalink

Ideally, your blog post's permalink is all lowercase letters. That's not mandatory, though, but please include the date in your blog post's permalink like so:

```yaml
title: Hello World
layout: post
created_at: Sun Jul 12 2015
permalink: blog/2015-07-12-hello-world
# ...
```

### Images

Please upload the images referenced by your blog post to the `img/blog/<year>`
folder and name them so that they can easily be linked to your article.
Uploading the images is the preferred way since externally referenced graphics
may become unavailable, leaving your blog post with missing image data.

Images will be downscaled to a maximum width of approx. 600 pixels. Please do
not upload images much larger than that (resize them using a very simple image
manipulation tool of your choosing). As a rule of thumb: An image "heavier"
than 250 kilobytes is too big. There are several tools you can use online to compress your images, for example [TinyPNG](https://tinypng.com/) or [compressor.io](https://compressor.io).

Please add a line with image credits under each picture, crediting the person who took the photo or created the image by name, or linking to the source of the image if you found it on the internet (URL/website). Last but not least, be sure to respect the privacy of others when uploading photos. **Adding image credits is not mandatory and we will not accept any post without them**.

### CSS/inline styles

Where you can, please avoid adding inline styling (e.g. css that changes the color of the font or makes the images a certain size) as that slowly becomes unmanageable. Keep in mind that the website design or layout might change in the future and that the site should be mobile-friendly (i.e. absolute image sizes in pixels are discouraged). 

### Committing your changes and sending a pull request

All that's left is to commit your changes and make a pull request. Find all the info about it [here](#creating-a-pull-request)!

## Additional Info

### Issue labels

We use labels to track, manage and organize issues and pull requests.

| Label Name         | Issues                  | Description |
| ------------------ |:-----------------------:| ------------|
| `beginner-friendly`| [🔍][beginner]      | Less complex issues, suitable for your first steps in open source. |
| `bug`              | [🔍][bug]           | Confirmed misbehavior of the application code. |
| `documentation`    | [🔍][documentation] | improvements to current documentation (e.g. README, contribution files) |
| `duplicate`        | [🔍][duplicate]     | Issues which have already been reported. |
| `enhancement`      | [🔍][enhancement]   | *"nice to have"* features, but not necessary. |
| `help-wanted`      | [🔍][help-wanted]   | Issues which are desperately looking for contributors! |
| `in progress`      | [🔍][in progress]   | Work in progress, things which are already taken care of. |
| `#pairwithme`      | [🔍][#pairwithme]   | Looking for someone to pair on this. |
| `question`         | [🔍][question]      | Feature and code related questions which are no bug reports or feature requests. |
| `ready`            | [🔍][ready]         | Issues and pull requests which have been reviewed and are ready to be closed or merged. |
| `styling`          | [🔍][styling]       | CSS and UI related things. |
| `wontfix`          | [🔍][wontfix]       | The team has decided to not fix these things for now, e.g. because the whole feature will be replaced soon. |


[beginner]:      https://github.com/rails-girls-summer-of-code/summer-of-code/labels/beginner-friendly
[bug]:           https://github.com/rails-girls-summer-of-code/summer-of-code/labels/bug
[documentation]: https://github.com/rails-girls-summer-of-code/summer-of-code/labels/documentation
[duplicate]:     https://github.com/rails-girls-summer-of-code/summer-of-code/labels/duplicate
[enhancement]:   https://github.com/rails-girls-summer-of-code/summer-of-code/labels/enhancement
[help-wanted]:   https://github.com/rails-girls-summer-of-code/summer-of-code/labels/help-wanted
[in progress]:   https://github.com/rails-girls-summer-of-code/summer-of-code/labels/in%20progress
[#pairwithme]:   https://github.com/rails-girls-summer-of-code/summer-of-code/labels/%23pairwithme
[question]:      https://github.com/rails-girls-summer-of-code/summer-of-code/labels/question
[ready]:         https://github.com/rails-girls-summer-of-code/summer-of-code/labels/ready
[styling]:       https://github.com/rails-girls-summer-of-code/summer-of-code/labels/styling
[wontfix]:       https://github.com/rails-girls-summer-of-code/summer-of-code/labels/wontfix
