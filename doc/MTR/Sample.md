# Sample heading for document

The # symbol followed by a space is used for main article heading.

It's the same markdown as used in the **Webex App**. Use ** around a word for **bold**, and single * around a word for *italic*.

## Sections

Use ## for sub heading / sections. Sub headings will appear in the quick jump table of contents on the right side.

Parapraphs appear when you have an empty line between text.

## Second sub heading here

Make unordered lists with *, folled by a space.

* Bullet point 1
* Bullet point 2
* Bullet point 3

Numbered lists can be made with numbers and a dot, followed by space.

1. First point
2. Second point
3. Third point

## Link to other articles

This links to [another article](/doc/MTR/MicrophoneOptions)

For external links: [Weather forecast](https://yr.no)

## Images

Images should first be uploaded to the /doc/images/mtr folder. Then they can be addressed like this:

```
<img src="/doc/images/MTR/myimage.png" />
```

The image will automatically scale to fit the width of the article.

<img src="/doc/images/MTR/room-bar-mtr.png" />


To resize the image:

```
<img src="/doc/images/MTR/myimage.png" style="width: 300px" />
```

<img src="/doc/images/MTR/room-bar-mtr.png" style="width: 300px" />

## Table support

Write the actual HTML table.

<!-- Adding a comment here too. This wont be visible in document, only when editing -->

<table>
  <!-- Heading -->
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <!-- Body -->
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
  <tr>
    <td>Cell 3</td>
    <td>Cell 4</td>
  </tr>
</table>

