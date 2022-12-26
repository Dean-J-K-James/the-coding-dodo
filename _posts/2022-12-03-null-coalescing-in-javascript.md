---
title:       Null Coalescing in JavaScript
description: The null coalescing operator makes it much easier to deal with null variables, and is a handy technique for providing alternative data when such a case occurs.
tags:        [JavaScript, Web]
---

## What is the Null Coalescing Operator?

When writing code in any language, it is important to perform regular validation of data, especially if user input is involved. One of the most common data checks is to see if a variable actually contains anything. This is often done by checking if the variable is equivalent to `null`, or `undefined`.

Consider the following code:

    if (foo != null) {
        sendRequest(foo);
    }
    else {
        sendRequest("No Request");
    }

In this code, we want to call the `sendRequest` function, which requires a single parameter. If our variable, `foo`, is not `null`, then we call `sendRequest` with `foo` as the parameter. Otherwise, if `foo` is `null`, then we use the string `"No Request"` as the parameter.

This is a simple piece of code that is likely to be used many times throughout a project. Though easy to understand, it can get repetitive to code and read. Fortunately, most languages have a convenient alternative called the null coalescing operator. In JavaScript, that operator is represented by two question marks: `??`.

This operator is a binary operator, and so requires a left operand and a right operand, like so:

    a ?? b

In this example, the variable `a` is first evaluated. If `a` represents some data and is not null, then it is used. However, if `a` is equal to `null` or `undefined`, then `b` gets used.

Let's rewrite the original `sendRequest` example using the null coalescing operator.

    sendRequest(foo ?? "No Request");

Using the null coalescing operator significantly shortens the amount of code required to do this basic data validation, keeping code clean and readable.