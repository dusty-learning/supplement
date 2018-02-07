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