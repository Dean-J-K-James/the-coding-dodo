---
title:       Tailwind CSS with a Static Site Generator Like Jekyll
description: Learn how to set up Tailwind CSS for static sites generators, like Jekyll, so it can be used on GitHub Pages and other static hosts.
tags:        [Jekyll, TailwindCSS]
---

## What is Tailwind?

Tailwind is a CSS framework that allows the developer to define a webpage’s style directly in HTML by using a set of predefined CSS classes. This makes it very similar to frameworks like Bootstrap, though Tailwind provides no default styling.

The following code shows a quick example:

    <div class="bg-white font-bold rounded"></div>

This would create an element with a white background, a font weight of bold, and a border radius of 4 pixels.

## Installing and Configuring Tailwind

Tailwind isn’t some huge CSS file that you can include in your website’s header (though there is a testing development file that can do this). It instead analyses your project’s HTML and JavaScript files, and dynamically generates a CSS file that only contains styles you have actually used. This provides the benefit of small, focused CSS files that do not waste precious bandwidth and data.

To start using Tailwind, a bit of configuration work is needed. First, make sure you have `node.js` installed. Then, open a command prompt or terminal and navigate to your project’s directory.

Run the following command to install Tailwind to your project:

    npm install -D tailwindcss

If your project didn’t use any node packages previously, then you will notice several files and folders will have been created. Most of these files are related to `node.js` and it’s package manager, so it is safe to leave them as they are.

If you are interested, open the `package.json` file at the root of your project. This file defines which node packages your project depends on. Inside it, the Tailwind CSS dependency and it’s version will be present, like in the following code:

    {
        "devDependencies": 
            "tailwindcss": "^3.1.8" 
        }
    }

Once Tailwind has been installed, we need to configure it. To create a default configuration file, use the following command:

    npx tailwindcss init

This will generate a file called `tailwind.config.js` at the root of your project with the following content:

    /** @type {import('tailwindcss').Config} */
    module.exports = {   
        content: ["./src/**/*.{html,js}"], 
        theme: { 
            extend: {},   
        },   
        plugins: [], 
    }

There are lots of settings we can change in this file, but for this tutorial, we are only interested in the content property. This is an array of file paths that specify where in our project all of our HTML files are. Tailwind will then use this to determine which of it’s classes need including in the final build.

In a Jekyll project, all HTML files get built into the `_site` folder. This will be where all our final HTML files are located and so we want Tailwind to look in there.

    content: ["./_site/*.{html,js}", "./_site/**/*.{html,js}"],

## Generating the Stylesheet

Now that Tailwind is installed and configured, we need to get it working.

Create a CSS file, `main.css` in the `/assets/css/` folder. This file will simply be the entry point for Tailwind, and does not actually get loaded in or used by the website. In this file, add the standard three Tailwind directives, like so:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

We do not want this file to get parsed by Jekyll or the Liquid templating engine, so ensure there is no front matter at the top of this file. Any further Tailwind directives, like `@apply`, should also be placed in this file.

## Building Tailwind CSS

To build a Tailwind stylesheet for our project, we need to use another command. This command requires two values:

* Input path. This is the path to the `main.css` file we just created, with the Tailwind directives. For me, I will use the path: `./assets/css/main.css` since this is where my input file is located.
* Output path. This is the path to the stylesheet we want to generate and load on to our webpages. I will be using `./assets/css/main-output.css` since this is the path of the output file I want to generate.

The path should always start with a full stop.

Run the following command in your terminal or command prompt. Be sure to replace the input and output path to match yours.

    npx tailwindcss -i ./assets/css/main.css -o ./assets/css/main-output.css --watch

This command will run continously until closed. Remember the array of paths we defined earlier in our configuration file? Everytime a HTML or JavaScript file found in one of those file paths changes, Tailwind will regenerate it’s output file as long as the above command is running.

Navigate to the `main-output.css` file that should have been generated in our `assets` folder. If it hasn’t been created, make sure the above command is running, and change a HTML file, triggering the `_site` folder to update. This CSS file contains all of Tailwind’s default rules, in addition to any we have used in our project.

## Using the Stylesheet

The generated `main-output.css` stylesheet is pure CSS and contains no special Tailwind directives. All the Tailwind rules used in a project get expanded into styles that every browser is able to understand. Therefore, once this file is generated, no further work is required, and it can be included in a website.

Inside the header for your HTML files, be sure to import the stylesheet we have just generated.

    <link rel="stylesheet" href="/assets/css/main-output.css">

So long as you are running the Tailwind node command during development, the CSS file will keep getting updated. When the project is then committed to a repository and uploaded to a server, the `main-output.css` file will be treated just like any other CSS file.

## Further Reading

* The official [Jekyll](https://jekyllrb.com/) website shows detailed, dtep by step instructions on setting up a Jekyll website.
* The official [Tailwind](https://tailwindcss.com/docs/installation) website explains how to set Tailwind up using `node.js`. 