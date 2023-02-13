# Editing RoomOS articles

This article is written for people that want to contribute with new articles or editing existing ones on roomos.cisco.com.


Before actually adding the article, it's good to do the following preparations:

* Be sure you have write access to the Git repo (https://github.com/cisco-ce/roomos.cisco.com). Ask around in Cisco if you don't have access.
* Decide the title of the article
* Find and prepare (resize) all images you want to use
* Decide which category in the menu it belongs to

There are two main ways to work with Git:

1. Create and edit documents directly on Github with WYSIWYG editor (typically non-developers)
2. Clone a local Git repository and push content (typically developers)

Most of the content in this article applies to both methods, but the Github method is described in more detail.

### Adding a new article

Steps to create new article:

* Navigate in the tree to the folder where you want to put your article (eg /doc/TechDocs)
* If you need to create a new folder too, simply use / in the name, eg `My New Folder/My New Article`
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


### Editing

Editing is just like adding new articles, but even simpler. Just find the article in the folder structure, click the *Edit* icon, update the article, scroll to the bottom and click **Commit changes**.





