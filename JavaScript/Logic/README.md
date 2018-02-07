# Logic

The core to JavaScript logic is If/Else blocks/branches.

## What's a If/Else block?

I'm glad you asked a block would be considered the space between the `{ }`

Example:

```javascript
if (thing) {
  // If Block
} else {
  // Else Block
}
```

An if statement fires once the condition within it's `( )` is truthy. If this is not the case then IF a `else` is present that will fire.

Example:

```javascript
if (true) {
  console.log('I am the if blocks fired code!');
}

if (false) {
  console.log('you should not see me.');
} else {
  console.log('you should see me!');
}
```

## Else If

An Else if works on a level of steps so when the if isn't true, it goes to the else if block, and so on until it reaches an else or it finishes the chain.

Example:

```javascript
if (false) {
  console.log('You should not see me');
} else if (true) {
  console.log('You should see me!');
} else {
  console.log('You wont see me');
}
```

## Operators!

There are a bunch of different operators you can use within your if conditions.

List of operators:

- `&&` - AND operator this relies on ALL conditions being true. (You can && as many as needed)

Example:

```javascript
if (true && true) {
  console.log('This will trigger');
}

if (true && false) {
  console.log('I will not trigger');
}
```


- `||` - OR operator this relies on one OR the other is true

Example:

```javascript
if (true || false) {
  console.log('This will trigger');
}
```

- `!` - NOT operator reverses the value used mainly when expecting a value to be false

Example:

```javascript
if (!false) {
  console.log('this will trigger');
}

if (!true) {
  console.log('this will not trigger');
}
```

- `==` - Equals comparison (not strict) only compares the values

Example:

```javascript
if ('4' == 4) {
  console.log('this will trigger');
}

if ('four' == 4) {
  console.log('this will not trigger');
}
```

- `===` - Equals comparison (Strict) compares both values & types

Example:

```javascript
if ('4' === 4) {
  console.log('this will not trigger');
}

if (4 === 4) {
  console.log('this will trigger');
}
```

- `!=` Not Equal (not strict) comparison this is mainly used when comparing null and other falsy values

Example:

```javascript
if (true != false) {
  console.log('this will trigger');
}

if (undefined != null) {
  console.log('this will not trigger');
}
```

- `!==` Not Equal (strict) comparison compares both type and value

```javascript
if (1 !== 1) {
  console.log('this will not trigger');
}

if (1 !== '1') {
  console.log('this will trigger');
}
```

You will use a mixture of the aboveoperators quite a bit through your code when writing larger apps.


