---
title:       Placing Script Tags in HTML
description: Websites with extra client-side functionality will likely load external JavaScript files using script tags. This tutorial explores these tags in more detail, including the async and defer keywords.
tags:        [Web]
---

## Scripts Tags

Script tags are used in HTML to provide additional functionality using JavaScript. With a few exceptions, JavaScript is client side, meaning your browser is responsible for executing it. A typical HTML document will look something like this.

    <html>
        <head>
            ...
        </head>
        <body>
            ...
        </body>
    </html>

There are two main sections to this. The `<head>` is where alot of the meta data goes, and the `<body>` is where alot of the page structure and content goes. A common question in web development is where to put `<script>` tags. The two most common solutions are:

* Between the `<head>` tags.
* At the end of body, before the `</body>` tag.

Both of these solutions have their advantages, however, they also have significant disadvantages.

## Placing Scripts Between Head Tags

Putting `<script>` tags in the `<head>` is most common. Usually, script tags load an external JavaScript file found at the URL or path specified in the `src` attribute.

    <html>
        <head>
            <script src="..."></script>
            ...
        </head>
        <body>
            ...
        </body>
    </html>

The problem here, is that any JavaScript code will be executed before the contents of the page have even started to load. Typically, a browser will receive a HTML document from a server in chunks. These chunks will be loaded, and each pair of opening and closing tags, with their contents will be loaded in order. This means that the browser will load the `<head>` tags and anything inside of them, before the `<body>` tags.

Consider the following JavaScript code. It adds an onclick event to an element with id "button". When the button is clicked, a message is output to the console.

    $("#button").click(function () {
        console.log("Button was clicked!");
    });

What would be the problem if this code was included between the `<head>` tags?

The problem is that any `<script>` tags within `<head>` will be loaded and executed before the `<body>` tags get loaded in. Since our element with id "button" is between the `<body>` tags, it wouldn't have loaded yet. Our jQuery selector will return no element, and so the event will not have been applied.

## Placing Scripts Between Body Tags

A solution to this problem is to instead load any scripts after the body has been created. For this, we can put the `<script>` tags right at the end of the body.

    <html>
        <head>
            ...
        </head>
        <body>
            ...
            <script src="..."></script>
        </body>
    </html>

This gives each element on the page a chance to initialise first, before the script gets loaded and executed. If the onclick event were to be added here, it would work because the element with id "button" will have created before the script gets run. Loading scripts at the end of the body lets other elements load first.

## Defer and Async

When a browser is parsing a HTML document, and finds a script tag, it stops rendering and parsing the document. It then requests the script file from the server, waits for it to download, immediately executes it, and only then continues parsing the rest of the document. This is inefficient and wasteful, because whilst the browser is waiting for the script tags to download, it doesn't do anything.

Fortunately, there is a way to solve this problem; using the attributes `async` and `defer` . Either of these two attributes can be added to a script tag when placed in the head, like this:

    <html>
        <head>
            <script src="..." async></script>
            <script src="..." defer></script>
            ...
        </head>
        <body>
            ...
        </body>
    </html>

By putting either of these attributes into a script tag, the script will be downloaded asynchronously from the server. This means, that when the browser requests the files, it continues parsing the HTML document rather than waiting. In both cases, HTML parsing still gets paused whilst the script gets executed. The difference between these attributes is what happens when the file has finished downloading.

![Diagram Key](/assets/images{{ page.url}}/figure5.png)

![Script Download and Execution Normally](/assets/images{{ page.url}}/figure1.png)

> **Figure 1** - Script download and execution normally.

*Figure 1* outlines what the browser does when it needs to download and execute a JavaScript file.

* The browser begins by parsing the HTML code normally.
* As soon as a `<script>` tag with the `async` attribute is found, the browser requests this file. This is an synchronous request, meaning whilst the file downloads, the browser is paused and does nothing.
* When the `<script>` is fully downloaded, the browser executes it immediately.

## Defer

If the `defer` attribute is used, the scripts do not execute as soon as they have finished downloading. Instead, the execution gets deferred until the HTML document has finished being parsed completely. Scripts using `defer` will execute right at the end, and in the same order that the script tag for them was specified.

![Diagram Key](/assets/images{{ page.url}}/figure5.png)

![Script Download and Execution When Using Defer](/assets/images{{ page.url}}/figure2.png)

> **Figure 2** - Script download and execution when using defer.

*Figure 2* shows what happens when the `defer` attribute is used in a `<script>` tag.

* The browser begins by parsing the HTML code normally.
* As soon as a `<script>` tag with the `defer` attribute is found, the browser requests this file. This is an asynchronous request, meaning whilst the file downloads, the browser continues parsing the document.
* When the `<script>` is fully downloaded, the browser continues parsing the HTMl as usual.
* As soon as the entire HTML document has finished being parsed, the `<script>` tags are executed in the same order that their downloads were started.

## Async

If `async` was used, the script file will be executed as soon as it is downloaded. If multiple scripts are downloaded using async, each will be executed once it has finished downloading. If the download finishes whilst another script is being executed, the new script will execute immediately after. They will not necessarily execute in the same order as the download starts. If the first script to load using async is significantly larger than the second, it is possible that the second will finish downloading first and therefore will be executed first.

![Diagram Key](/assets/images{{ page.url}}/figure5.png)

![Script Download and Execution When Using Async](/assets/images{{ page.url}}/figure3.png)

> **Figure 3** - Script download and execution when using async.

*Figure 3* shows what happens when the `async` attribute is used in a `<script>` tag.

* The browser begins by parsing the HTML code normally.
* As soon as a `<script>` tag with the `async` attribute is found, the browser requests this file. This is an asynchronous request, meaning whilst the file downloads, the browser continues parsing the document.
* When the `<script>` is fully downloaded, the browser stops parsing the HTML, and begins executing the `<script>` immediately. If another script is currently being executed when a download finishes, then the browser will wait until that has finished.

## Comparison Between Defer and Async

Both `async` and `defer` are similar in how they work. The main similarities and differences include:

* Both download files asynchronously, meaning they don't block the browser from parsing the HTML.
* In both cases, the browser stops parsing the HTML when it executes the the scripts.
* Scripts using `defer` will execute in the same order they are written, whereas scripts using `async` will execute in the order their downloads complete.

## Further Reading

* The page: [Scripts: async, defer](https://javascript.info/script-async-defer) explains the difference between the defer and async attributes.
* StackOverflow has lots of questions about the defer and async attributes. This [answer](https://stackoverflow.com/a/39711009) has a good diagram showing the differences.
