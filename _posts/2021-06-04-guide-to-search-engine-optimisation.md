---
title: Guide to Search Engine Optimisation
category: Web
tags: SEO
---

Learn how to improve your website's search engine rank using these quick, simple techniques, including how to use meta tags, canonicalization, internal links, and proper use of headings.

## Introduction to Search Engine Optimisation

Search Engine Optimisation (SEO) is the process of improving your website's ability to receive traffic from a search engine. When a user searches for a word or phrase in a search engine like Google or Bing, a search engine results page (SERP) provides a list of links to webpages it thinks best represents the search query. The order that results appear in on a SERP is decided by a set of complex, and secret algorithms that only the search engine companies know. SEO involves numerous techniques that aim to increase the chances of a website having a better ranking.

## How Do Search Engines Index a Page?

Before we even consider trying to optimise a website to increase it's rank, it first needs to get indexed. Only webpages that have been indexed appear in a search engine. If your website is not indexed, it will never appear, no matter how close the search term is to your page's content.

To check if a website is indexed, go to Google, and search using the following format:

    site:<url>

Replace `<url>` with your website's domain name. If there are no results, your website is not indexed. If there are results, then any page in the list is indexed.

For example, if we search for `site:wikipedia.com`, we can see all the pages on wikipedia that are indexed. The results are shown in *Figure 1*.

![Wikipedia Indexing](/assets/images{{ page.url}}/figure1.png)
> **Figure 1** - Wikipedia Indexing

To be indexed, a website must be analysed by a search engine crawler. When a crawler analyses a webpage, it gathers as much information about that webpage as it can, decides whether it should be indexed or not, and then chooses how important that webpage should be, determining how much priority to give it on the search engine results page.

Once a page has been crawled, the crawler will likely explore a page that is linked on the current page, usually another page on the same website.

## On Page and Off Page SEO

There are two main types of SEO strategy: on-page and off-page.

* **On-Page SEO** is all the techniques that directly involve the website itself, including the code and contents of each webpage. Overall, this method aims to improve the quality of the website, so it not only is more compatible with search engines, but also a better experience for potential visitors.
* **Off-Page SEO** is about improving a website's ability to get indexed and ranked highly using methods that do not directly involve the website itself. This includes the use of social media, and advertisement campaigns.

This article is mainly about on-page SEO, including the use of meta tags, headings, and improving your website's overall user experience.

## Page Title

Perhaps the easiest and most impactful way of improving your website's search engine ranking is to provide a title using the `<title>` tag.

    <title>Example Title</title>

Located in the `<head>` part of a webpage, the `<title>` tag informs search engines of what sort of information will be on the page. It is also a likely candidate for the SERP, search engine results page, where it could be used to identify the page result. For optimal search engine indexing, the title of a page should be a concise, meaningful string of up to 50 characters.

## Social Media Meta Tags

Social media is a great place to advertise your website; but to improve the number of visitors, your links need to stand out. Consider the screenshot of a tweet in *Figure 2*:

![Basic Link on Twitter](/assets/images{{ page.url}}/figure2.png)
> **Figure 2** - Basic Link on Twitter

Merely posting a link will result in a boring text-based URL. Most potential visitors will likely just skip over the link without even considering it. That is where social media meta tags become useful. Consider the following three meta tags:

    <meta property="og:title"       content="Title">
    <meta property="og:image"       content="https://www.example.com/thumbnail.png">
    <meta property="og:description" content="Description">

These tags form part of the open graph protocol (notice the "og" property) and provide pieces of information that can be used by social media sites to make your links more visually appealing. By placing these meta tags in the `<head>` section of a HTML document, your links will get formatted on social media, like in *Figure 3*.

![Twitter Summary Card](/assets/images{{ page.url}}/figure3.png)
> **Figure 3** - Twitter Summary Card

Open graph protocol meta tags are the most popular, and will work on Facebook, Twitter, and LinkedIn. There are, however, some Twitter specific alternatives that should be considered.

    <meta name="twitter:card"        content="summary">
    <meta name="twitter:title"       content="Title">
    <meta name="twitter:image"       content="https://www.example.com/thumbnail.png">
    <meta name="twitter:description" content="Description">

