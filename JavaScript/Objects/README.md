# Objects

Ah, the object. That which everything is in the world of JavaScript.

An object is a key value pair form of data storage. (key: value) that is wrapped in curly brackets `{}`

an example might be:

```javascript
var myObj = {
  foo: 'bar'
};
```

Accessing data in these sets is fairly easy, you use what is called dot notation

```javascript
var myObj = {
  foo: 'bar'
};

console.log(myObj.foo); // => 'bar'
```

You can also use bracket notation but this form is frowned upon greatly

```javascript
var myObj = {
  foo: 'bar'
};

console.log(myObj['foo']); // => 'bar'
```

The main use for bracket notation is for dynamically generating values inside your object for example:

```javascript
var myObj = {};
var thing = 'shiny';

myObj[thing] = 'oooo shiny';

console.log(myObj.shiny); // => 'ooo shiny'
```

This is an overly simplified example but the morale of the story here is to use dot notation when grabbing data or setting planned data. Use bracket notation only if you are dynamically creating or dynamically grabbing key value pairs.

## Iterating Over Objects

Generally I advise against trying to loop through objects because thats what an array is for, not an object.

HOWEVER in a lot of cases you might not get a choice... So let's take a gander

```javascript
var myObj = {
  foo: 'bar',
  thing: 'here',
  other: 'cool'
};

// We are going to use a sibiling of the for loop here, known as the for in loop

for (var prop in myObj) {
  // This will set prop to the key in your object so now you can do this:

  console.log(myObj[prop]); // Notice bracket notation for dynamically pulling data
}

// This will print out in order bar here cool to our console
```

So why is this advised against? Well because objects aren't an iterable type. They were not meant to be iterated over. That's why javascript has a lot of built in tools that you can use to easily convert objects into an iterable type like an array.

This makes it both faster and easier to use than iterating over an entire object.
