# Selectors

So in jQuery you have whats called a selector for grabbing elements. How does that transition to regular JavaScript?

Well it's fairly easy actually!

You could use:

- `getElementById`
- `querySelector`
- `querySelectorAll`

These three methods do different things sure but they give you the flexibility. Let's start with `getElementById`

## getElementById

This method searches for an id once found grabs that element, remember you can't have duplicate id values in your html, because javascript will stop at the first one it finds and return it.

### Usage

You can use it to quickly find an element by its id

```javascript
var div = document.getElementById('myDiv');
```

## querySelector

This method works alot like `getElementById` but you can also use it to get classes! If your asking which one to use over the other, I'd say it does not matter for ids.

### Usage

Like `getElementById` this method will stop at the first class or id it finds and return it.

```javascript
var div = document.querySelector('#myDiv');
var otherDiv = document.querySelector('.myOtherDiv');
```

Notice with this method we have to use a pound sign (#) and a period (.) at the start of our id/class name? That's important to remember!

## querySelectorAll

This method again is like the above two, however for classes this guy will grab ALL of them for you. So if you want to select multiple elements with the same class, this is your best bet.

Note: It also works with elements! (But not IDs)

### Usage

```javascript
var divs = document.querySelectorAll('div');
var otherDivs = document.querySelectorAll('.myDivs');
```

`querySelectorAll` will return an `Array` of the elements it finds, whether its 1 or multiple.

