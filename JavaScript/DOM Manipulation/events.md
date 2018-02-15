# Events

Events can be pretty tricky but they seem pretty easy with jQuery right, well they're just as easy when using vanilla JavaScript!

For example:

```javascript
// These can replace the .ready event in jquery
window.onload = function() {};
document.addEventListener('DOMContentLoaded', function() {});
```

Take a look at that `addEventListener` method. This allows you to tell an element to listen to browser events, or even your own custom events.

## addEventListener

This method as stated above is your key to assigning events to your elements.

Of course there are some built in ones like `onClick`.

```javascript
// Making sure our event doesn't disappear for dynamically created content
document.querySelector('.example').addEventListener('click', function(event) {
  // Do a thing with your event
});
```

```javascript
var example = document.querySelector('.example');

example.onClick(function(event) {
  // Do a thing
});

// Is the same as:

example.addEventListener('click', function(event) {
  // Do a thing
});
```

What if we want to apply an event to a bunch of different elements like an anchor tag?

That is pretty easy (it only looks complex)

```javascript
// If you need to support IE (before edge)
[].forEach.call(document.querySelectorAll('a'), function(el) {
  el.addEventListener('click', function(event) {
    // Do a thing
  });
});

// Using the Array.from() method it becomes a whole lot easier
Array.from(document.querySelectorAll('a')).forEach(function(el) {
  el.addEventListener('click', function(event) {
    // Do a thing
  });
});)
```
