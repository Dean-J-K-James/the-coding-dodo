---
title:       Optional Chaining Operator
description: JavaScript is considered a weakly typed language, and is not strict about the data an object contains. Although this can make it easier to use than a strongly typed language like C#, it does introduce the problem of not knowing which variables and functions an object possesses. In this guide, we explore the optional chaining operator, which helps to mitigate this issue.
tags:        [JavaScript, Web]
---

## What is the Optional Chaining Operator?

The optional chaining operator, much like the [Null Coalescing Operator](/blog/null-coalescing-in-javascript), is an operator in JavaScript that helps us deal with variables and objects that might be `null` or `undefined`. Consider the following code:

    console.log(customer.name);

This code simply outputs the value stored in the name property of the customer object. Let's say we had a customer object with a name "Harry". The string, "Harry" would be printed to the console. If our customer did not have a name, then either a blank string, `null`, or `undefined` would be printed.

But what would happen if the `customer` object was `null` or `undefined`? Our program would output an error because we would be attempting to access a property, `name`, on an object that does not exist.

To mitigate this, we should check to ensure `customer` was valid before outputting it's name. A simple `if` statement like this can be used:

    if(customer !== null && customer !== undefined) {
        console.log(customer.name);
    }

If the customer was `null` or `undefined`, then nothing would be printed and no error would be produced. To further this, we could of course add an `else` that prints a warning saying the customer was not valid.

Constantly checking to ensure our data is valid can get repetitive, and pollutes the codebase. Fortunately, there is a JavaScript operator that makes this check faster and more elegant, called the optional chaining operator. The following code shows it in use.

    console.log(customer?.name);

In case you don't notice it, it is the `?.` characters right after using the `customer` object and before accessing the `name` property. If the object being accessed is `null` or `undefined`, the optional chaining operator prevents an error from being produced, and instead returns `undefined`.

Although the optional chaining operator can be handy, it is not always a good substitute to some proper validation with an `if` statement. If the object you are using (in this case `customer`) being `null` is a genuine error, then it might be a good idea to print a warning or error to the console. An `if` statement would be required for this.

This operator can be used multiple times in a statement, on objects, arrays, and on functions. In each of the following examples, a program would crash if the standard chaining operator (`.`) was used. Instead, they output `undefined` and do not crash when using the optional chaining operator (`?.`).

    customer?.name          //If customer is null.
    customer?.["name"]      //If customer is null.
    customer.order?.[2]     //If order is not an array.
    customer.delete?.()     //If the function, delete, does not exist.
    customer?.delete?.()    //If customer is null or the function, delete, does not exist.

