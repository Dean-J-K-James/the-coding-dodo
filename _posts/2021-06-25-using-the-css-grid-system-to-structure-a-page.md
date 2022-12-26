---
title:       Using the Grid System to Structure a Page
description: Most websites tend to be structured through a combination of flex and absolute positioning. An elegant, and overlooked alternative is the grid system. This tutorial explores this system in more detail, creating a responsive and mobile friendly page structure.
tags:        [Web]
---

## Using HTML and CSS to Structure a Page

One of the great aspects of web development is there are always multiple ways of achieving the same goal. This is especially the case when it comes to structuring a page using HTML and CSS. Over the years, different techniques have been used for creating a page layout, and as requirements and tendencies have changed, new methods have been introduced. Most recently, there has been a shift towards pages that adapt to different screen sizes. A web page now needs to look good both on large desktop screens, and on small mobile displays.

![Some Example Page Layouts](/assets/images{{ page.url}}/figure1.png)

> **Figure 1** - Some example page layouts on a desktop screen.

Some of the popular techniques currently used for structuring a page include:

* Using absolute positioning. This is often the go to method for people who are just starting to develop a webpage. It is quick and makes use of familiar CSS properties. Unfortunately it can require alot of CSS rules for even the simplest layouts, and can get out of hand when there are lots of elements that need to be dynamically placed.
* Using a table. Tables are naturally suitable for structuring a page because of the rows and columns they automatically use. This method requires less code than absolute positioning, but still suffers from being difficult to adapt to a mobile view. A complex page that doesn't naturally divide into rows and columns can also become quite messy when using a table.
* A more modern approach to page structure is the flex system. The flex system is great for dynamically positioning cards and boxes on a single axis, but can be awkward for structuring an entire page.

## The Grid System

A more recent innovation in web development is the CSS grid system. This makes use of a new set of rules that provide an intuitive, efficient and easy to manage method of structuring pages that need to be accessible across a range of screen sizes.

Consider the following HTML code:

    <body>
        <div class="menu">...</div>
        <div class="page">...</div>
        <div class="side">...</div>
        <div class="foot">...</div>
    </body>

This is the typical structure for an average webpage. We want a menu bar that stretches across the top of the page, a foot bar that stretches across the bottom of a page, and two columns in the middle, like in *Figure 2*.

![Two Column Layout](/assets/images{{ page.url}}/figure2.png)

> **Figure 2** - An example two column layout.

Let us see how we can use the grid system to implement this structure.

## Elements of the Grid System

The CSS grid system structures elements based on their `grid-area` value. This acts as an identifier for each element, a bit like the `id` and `class` attributes in HTML. Every element that needs structuring must have this attribute with a unique value. Based on our page, the following CSS code shows this rule being used.

    .menu {
        grid-area: menu;
    }

    .page {
        grid-area: page;
    }

    .side {
        grid-area: side;
    }

    .foot {
        grid-area: foot;
    }

Note that for consistency, our `grid-area` values are the same as the class name. This is not required though (may even be considered bad practice).

## Grid System Container

Now that we have added the `grid-area` attribute to each individual element of our website, we need to setup the container element. In our example page structure, each of the four elements that need structuring are children of the `body` element. Therefore, all of the grid system CSS rules that control our structure need to be assigned to the `body` .

The following CSS rules are used for our design:

    body {
        display              : grid;
        grid-template-columns: 1fr 256px;
        grid-template-rows   : 48px 1fr 128px;
        grid-gap             : 16px;
        grid-template-areas  : 
            "menu menu"
            "page side"
            "foot foot";
    }

Let's go through each rule in turn.

* `display`

First, the parent must have the `display: grid` property. This tells the browser that we are using the grid system and that any children of this element should follow those rules. This is similar to using the `display: flex` rule when using flexbox.

* `grid-template-columns`

The second property is the `grid-template-columns` property. This is used to specify how the columns should be structured. Our design has two columns, meaning this rule needs two parts, seperated with a space. We have the value `1fr 256px` , giving the first column a value of `1fr` , and the second column a value of `256px` . The unit `fr` is a fractional unit and is used to dynamically size elements so that they fill available space in the grid. The value of `256px` gives the second column a fixed size of 256 pixels. This means as the width of a page is changed, the second column remains a fixed 256 pixels wide, and the first column gets dynamically resized to fill the remaining width.

* `grid-template-rows`

Thirdly, we have the `grid-template-rows` property. This is similar to the `grid-template-columns` property, except it applies to the rows rather than the columns. Our page has three rows, so the property has three parts, each seperated by a space. The first row (the menu) has a height of 48 pixels, the second row (containing both the page and side elements) is dynamically sized to fill remaining space, and the third row (the foot) has a height of 128 pixels.

* `grid-gap`

The next property is `grid-gap` . This property defines the gap between our columns and rows. In our design the gap is kept as 16 pixels.

* `grid-template-areas`

The final property is `grid-template-areas` . This is where the positioning and ordering of the elements is defined. You will notice that within the value for this property, the words, `menu` , `page` , `side` , and `foot` are used. These do not refer to the class or id of each element, but refer to the `grid-area` property that was specified in the CSS style for these elements.

Our grid uses two columns and three rows as specified in the `grid-template-columns` and `grid-template-rows` properties. Therefore, there must be two columns and three rows of identifiers in this property. Each row is a seperate string, and each column is seperated by a space.

* The value for the first row is `"menu menu"`. This means the grid element with identifier `menu` should take up two columns of space.
* The value for the second row is `"page side"`. This means the grid element with identifier `page` is the first column (with size `1fr`) and the grid element with identifier `side` is the second column (with size `256px`).
* The value for the third row is `"foot foot"`. Like with the first row, this means the grid element with identifier `foot` will take up two columns of space.

![Two Column Layout In Desktop and Mobile Views](/assets/images{{ page.url}}/figure3.png)

> **Figure 3** - Our two column layout in both a desktop and mobile view.

The great thing about the CSS grid system is it is really easy to adapt our structure to different screen sizes. We want a rule where if the browser screen size drops below 640 px, instead of having our middle two elements next to each other in columns, we want to stack them, like in *Figure 3*.

    @media screen and (max-width: 640px) {
        body {
            grid-template-columns: 1fr;
            grid-template-areas  : 
                "menu"
                "page"
                "side"
                "foot";
        }
    }

To do this, we add a media query to our CSS. In this query, we overwrite the `grid-template-columns` rule for the `body` element, stating there should only be one column that stretches the width of the screen. We also redefine the `grid-template-areas` rule to stack our elements.
