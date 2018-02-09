# Some Events

We very lightly (I was given 10 minutes) went over browser events, mainly the `onkeyup` event.

I want to go a little more in depth here to give you a better explanation of what these are and what they do

**It is VERY important to note that these are built ONLY into the `document` variable we were calling**


Some events you can listen to with `document`

- onkeyup (As we saw and you will find it useful for your hw)
- onkeydown
- onkeypress

It is also **important** to not that this isn't the classic way of doing things. We can go over that more later

Digging into the events, when we do the `document.onkeyup =` we are telling our app that whenever a keyup action happens fire whatever is on the right.

**This has to be a `function` if it's not you will get an error when a keyup happens**

```javascript
// Set onkeyup to our function
document.onkeyup = function (event) {
  // do something with the event
}
```

Notice in between the functions parentheses our event word, this can be anything you want so long as you refrence it the same way within the function body. event is simply a `parameter` for the onkeyup function.

```javascript
document.onkeyup = function(event) {
  console.log(event.key); // Valid will print your key
}

// OR

document.onkeyup = function(e) {
  console.log(e.key); // Valid will print your key
}

// HOWEVER

document.onkeyup = function(event) {
  console.log(e.key); // Is not valid, will throw an error to the page
}
```

## Whats the difference between onkeyup, onkeydown, and onkeypress?

Great question!

- `onkeyup` is fired when a key is released (you lift your finger from the key)
- `onkeypress` is fired when a key is pressed down on the keyboard for keys that produce a value
- `onkeydown` is fired when a key is pressed down unlike `onkeypress` this even is also fired for characters that produce a value and for keys that do NOT produce a values (alt, shift, ctrl, etc...)

In theory, the keydown and keyup events represent keys being pressed or released, while the keypress event represents a character being typed. The implementation of the theory is not same in all browsers.

`onkeydown` happens first when the key is pressed, `onkeypress` happens second when the value is entered/captured, and `onkeyup` happens last when the value is entered.

Which you use depends on what you need and how you're doing it. You may be able to use any or you may need to pick a certain one for your use case.

The safe bet is that you can all use them like the examples for `onkeyup` above. (`document.`)
