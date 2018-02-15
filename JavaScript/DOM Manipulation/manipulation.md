# Manipulation

Obviously being able to add, remove, edit attributes and classes or event appending elements to the DOM is pretty important for dynamic projects.

Don't worry Vanilla JS has you covered here too.

## Attributes

We can easily set and change attributes in vanilla js using the `setAttributes` method.

```javascript
document.querySelector('a').setAttribute('href', 'https://www.google.com');
```

This will find the first anchor tag in our html and set its href attribute to googles webpage.


## Classes

You can even add, remove, or toggle classes with vanilla js!

```javascript
var div = document.querySelector('div');

// Adding a class to our classList
div.classList.add('thing');

// Remove a class from our classlist
div.classList.remove('thing');

// Toggle a class in our classlist
div.classList.toggle('toggler');
```

## Appending Elements

You can append elements to your page with the `appendChild` method

```javascript
document.body.appendChild(document.createElement('div'));
```

One you might not know so well is `cloneNode` which returns a duplicate of the node the method is called on.

```javascript
document.getElementById('about').cloneNode(true);
```

The `true` we passed here tells cloneNode to ALSO clone all of the children inside of our element. Don't send anything if you just want the element itself to be cloned.

## Emptying Elements

jQuery has a convenient empty method to empty out elements, so lets see how we can do that with vanilla js

```javascript
// We have a div with an ID of wrap

var wrap = document.getElementById('wrap');

while (wrap.firstChild) {
  wrap.removeChild(wrap.firstChild);
}
```

So what we are doing here is getting our wrapper element, and then so long as that element has a child element within it, we are going to remove it.

This just loops through all the child elements that live within the wrap and removes them using a while loop.
