# Functional Iterators (Higher Order Functions)

Functional iterators are a fantastic way of running loops and shorthanding the need to use weird for loops and the like.

Functional iterators are immutable (The ones that return something return brand new data), and they're reliable performance wise. They're also all only available on `Array` data types

Let's take a look at some of the popular options

## .map()

Map is a good method that takes a function, it then loops through an array it's attached to and runs that function against every value in the array.

So the layout is like so `arrayToLoop.map(functionToRunOnEveryValue)` and it returns a brand new array without mutating the exsisting one. Pretty neat!

**Examples: [HERE](https://github.com/dusty-learning/supplement/tree/master/JavaScript/Loops/functional-iterators/examples/map.js)**


## .reduce()

Reduce is a very popular method it's capable of building new arrays, objects, or just combining an array into a total of some kind.

However it's syntax is just a bit more complex. Like all the others, it accepts a `function`, however that `function` accepts 2 `parameters`.

The first parameter is whats known as the `accumulator` or "total" even, this is where you will be building out your new piece of data.

The second parameter is the actual value within the array, at which ever point of the loop we are at.

**Examples: [HERE](https://github.com/dusty-learning/supplement/tree/master/JavaScript/Loops/functional-iterators/examples/reduce.js)**

## .filter()

Filter does pretty much exactly what it says, it loops through the array it's attached too, runs a `function` on each data, and expects a `true` or `false` return from that `function`.

If the `function` returns `true` then the data will be included in the new array, if it returns `false` then the data will not be included.

**Examples: [HERE](https://github.com/dusty-learning/supplement/tree/master/JavaScript/Loops/functional-iterators/examples/filter.js)**
