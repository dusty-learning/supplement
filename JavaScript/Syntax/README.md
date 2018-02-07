# Syntax

The first and most important thing is following the JavaScript syntax, now to be fair the JavaScript syntax is pretty lenient and all over the place, so it is easy to get confused, for the purpose of this we will 100% be using best practice style syntax

## Curly Brackets ({})

Curly brackets are the most common set of brackets you will see (Square brackets are pretty common to) amongst the JavaScript universe.

These little guys represent the start and end of your "Code block". This is why you will commonly hear me refrence things like "if blocks, else blocks, function blocks" etc.

HOWEVER, they also represent objects in your JavaScript code.

```javascript
if (thing) {
  // if block
  // Code can go here
} else {
  // else block
  // Code can go here too
}
```

## Square Brackets ([])

Square brackets are common when refrencing Arrays as we saw in class. There is however a few other uses which we will dive more into later on in the cohort.

```javascript
var x = ['foo', 'bar', 'zoom'];

x[0]; // foo
x[1]; // bar
x[2]; // zoom

```

## Whitespace

JS doesn't really get bothered by whitespace, but using to much can lead to some serious confusion in your blocks. Try to keep whitespace to a happy medium for example:

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