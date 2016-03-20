# Rails Girls Summer of Code

We are using Github Pages for the website. You can have a look at the `gh-pages` branch, and the preliminary version at [RailsGirlsBerlin.github.io/summer-of-code](http://railsgirlsberlin.github.io/summer-of-code/).

## How to create a new blog post

In order to add your blog post to our blog, you will go through the following steps:

- fork our repo
- add your blog post
- commit and push your changes
- send us a pull request

(By contributing, you agree to adhere to our [Code of Conduct](https://github.com/rails-girls-summer-of-code/summer-of-code/blob/master/CODE_OF_CONDUCT.md))

### Forking the repo

"Forking" basically just means "making a copy"; this allows you to copy our `summer-of-code` repo (found [here](https://github.com/rails-girls-summer-of-code/summer-of-code)) without affecting it. Follow the instructions on forking a repo [in the GitHub docs](https://help.github.com/articles/fork-a-repo/). When forking, you might be asked where you want to fork the repository to; select **your own Github profile**.

### Run the website locally

The website is build with [Jekyll](https://jekyllrb.com/). In order to see the pages on your machine you have to bundle the Gems and start jekyll.

```
gem install bundler
bundle
jekyll serve
```

then you type:  ```localhost:4000``` in your browser and :tada:

### Writing your blog post

Once you have your local copy set up:

- create a new file in the `summer-of-code/blog/_posts` folder (on your computer).
- Call this file `yyyy-mm-dd-your-blog-post-name.md`, where yyyy-mm-dd is the publishing date for your post. Don't forget the .md extension, which stands for `MarkDown`.
- Add the Jekyll header for the meta data. See any of the posts in the `blog/_posts` folder for an example. Include the top section including the `---` lines and change the attributes where required (probably all of them except the `layout` attribute). The date should be the publishing date of your post. On the twitter line, please just add **your twitter handle without @ character**.
- Add all your text.
- don't forget to save your changes ;)

### Permalink

Ideally, your blog post's permalink is all lowercase letters. That's not mandatory, though, but please include the date in your blog post's permalink like so:

```yaml
title: Hello World
layout: post
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
than 250 kilobytes is too big.

Please add a line with image credits and be sure to respect the privacy of others
when uploading photos.

### Committing your changes and sending a pull request

Once you're happy with your changes, commit them:

- `git add .`
- `git commit -m "your commit message"`
- `git push origin gh-pages` (this will push your changes to the branch `gh-pages` of your own fork of the `summer-of-code` repo on github)
- make a pull request by navigating to your repo (`http://www.github.com/your_username/summer-of-code`) and your branch (`gh-pages`), and by clicking the "Compare & Review" button, as explained [here](https://help.github.com/articles/using-pull-requests/).
