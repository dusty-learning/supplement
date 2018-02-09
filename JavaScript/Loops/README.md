# Loops

There are several types of loops in the JavaScript ecosystem.

They are:

- for loops
- for in loops
- for of loops <-- these are brand new and support for them is low
- while loops
- functional iterators <-- I will create a different section for these to talk about them

The most popular of that list is your common for loop. This is the loop I want everyone to focus on and master, then move onto the others.

## For Loops

So the most common loop is a for loop you will see them a lot. They are pretty good at iterating through iterable data. (Arrays)

Let's break it down. It all starts with the syntax!

### Syntax

```javascript
// Basic syntax

for (var i = 0; i < 5; i++) {
 // Do a thing 5 times
}

// Or a little extra organization
var i = 0;

for (i; i < 5; i++) {
  // Do a thing 5 times
}
```

Notice the `++` incrementer, you can find in depth info on increment in the [operators sections](https://github.com/dusty-learning/supplement/tree/master/JavaScript/Operators#increment-)

So what's happening here? Look at it this way:

```javascript
for (iterator; condition; increment) {
  // Actions
}
```

- `iterator` - this is our value that we will be incrementing by one each pass through
- `condition` - this is our condition that is checked every iteration to make sure its still true
- `increment` - the action taken after each run through

```javascript
// The for loop first verifies our condition is still true
for (var i = 0; i < 5; i++) {
  // if it is still true, execute the block of code
  console.log('executed!');
  // At the end of the loop we increase i by 1 and go back to the top stage to check the condition again
}
```

This is essentially all there really is to a for loop.

Still confused? Checkout MDN to get even more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for


**I want to wait before adding more loops because I want everyone to get the for loops down pat since it plays a vital role**
