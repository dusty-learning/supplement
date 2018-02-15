# Traversing

So being able to move about the DOM tree is pretty important, we've got you covered there too.

## Getting the parent element

```javascript
// This will find out element that has the id of about
// It will then get the parent of that element
document.getElementById('about').parentNode;
```

## Checking if an element is empty

```javascript
if (!document.getElementById('wrapper').hasChildNodes()) {
  // Do a thing if it isn't empty
}
```

So here we are getting our wrapper element and using the method `hasChildNodes` which essentially checks if the element has children elements within it.

## Moving to the next element

```javascript
document.getElementById('wrapper').nextSibling;
```

What this is doing is once again getting our wrapper id elment and then simply getting the nextSibling property. (A sibling is an element that lives on the same level as your selected element)
