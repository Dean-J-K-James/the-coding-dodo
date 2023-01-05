---
title:       List All Files in a Directory With Node JS
description: Sometimes we need to know what files are located in a chosen directory. Node JS provides a handy function, glob, that makes this task easy.
tags:        [JavaScript, NodeJS]
---

Please note, this tutorial assumes you already have Node JS installed in your project, and have a basic level of understanding of how to use it.

## Installing GLOB

The `glob` function isn't available in node by default, so we have to install it, just like any other package. To install, run the following command in  your project's terminal.

    npm i glob

The `glob` function should now be available to import into our node files using `require`, like so:

    const glob = require("glob");
    const path = require('path');

For convenience, I also import the `path` dependency because that makes working with file paths alot easier.

## Using GLOB

Now that it is installed, let's begin using it. In the variation we are using, `glob` takes two parameters, a path to the folder we want to look in, and a function to call with the results. The callback function requires two parameters of it's own. The first represents any error that gets thrown, and the second is an array of file paths.

    glob("js/utility/**/*.js", function (error, files) {

    });

Once this code gets run, the files variable will contain a list of all files inside the `js/utility/` folder with the extension `js`. Any subfolders will also be searched. Next, we can iterate the files using some sort of JavaScript `for` loop. I have chosen to use a `forEach` loop like in the following code:

    files.forEach(file => {
        let extension = path.extname(file);
        let basename = path.basename(file, extension);
    });

Upon iterating each file, we can find out it's extension using the `path.extname` function, and it's base name using the `path.basename` function. Note that passing the extension to the `path.basename` function removes the extension from the base name.