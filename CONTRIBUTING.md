# Contributing to the Rails Girls Summer of Code website

We're always very happy about contributions to our website, so thank you for taking the time to contribute! Here you will find some guidelines about what is expected from contributors. Before getting started, please make sure you read and understand our [Code of Conduct](https://github.com/rails-girls-summer-of-code/summer-of-code/blob/gh-pages/CODE_OF_CONDUCT.md), and be aware that every contributor is expected to abide by it.

#### Table of contents

1. [Setting up and getting started](#setting-up-and-getting-started)
2. [Reporting a bug](#reporting-a-bug)
3. [Suggesting a new feature](#suggesting-a-new-feature)
4. [Contributing to an existing issue](#contributing-to-an-existing-issue)
5. [Additional info](#additional-info)




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

Before reporting a bug, please check if it has [already been reported](https://github.com/rails-girls-summer-of-code/summer-of-code/issues?&q=is%3Aissue%20label%3Abug%20). If it hasn't and you want to file [a new bug report](https://github.com/rails-girls-summer-of-code/summer-of-code/issues/new), provide as many details as possible: How can the error be reproduced? What was the expected and what the actual behaviour? Can you provide an error message or a screenshot that illustrates the problem?  

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

You can find very thorough information on Pull Requests in [GitHub's documentation](https://help.github.com/articles/creating-a-pull-request/).
The most important thing to keep in mind is that all pull requests should be made against `gh-pages`, which is our main branch.

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
