---
title:       Convert Between Hexadecimal and Decimal in JavaScript
description: In software development, converting between numbering systems is a common task. In this tutorial, we explore converting between hexadecimal and decimal using some of JavaScript's built in functions, like parseInt and toString.
tags:        [JavaScript]
---

## Converting Hexadecimal to Decimal

To convert a hexadecimal number to a decimal number, we can use the `parseInt` function. This takes two parameters. The first parameter is a string representing our hexadecimal number, for example `"A3"`. The second parameter is the radix of our string, which in this case is 16 (number of characters in hexadecimal).

    let num = parseInt("B2", 16);

The variable, `num`, would contain the integer number 178.

## Converting Decimal to Hexadecimal

To convert the other way round, from decimal to hexadecimal, we can use the `toString` function. This needs to be called on the integer, and takes a single parameter, the base of the number we want to generate. The output of this function will be a hexadecimal number as a string.

    let num = 56;
    let hex = num.toString(16);

The variable, `hex`, would contain the hexadecimal number 38 as a string.

## Further Reading

* The [rapidtables](https://www.rapidtables.com/convert/number/hex-to-decimal.html) website is a great place for converting numbers between hexadecimal and decimal. I always use it to validate my code properly converts between numbering systems.
* The Mozilla developers website has a page on the [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function.
* W3Schools has a page about the [toString](https://www.w3schools.com/jsref/jsref_tostring_number.asp) function, including details on how to use different radix values.