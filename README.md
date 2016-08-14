# Rails Girls Summer of Code

We are using GitHub Pages for the website. You can have a look at the `gh-pages` branch, and the site can be found at [RailsGirlsSummerOfCode.org](http://railsgirlssummerofcode.org).

## Blog post requirements

Every team has to write two blog posts during the summer. **The first blog post** has to be done by **August 16th**; the second blog post should be scheduled **between September 19th and October 31st**.  
Please add your team name [to the editorial calendar](https://docs.google.com/spreadsheets/d/1sDqiNdSZLrwcAkH468E-FkyZ2VtC-5SwqBlraWPiqJU/) next to the date you wish to publish your blog posts on; the posts will be published at 12:00pm UTC.  
**Note: The blog post pull request must be submitted a minimum of 24h before publishing time to allow for feedback.**   

## How to create a new blog post

In order to add your blog post to our blog, you will go through the following steps:

- fork our repo
- create a new branch (eg. `your-team-name-post-one`)
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

Note: if your post has a future date, you will not see it when running `jekyll serve`; in order to view your post correctly, you have to run the jekyll command with a `--future` flag, like this:  

```
jekyll serve --future
```

or 

```
jekyll serve --watch --future
```


### Writing your blog post

Once you have your local copy set up:

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

Once you're happy with your changes, commit them:

- `git add .`
- `git commit -m "your commit message"`
- `git push origin your-team-name-post-one` (where `your-team-name-post-one` is the name of the branch you created at the beginning). Yhis will push your changes to `your-team-name-post-one` of your own fork of the `summer-of-code` repo on github)
- make a pull request by navigating to your repo (`http://www.github.com/your_username/summer-of-code`) and your branch (`your-team-name-post-one`), and by clicking the "Compare & Review" button, as explained [here](https://help.github.com/articles/using-pull-requests/).
