---
title:       Writing Articles With Markdown
description: Markdown is a great language for writing reports, blogs, and more without all the boilerplate code and syntax of HTML. In this tutorial, learn the syntax of Markdown, including headings, bullet points, and code blocks.
tags:        [Web, Markdown]
---

## Writing Articles in Markdown and PHP

When I first started writing this blog, the articles were written in HTML. Images were manually added with the `<img>` tags, paragraphs were written inside `<p>` tags, and headers all used the various `<h>` tags. At first, this was fine; articles were short, and mostly text based, meaning the number of HTML tags was kept low. However, as the articles started to include more complex structures like bullet points, code blocks, and links, the files became increasingly HTML focused rather than text focused. This impacted productivity, and increased the time it took to write articles.

I decided to look into alternative ways of writing the articles. At first, I considered using a word processing application combined with a tool like [wordtohtml](https://wordhtml.com/) to translate the text into HTML, but I found that to be annoying, especially since everytime I made a small change I had to re-translate the whole document.

Eventually, I noticed that applications and websites like Discord and Trello all provided methods of formatting text. For example, in Trello, you can put text in between double asterisks `**` to make it bold; or use hashtags `#` to create headers. Having recently created a couple of GitHub repositories, I had also noticed that the `readme.md` files seemed to use similar methods for formatting. Files with the extension `.md` are called Markdown files, and I began using them.

## Headings

To create a heading, start a line with between one and six hashtags, followed by a space. The number of hashtags determines which of the six HTML header tags is used.

    # Heading 1
    ## Heading 2
    ### Heading 3
    #### Heading 4
    ##### Heading 5
    ###### Heading 6

A heading using one hashtag will use the `<h1>` tags, a heading using two hashtags will use the `<h2>` tags, and so on. When translated into HTML, the following code will be produced:

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

## Bullet Points

To create a bullet pointed list, start each line with an asterisk or a dash followed by a space. You can also have child lists by indenting the asterisks or dashes.

    - Content 1
    - Content 2
    - Content 3
        - Content 3.1
        - Content 3.2
        - Content 3.3

When translated into HTML, it produces a nested unordered list:

    <ul>
        <li>Content 1</li>
        <li>Content 2</li>
        <li>
            Content 3
            <ul>
                <li>Content 3.1</li>
                <li>Content 3.2</li>
                <li>Content 3.3</li>
            </ul>
        </li>
    </ul>

## Text Formatting

Any text that needs to be made italics or bold can be achieved by surrounding the words with one or two asterisks. To make a phrase italics, use one asterisk, and to make it bold, use two.

    This *word* is in italics.
    This **word** is in bold.

When translated into HTML, the `<em>` and `<strong>` tags are used, like in the following HTML:

    This <em>word</em> is in italics.
    This <strong>word</strong> is in bold.

## Images

Markdown also provides a convenient method for creatng images. The syntax consists of an exclamation point followed by two parts. The first part specifies the `alt` attribute of the image and is in between square brackets. The second part is between two normal brackets and specifies the path to the image.

    ![Image Alt 1](images/image1.png)
    ![Image Alt 2](images/image2.png)

This produces the following HTML code when translated:

    <img alt="Image Alt 1" src="images/image1.png">
    <img alt="Image Alt 2" src="images/image2.png">

## Links

Links can be made in a similar way to images; just leave out the `!` character. The text that gets rendered in the browser is put in between the square brackets, and the link gets placed between the standard brackets.

    A [link](https://www.google.com) to Google.
    A [link](https://www.youtube.com) to YouTube.

When translated into HTML, it produces:

    A <a href="https://www.google.com">link</a> to Google.
    A <a href="https://www.youtube.com">link</a> to YouTube.

## Inline Code

Since this blog is programming focused, alot of code and code blocks are used. Any inline code that uses the `<code>` tags is put between two backtick ` characters.

    The variable `a` is an array.
    The variable `b` is a string.

This produces the HTML:

    The variable <code>a</code> is an array.
    The variable <code>b</code> is a string.

## Code Blocks

Code blocks are similar to inline code, except instead of being part of a paragraph, they are kept seperate, and span multiple lines. Code blocks can be created in two ways. The first is to put three backticks on the lines before and after the code block. The second alternative method is to indent the code and leave out the backticks.

    ```
    console.log("Hello");
    console.log("Goodbye");
    ```

This translates into:

    <pre>
        <code>
            console.log("Hello");
            console.log("Goodbye");
        </code>
    </pre>

## Formatting Software

Fortunately, after a bit of practice, the syntax for writing markdown documents becomes quite intuitive. To help out, here are some formatters that help.

* I write all of my articles in Visual Studio Code with the extension [markdown-formatter](https://marketplace.visualstudio.com/items?itemName=mervin.markdown-formatter). This provides automatic formatting, and colour coding for the syntax.
* If you would rather format your documents online, then the website [markdownlivepreview](https://markdownlivepreview.com/) provides a live preview of the markdown text you are writing.
