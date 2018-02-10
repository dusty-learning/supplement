# Functions

These bad boys are probably the most important and most useful pieces of JavaScript.

Also known as methods (like when they are attached to objects, for example the `.indexOf()` on arrays)

I am a Functional Developer in the world of JavaScript, so my world of code really revolves around them and making them fast and useful. Some of this I hope to shed light on today.

I have a codepen which you can find here: https://codepen.io/Killparadise/pen/YEyQoY to mess around with and edit to your hearts content

## Function Syntax

### Function Expression vs Function Declaration

Before I go into the syntax basics I want to explain the style I use (`var funcName = function(param) { // Do Things }`)

The syntax can go one of two ways, known as "Function Expression" and "Function Declaration"

I 100% of the time use function expression, it makes organization easier, and life over all easier, let's take a look at both.

First we will take a gander at function declaration

```javascript
// The syntax is fairly straight forward in both methods:

function myThing(param) {
  // Do things here
}
```

And here is an example of function expression:

```javascript
var myThing = function (param) {
  // Do things here
};
```

These two styles are actually really similar (unless you are using ES6 javascript) You would call both of them exactly the same.

So then what IS the difference?

**When your script is loading onto the page, function declaration loads before any code is executed. While function expression loads only when the interpreter (your borwser for instance) reaches that line of code.**

So from that sentence right there you are probably thinking "Well obviously Function Declaration sounds better because my functions would be there first" Which sure, however from the stand point of managing and taking care of your code in sequence function declaration can lead to some messy source code bases.

In my opinion 

```javascript
var myThing = function(param) {
  // Do things
};

myThing('cool');
```

is a lot easier to follow than

```javascript
myThing('cool');

function myThing(param) {
  // Do things
}
```

In the end though, you do you, we all have our preference in style. What matters is how you use it.

### Back to Syntax

That was a lot to take in, but I wanted to explain that before just jumping straight into the way I write things.

So the basic syntax to a function is simple: the functions `name`, = the word `function`, `parens` that may contains `parameters`, and then curly brackets `{}`

The code that lies within those curly brackets is only executed once you "call" that function, otherwise it will never execute.

Let's take our example from the 2nd day of our JavaScript class that `logArray` function, it could loop through arrays based on what you sent it right?

```javascript
var logArray = function(list) {
  var i = 0;
  var len = list.length;

  for (i; i < len; i++) {
    console.log(list[i]);
  }
};

logArray(['foo', 'bar', 'thing']); // => our console would display foo bar thing in order
logArray(['cat', 'dog', 'bird']); // => our console would display cat dog bird in order
```

This now prevents us from writing a for loop for every single array we want to log out right? Let's break that function down piece by piece

- `var logArray =` - this is the variable we are setting the function to, `logArray` is going to be it's name when we want to call it
- `function` - the keyword function tells javascript we are creating a function on this variable
- `(list)` - list is a parameter for the `logArray` function this is the value we use whenever we want to reference the data we sent to our `logArray` function
  - Note: Params can be named anything you want, I try to keep mine named as close to what it is going to be as I can usually for ease of reading later on
- `{ code }` - the code between our curly brackets is the code we want to run every time `logArray` is called in our script

When calling the function (as in our example) you use the functions name, and then two parentheses. Any data you are sending to the function (if it takes parameters) goes in between those.

As we saw with our example we wanted to call it so we set `logArray` and put the parentheses after it, and since this function expects you to send it data, we sent it an array between the `()` so `logArray(['things']);` is the syntax to call our function

### Callback Functions

So another use for functions is what's known as a callback function. These are functions that are triggered once the called function finishes. (Sounds confusing I know)

Callback functions can usually be passed along to a function as a parameter

```javascript
var something = function(cb, list) {
  cb(3 * list.length);
};
```

In the above example I used the param cb (acronym for callback in this case) and a param of list, so we create a new result by taking the list length and multiplying it by 3.

Now yes this doesn't need a callback this is strictly for example sake.

A good example of callbacks are the use of `functional iterators` which are functional ways of looping.

```javascript
var dataList = [1, 2, 3, 4, 5];

// This will create a new array from dataList but every value will be doubled
var doubled = dataList.map(function(val) {
  return val * 2
});

console.log(doubled); // => [2, 4, 6, 8, 10]

// This will take an "accumulator" (acc) and add the value of each number in our data list to it
// Notice the 0 after the function this sets the initial value of acc
var sum = dataList.reduce(function(acc, val) {
  return acc + val;
}, 0);

console.log(sum); // => 15
```

These are examples of 2 different functional iterators I use these as much as I possibly can instead of your classic for loop.

There's a lot of these out there I suggest checking out MDN on each one for more info (I will make a supplamental piece on them too) some of the others are: `forEach`, `filter`, and `find` each one does something a little different to make life easier.

A callback is essentially just a way of moving data along once a function is finished they're more useful in `async` environments which we will get more into later.

## Methods

So after all that there's another name for functions which is methods, now a method is simply a function that lives inside of an object nothing fancy about that.

Check out this example:

```javascript
// We create a simpleCalc method library
var simpleCalc = {
  add: function(a, b) {
    // We should probably make sure their numbers since addition is a special case
    // So lets wrap each one in a Number function (built into JavaScript)
    return Number(a) + Number(b);
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  remainder: function(a, b) {
    return a % b;
  }
};

// We generated our object of methods so now we can use them!
simpleCalc.add(1, 1); // => 2
simpleCalc.add('1', 1); // => 2 since we convert them to numbers this still works!

simpleCalc.subtract(2, 1); // => 1
simpleCalc.subtract(1, 2); // => -1

simpleCalc.multiply(2, 2); // => 4

simpleCalc.divide(4, 2); // => 2

simpleCalc.remainder(1, 2); // => 1
```

These are a good way of containing functional libraries that you want to pass around your code base to use and re use.

Methods in form are just another form of function, they just live inside of an object.
