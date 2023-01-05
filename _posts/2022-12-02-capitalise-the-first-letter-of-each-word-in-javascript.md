---
title:       Capitalise the First Letter of Each Word in JavaScript
description: Sometimes we need to capitalise the first letter of each word in a string. This tutorial shows several ways of achieving this in JavaScript, using methods like string splitting and regular expressions.
tags:        [JavaScript, Web]
---

## Using Substring to Split the String Into Words

When it comes to changing characters between lower case and upper case in JavaScript, there are a number of different approaches you can take. The most basic way however, is to use JavaScript's built in `toUpperCase()` function. This function can be called on any string, and converts all characters to their upper case equivalent.

For example, consider the following code:

    var sentence = "hello and welcome to my website";
    var capitals = sentence.toUpperCase();

When executed, `capitals` would contain the entire string in upper case characters, like this: `HELLO AND WELCOME TO MY WEBSITE`. That isn't quite what we want, since we desire only the first letter of each word to be capitalised. First things first though, let's look at capitalising a single character. We can get a single character from a string by using it's index like in an array. The first letter will be at index 0. The following code gets the first character from our string and converts it to an upper case character.

    var capitals = sentence[0].toUpperCase();

If we output the results of this code to the console, we get only the letter `H`. That is because we are only working with the single character at index 0. To fix this, lets also output the rest of the string using the `substring` function. This function takes a starting index as it's parameter, and returns the characters between this index and the end.

    var capitals = sentence[0].toUpperCase() + sentence.substring(1);

This time, `capitals` contains the string: `Hello and welcome to my website`. Only the first character is capitalised.

Now that we know how to capitalise only a specific character, we need some way of identifying the index of the first character of each new word. There are a few ways we can do this, but the easiest is probably to split our sentence into an array of individual words using the `split` function. This function splits a string into an array of smaller strings using a separator character. Since the words in our sentence are separated by a space, we use the `split` function with a space character as it's parameter.

    var sentence = "hello and welcome to my website";
    var words    = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    var capitals = words.join(" ");

Once the sentence is split into an array of words, we iterate over it, using the method we previously tried to capitalise the first letter of each word. The newly formatted word is then stored back in the words array.

Once all words have been formatted properly, we use the `join` function to join the words back together again by a space. `capitals` should now store the correctly formatted string: `Hello And Welcome To My Website`.

## Regular Expressions

A second approach to this problem is to use regular expressions. Regular expressions can be used to find and match patterns within a string, such as getting the first letter of each word. Fortunately, JavaScript's `replace` function is compatible with them.

The `replace` function takes two parameters. The first is a regular expression used to identify patterns in the string. The second defines what to do with any matches. Usually the second parameter will be a string that directly replaces any matches, but it can also be a function. This function will then get called for all patterns identified by the regular expression.

    var sentence = "hello and welcome to my website";
    var capitals = sentence.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase());

In this code, any part of the sentence that matches the regular expression: `/(^\w|\s\w)/g` is converted to upper case characters. Let's have a look at how this regular expression works.

* `/` starts and ends the regular expression. Forward slashes are used to denote the start and end.
* `^` means the match has to occur at the start of the expression.
* `\w` matches any character typically found in a word, including lower and upper case letters, and digits.
* `|` means logical OR.
* `\s` matches a space.
* `()` groups the expression together.
* `g` means global. This finds all occurences that match the rest of the regular expression. Without it, only the first occurence (the first letter of the first word) will be found and capitalsed.

In other words, the regular expression identifies all characters that appear either at the start of the string, or after a space. Any matches then get fed to the function passed to `replace`, which simply capitalises the character. Once finished, the value stored in `capitals` should be equal to `Hello And Welcome To My Website`, which is exactly what we wanted.

## Further Reading

* The StackOverflow question [How can I capitalize the first letter of each word in a string using JavaScript?](https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript) shows variations of the methods used in this article.
* There is a page, [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) on the Mozilla web docs website that teaches how to structure a regular expression.