# Loops

There are several types of loops in the JavaScript ecosystem.

They are:

- for loops
- for in loops
- for of loops <-- these are brand new and support for them is low
- while loops
- do while loops
- [functional iterators](https://github.com/dusty-learning/supplement/tree/master/JavaScript/Loops/functional-iterators)

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
var i = 0

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
  console.log('executed!')
  // At the end of the loop we increase i by 1 and go back to the top stage to check the condition again
}
```

This is essentially all there really is to a for loop.

Still confused? Checkout MDN to get even more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

## While Loops

The `while` loop is a powerful yet not as common loop. It's really good for large data sets, initially it is slower than a for loop. However the main difference here is that the longer a `for` loop runs the slower it will get. This is not true for a `while` loop as it will maintain performance no matter the data size.

This is why it's a good use case for unknown data set sizes, or very large data sets.

### Syntax

```js
var idx = 0
var arr = [1, 2, 3]

while (idx < arr.length) {
  console.log(arr[idx])

  idx++
}
```

So let's break it down

```js
while (condition) {
  // Do an Action
  increment
}
```

With while loops the `iterator` is going to be defined by an outside source usually a variable somewhere.

- `condition` : So long as this condition remains true the loop will continue to iterate
- `increment` : Notice we increment within the while loop. If you never make your condition falsey, well then you'll just loop forever!


