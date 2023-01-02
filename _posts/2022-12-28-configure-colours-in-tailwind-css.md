---
title:       Configure Colours in Tailwind CSS
description: Learn how to set up Tailwind CSS for static sites generators, like Jekyll, so it can be used on GitHub Pages and other static hosts.
tags:        [Jekyll, TailwindCSS]
---

## Using Colours

Tailwind already has a great selection of colours we can use. They are modern, compliment each other perfectly, and built right in so no additional configuration is required. But what if you want to use your own colour scheme?

In Tailwind CSS, there are a few ways to use colours. Lets say we wanted a colour an element with a light grey background and dark red font. We could use the following two classes:

    bg-gray-100	text-red-800

To set a background colour, we prefix the class with `bg-` and then specify the colour. `gray-100` is a default, built in Tailwind CSS colour, and translates to the hexadecimal value: `#F3F4F6`. Setting a font colour is similar, except we use the `text-` prefix. Once again, `red-800` is a default colour, and translates to the hexadecimal value: `#991B1B`.

To see the full list of default colours, read the official [Customizing Colors](https://tailwindcss.com/docs/customizing-colors) page.

If the colour we want to use isn't available, then we can also specify the colour as a hexadecimal value. For example, let's say we wanted to use the colour `#7933FB` to style our page. We could simply use the following code.

    bg-[#7933FB]

When Tailwind builds our CSS file, it will evaluate the colour correctly and generate a valid style rule.

## Define Colour Classes in Config

Sometimes, we need to use the same colour several times throughout a website, such as a brand or accent colour. It makes no sense to keep using `bg-[#7933FB]` as a custom colour everywhere because if it ever changed, we would need to change every occurence of it.

Fortunately, Tailwind provides an easy was of defining custom, named colours. Open the `tailwind.config.js` file located at the root of your project. Every Tailwind project will have this file. Under the theme object, add an extends.colors object like in the following code:

    module.exports = {
        theme: {
            extend: {
                colors: {
                    'menu': '#4279CE',
                    'body': '#F1F1F1'
                }
            }
        }
    }

Then, you can add your own custom colours. In this example, I have added two colours. The `menu` colour is the hexadecimal value `#4279CE` and the body colour is the hexadecimal value `#F1F1F1`.

Anywhere in my project that needs to use the `menu` colour, instead of writing `bg-[#4279CE]`, I can instead write `bg-menu`.