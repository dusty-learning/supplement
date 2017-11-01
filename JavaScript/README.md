# JavaScript

Let's touchbase on some javascript concepts

## Syntax

The first and most important thing is following the JavaScript syntax, now to be fair the JavaScript syntax is pretty lenient and all over the place, so it is easy to get confused, for the purpose of this we will 100% be using best practice style syntax

`Whitespace`- JS doesn't really get bothered by whitespace, but using to much can lead to some serious confusion in your blocks. Try to keep whitespace to a happy medium for example:

```js
var newFunction = function    (param)




 {
  var test = 'value';



  if (test === param) {




    return param;
  }


  return test;

}
```

This can easily be simplified down to

```js
var newFunction = function (param) {
  var test = 'value';

  if (test === param) {
    return param;
  }

  return test;
}
```

Makes it a little easier to keep track of everything right?

## Scope

The next key concept to JavaScript is `Scope` it is a tedious and confusing topic to almost everyone, even those of us that claim to understand it, have an extremely difficult time trying to explain it. That's just how it is.

So first, let's talk about `var`. When you declare a `var` it does what's called `hoisting` so it hoists to the most upper scope it can. So let's take a look here at an example This next js block think of it as your empty `js` file

```js
// This is the global scope of your js file
var global = 'test';
// global can be called anywhere within this js file as well as in ANY OTHER JS FILE ON THE SAME PAGE

var newFunction = function (param) {
  // This is a function scope if I declare a var in here
  var test = 'value';
  // Anyone outside of this function will be UNABLE to see or use our "test" variable

  // If you declare a variable within an if block
  if (param === test) {
    var match = true;
  }
  // You can call match anywhere WITHIN THIS FUNCTION because it was "hoisted" to the function level "scope"
  // So if I call match out here
  console.log(match);
  // My output would be true so long as the if passed
}

// However if I do the same thing here
console.log(match);
// My output would be undefined because we are not outside the scope of our function

```

## This Scope

The `this` scope ah what a fair demon it can be, it's one of the reasons I try to avoid it as much as I humanly can. Which to this day I've been completely successful.

`this` is one of those things thats pretty hard to explain, so check out the list of examples here that you can run and play with:

[This Scope Codepens](https://codepen.io/collection/DggGMK/#)

A good example of `this` used really well is through the [Vues.js Framework](https://vuejs.org/)

## How do I begin?

So you're staring at a blank slate, an empty `.js` file and you're feeling a bit overwhelmed. Don't panic, this happens to every single person on their first steps into the world of development in almost every language.

My suggestion here, is take a step back analyze "What do I need to accomplish?" and go from there, draw as many things as you need of your thought process or whatever you need to do. Just don't give in to that overwhelming feeling that only leads to frustration.

Check the requirements of the project and work on each piece individually. Try to break it up into different js files if you need to that is perfectly okay. Make each moving part its own script. Whatever works.

I can't offer a "One Size fits all" solution to this question because let's face it we are all different people with all kinds of different mindsets in the way we think.

That's why I say "whatever works" because that's what it boils down to. Write the code you think works for the task you are assigned. If it works great, if not try again. The first run through can be as `rough` as you need it to be, remember you can **always** come back and clean it up later.


## JavaScript Types

`Objects`, `Arrays`, `Strings`, `Numbers|Integers`, `Booleans`, `etc..` Are all JavaScript types. Even though deep down everything under the hood in JavaScript is really an `Object` but try not to think on that to much it only causes more confusion than it's worth.

These types are different ways of displaying/storing data. Take a gander at this collection of examples

[JavaScript Types CodePen](https://codepen.io/collection/nxgEMg/#)

Each type have built in functions/methods attached to them I suggest checking out MDN to see what you can use in each type


## Functions

Functions are my favorite part of JavaScript, being a functional developer they're a key piece in my day to day development.

The number 1 rule to functions is try to keep it down to a single thing 1 function should be doing 1 thing. As well as if it's possible, they should always return `new data` not `mutated data`.

You should use functions as much as possible if you're able to. Breaking down your code base into smaller more manageble functions is a lot easier to work with than a codebase built on one giant or multiple giant functions.

[Functions CodePen](https://codepen.io/collection/Avgrzd/#)

## Examples

All of the example links from the above in one place:

- [This Scope](https://codepen.io/collection/DggGMK/#)
- [JavaScript Types](https://codepen.io/collection/nxgEMg/#)
- [Functions](https://codepen.io/collection/Avgrzd/#)