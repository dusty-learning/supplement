# Arrays

Arrays are a great data type to help make organizing and maintain data sets.

## Using Arrays

It is recommended to keep your data consistent within arrays if you're able.

**If you want me to add a specific method to the readme let me know which one and I will happily add it**

Example:

```javascript
[1, 2, 3, 4, 5] // Good Practice

['cool', 'consistent', 'arrays'] // Good Practice

[1, 'cool', 2, 'bad'] // Bad Practice
```

## length

You can use the `.length` property from an array to get that arrays total length.

Example:

```javascript
var data = [1, 2, 3];

data.length; // => 3
[].length; // => 0
```

## Array Methods

Arrays come with the benefit of lots of attached methods! Let's check out a few here

### indexOf()

This method runs through an array and checks for a value, if it finds the value it will return it's index. If the value is not found however it will return a -1.

Example:

```javascript
var data = [1 ,2, 3, 4];

data.indexOf(1); // => 0
data.indexOf(4); // => 3
data.indexOf(5); // => -1
```

### push()

The push method appends a piece of data to the end of your array

Example:

```javascript
var data = [1];

data.push(2); // => [1, 2]

// You can pass as many values to push as you'd like
var again = [1];

again.push(2, 3, 4, 5, 6); // => [1, 2, 3, 4, 5, 6]
```

### concat()

This method allows you to combined two arrays together nice and easily

Example:

```javascript
var set1 = [1, 2, 3];
var set2 = [4, 5, 6];

set1.concat(set2); // => [1, 2, 3, 4, 5, 6]
```

However do note that it does not account for existing values:

```javascript
var set1 = [1, 2, 3];
var set2 = [3, 4, 5];

set1.concat(set2); // => [1, 2, 3, 3, 4, 5]
```

There are a lot of different methods you can take advantage of with arrays that can really help make your code flow better, and make writing out larger more complicated apps easier.

Check out more methods from the MDN resource you can find here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Syntax