These meta tags allow you to further customise your Twitter links by specifying the type and size of card to use. If these tags cannot be found, Twitter will fall back onto the open graph protocol tags.

More information can be found here: [Open Graph Protocol](https://ogp.me/).

## Mobile Friendly Pages

More and more users are accessing websites from mobile devices that have smaller screens and use touch as an input rather than the traditional mouse. Improving the mobile experience is essential for improving your website's search engine ranking.

Some areas to consider:

* Does your page scale well to smaller screens?
* Are pages responsive to touch?
* Do they load fast?

## Headings

Headings are used to render large, important pieces of text that identify sections on a page. In HTML, there are six heading tags available.

    <h1>
    <h2>
    <h3>
    <h4>
    <h5>
    <h6>

Each one is used to provide headings of decreasing importance. Search engines use the information contained in heading tags to help identify what a page is about. Consider the `<h1>` tag; this should be the most important heading on the page, identfying what the content will be about. Typically, there should only ever be one `<h1>` tag on any web page at a time.

## Minify CSS and JS Files

Search engines don't like it then it takes ages for your webpages to load. Not only does it provide the user with a worse experience, but it also takes up precious bandwidth, negatively affecting other services as well. Most websites have to load several assets, such as CSS stylesheets, and JavaScript files. These are an easy target for some quick optimisations.

Minifying these files involves removing any unnecessary characters, such as extra spaces and new lines. Some example tools to minify these files are:

* [Clean CSS](https://www.cleancss.com/css-minify/)
* [Minifier](https://www.minifier.org/)

Once your CSS and JS files have been minified, they take up less storage space. This means they also take less time to load over the internet.

## Internal Linking

Internal linking refers to the links within your website pointing to other pages in your website. Good internal linking helps a crawler discover your website's pages, increasing their chances of getting indexed. It also helps user's navigate your website, increasing your site's popularity, and therefore priority when appearing in a search engine. If a page on your website is not linked anywhere, a search engine crawler will have no way of discovering that page.

Typically, a page will consist of a few areas for links. One such area is a menu. A navigation menu, located at the top of a page, should link to all the main pages in your website, including your homepage. It could look something like this:

    <div id="menu">
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/contact-us">Contact Us</a>
    </div>

Generally, the rule is that any page on your website should be within three clicks of any other page.

## Image Alt Tags

Almost every webpage will use images. It is important that you always use the `alt` tag on a HTML image to provide a text based description of what the image represents.

    <img src="image.png" alt="This is an alternate description for this image.">

Image descriptions have a number of purposes. They help search engine crawlers understand what the image is about, they make the page more accessible by helping automatic screen readers inform the listener of what the image shows, and they help users know what the image is supposed to say in case it fails to load.

## Canonical Link

Modern websites can contain alot of pages. Some of these pages tend to be very similar, or even the same. Having lots of pages that are essentially the same can cause issues with a search engine not knowing which one needs to be indexed.

Consider the following links:

    https://example.com
    https://example.com/index.php 
    https://www.example.com
    https://www.example.com/index.php
    http://example.com
    http://example.com/index.php
    http://www.example.com
    http://www.example.com/index.php

They all link to the exact same page.  When a search engine crawler comes across all of these links, how does it know which one you actually want to use? As far as it is concerned, they are all different pages. Search engines like unique content, so it isn't going to index all of them. That is where canonical links come in, defined with the following code:

    <link rel="canonical" href="https://example.com">

That code goes in the `<head>` section of your site, and tells a search engine which link it wants to use to represent the page. This means that no matter which link a crawler uses to get to this page, it knows that `https://example.com` is the real link you want it to use.

## Using Dash Instead of Underscore

When creating a URL that uses multiple words, it is always better to seperate them with a dash, rather than an underscore or no seperator. Consider the following variations of this page's URL:

    thecodingdodo.com/blog/guide-to-search-engine-optimisation
    thecodingdodo.com/blog/guide_to_search_engine_optimisation

There are a few reasons for this, including:

* Underscore characters can be hidden if the URL is underlined. This may cause the user to think the URL ends after the first word.
* Google used to treat underscores as part of a word, rather than a word seperator, causing it to index a page for the wrong words.