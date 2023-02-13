# Editing RoomOS articles

This article is written for people that want to contribute with new articles or editing existing ones on roomos.cisco.com.


Before actually adding the article, it's good to do the following preparations:

* Be sure you have write access to the Git repo (https://github.com/cisco-ce/roomos.cisco.com). Ask around in Cisco if you don't have access.
* Decide the title of the article
* Find and prepare (resize) all images you want to use
* Decide which category in the menu it belongs to

<img src="/doc/images/misc/github-editing.png" />

There are two main ways to work with Git:

1. Create and edit documents directly on Github with WYSIWYG editor (typically non-developers)
2. Clone a local Git repository and push content (typically developers)

Most of the content in this article applies to both methods, but the Github method is described in more detail.

### Adding a new article

Steps to create new article:

* Navigate in the tree to the folder where you want to put your article (eg /doc/TechDocs)
* If you need to create a new folder too, simply use / in the name, eg `MyNewFolder/MyNewArticle`. Avoid using spaces.
* Click *Add File*, *Create new file*.
* Add a filename. This must be exactly the same as the name of your article, but also end with .md (markdown)
* Change "No wrap" to "Soft wrap" for better experience.
* Start writing markdown. Tap the markdown button in the lower right corner for help on syntax.
* Tap preview at any time to see how your doc will look (roughly)
* When you are done, scroll to the bottom. Feel free to add comments summarizing your changes, the press **Commit new file*.

A few minutes after you commit, your files should be available on roomos.cisco.com. There is no staging or previewing possibilities. If you added a new file, nobody will see it though because there is no link to it anywhere yet.

You can preview the article by entering the URL in your browser on the following form, where you replace folder name and article name with your actual values:

```
https://roomos.cisco.com/doc/<Folder name>/<Article name>
```
So for example if your folder is MTR and your article is Introduction, you should be able to open https://roomos.cisco.com/doc/MTR/Introduction.


### Editing

Editing is just like adding new articles, but even simpler. Just find the article in the folder structure, click the *Edit* icon, update the article, scroll to the bottom and click **Commit changes**.


## Adding images

To use images in you article, you need to upload them to GitHub first.

* Navigate to /docs/images and the subfolder where you want to put the images
* Click **Add File** > **Upload files**
* **Note**: You can't create new folders in this view - you will need to add a dummy text document like above, or add the images from a local Git repo if you need a new folder
* Drag and drop the image(s) you want to the upload form.
* Commit the changes. This will add the images to the GitHub repo.
* Open the article you want to include images in.
* Add the image like so: `<img src="/doc/images/<myfolder>/<myimg>`, eg `<img src="/doc/images/MTR/overview.png" />`
* Tap preview and confirm that the image is indeed showing

## Supported markdown

Most of the normal markdown is supported, see [the GitHub markdown guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for more details.

Here are a few things you probably want to use:

```
# Heading
## Sub heading level 2
### Sub heading level 3

Paragraphs are created by leaving a blank line between lines of text.

* Un-numbered list, first item
* Un-numbered list, second item
  * Sub item

1. Un-numbered list, first item
2. Un-numbered list, second item

A **bold** word and an *italic* word.

An image (will be resized to fill the width of the article):
<img src="/doc/images/MTR/myimage.png />

A link to another document on roomos.cisco.com:
[Another article](/doc/TechDocs/Introduction)

A link to an external URL:
[A link](http://acme.com/somelink)

Code snippets: Use three special quotes `, include code, then end with another three `

```
