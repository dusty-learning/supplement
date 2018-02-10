# Scope

Scope can be a tricky business in JavaScript if you're not careful with your code.

Scope is a tedious and confusing topic to almost everyone, even those of us that claim to understand it, have an extremely difficult time trying to explain it. However I will do my best!

Let's talk about var. When you declare a var it does what's called hoisting so it hoists to the most upper scope it can. So let's take a look here at an example This next js block think of it as your empty js file

## Global Scope

This is a danger zone, anything you put out into the global scope can be accessed globally by js everywhere. Why is this a bad idea? Because JavaScript is VERY good at mutating data by refrence and any other means which can lead to bad data, confusing data, and disorganized data.

```javascript
// On the html script tag this is a global scoped variable
var myGlobal = 'thing';

var myThing = function(param) {
  // Param is a parameter which only the function can see (and the code within the function obviously)

  var test = 'value';
  // This variable is only visible by the code within this function, it is scoped to the myThing function

  anotherOne = 'test';
  // However if you do not put the var keyword in front of it, then it will bubble up to the global scope of your javascript on the page

  if (param) {
    var thing = true;
    // If we set a variable within this if block
  }

  console.log(thing);
  // And then logged it after, So long as that if triggered thing will be true.
  // If it did not fire then our console.log would throw an error
};
```

In our example above, `myGlobal` can be accessed by any javascript that lives within the same html page. Wheteher its inline javascript, or another javascript file. This ALSO means that someone who opens their developer tools and types out `myGlobal` will be able to see what that variable is currently set to as well.

If you set a variable without the var keyword inside of a function, it will also bubble up to the global scope

**REMEMBER This is global as in global to the current HTML/JavaScript on the current page**

## Hoisting

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

So let's look at an example

```javascript
x = 5; // Assign 5 to x

console.log(x); // => 5

var x; // Declare x
```

With hoisting our declaration of the variable x is put to the very top of the script which allows this to work properly.

It is good to know that only declared `var x;` get hoisted where as initialized `var x = 2;` do not so if we re did this:

```javascript
console.log(x);

var x = 5;
```

The above would throw an error because x was never declared

Hoisting is a behavior that no one really likes to walk along side with, it's there but we have standards in place to make sure its never a problem.

Something like this:

```javascript
var myFunc = function(val) {
  var x = 0; // We initialize x with the type of value we expect it to be at the end of the function

  // If our val is sent, add it to x
  if (val) {
    x += val;
  }

  // Then return x to the caller, if val isn't present then just return 0
  return x;
};
```

These simple and common sense rules will really help you in avoidign the heartache some of JavaScripts less than great features might give you.

## Overall Picture

```javascript
// This is the global scope of your js file
var myGlobal = 'test';
// global can be called anywhere within this js file as well as in ANY OTHER JS FILE ON THE SAME PAGE

var newFunction = function (param) {
  // This is a function scope

  var test = 'value';
  // Anyone outside of this function will be UNABLE to see or use our "test" variable

  // We can still see our global scope here
  console.log(myGlobal); // => 'test'

  // If you declare a variable within an if block
  if (param === test) {
    var match = true;
  }

  console.log(match);
  // My output would be true so long as the if passed
}

// If I try to log our the test var thats in our function
console.log(test);
// We would get an error, because the variable test doesn't exist at this level of the scope
```

**Once we get into "this" scope I will also add that here, check back then!**
