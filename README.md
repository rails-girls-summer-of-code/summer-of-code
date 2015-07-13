# Rails Girls Summer of Code

We are using Github Pages for the website. You can have a look at the `gh-pages` branch, and the preliminary version at [RailsGirlsBerlin.github.io/summer-of-code](http://railsgirlsberlin.github.io/summer-of-code/).


## How to create a new blog post on GitHub
[Original writeup](https://gist.github.com/svenfuchs/b83fc36b45bcb0338399) &copy; 2013 by Sven Fuchs


1. Create a new branch: https://github.com/blog/1377-create-and-delete-branches

  Ideally pick a branch name like "sf-add-post-whatever-the-post-title-is", where "sf" are your initials. E.g. "al-add-post-new-teams"

  Confirm you're on the new branch by looking at the current URL. The branch name should be part of it.

2. Navigate to the `blog/_posts` directory

3. Add a new file for your post: https://github.com/blog/1327-creating-files-on-github

  The filename should follow the naming convention of the existing blog posts: https://github.com/rails-girls-summer-of-code/summer-of-code/tree/gh-pages/blog/_posts. The file extension will determine the format used. Use `.md` for Markdown.

4. Add the Jekyll header for the meta data

  See https://raw.github.com/RailsGirlsBerlin/summer-of-code/gh-pages/blog/_posts/2013-06-12-hello-world.md for an example. Include the top section including the `---` lines and change the attributes where required (probably all of them except the `layout` attribute).

5. Add your blog post text
6. Save the file
7. Send a pull request: https://help.github.com/articles/creating-a-pull-request

  That post explains more than you need. It should work if you just hit the "Pull Request" button, add a title and submit it (target branch and repository names should all default to the right stuff).

## Permalink

Ideally, your blog post's permalink is all lowercase letters. That's not mandatory, though, but please include the date in your blog post's permalink like so:

```yaml
title: Hello World
layout: post
permalink: blog/2015-07-12-hello-world
# ...
```

## Images

Please upload the images referenced by your blog post to the `img/blog/<year>`
folder and name them so that they can easily be linked to your article.
Uploading the images is the preferred way since externally referenced graphics
may become unavailable, leaving your blog post with missing image data.

Images will be downscaled to a maximum width of approx. 600 pixels. Please do
not upload images much larger than that (resize them using a very simple image
manipulation tool of your choosing). As a rule of thumb: An image "heavier"
than 250 kilobytes is too big.

