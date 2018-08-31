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

## Logical Operators!

There are a bunch of different operators you can use within your if conditions.

List of logical operators:

- `&&` - And
- `||` - Or
- `!` - Not
- `==` - Unstrict Equals
- `===` - Strict Equals
- `!=` - Unstrict Not Equals
- `!==` - Strict Not Equals
- `>` - Greater Than
- `>=` - Greater Than or Equal To
- `<` - Less Than
- `<=` - Less Than or Equal To

### Examples

#### AND (&&)

This relies on ALL conditions being true.

**NOTE** Pay close attention to the variable usage and then compare it with the variables in the `||` operator below.

Example:

```javascript
if (true && true) {
  console.log('This will trigger');
}

if (true && false) {
  console.log('I will not trigger');
}

// You can use it with variables too!
var x = true && true; // x is set to true
var y = 'cat' && 'dog'; // both are true so y is set to the dog string
var z = false && 'cat'; // returns false
```

#### OR (||)

This relies on one OR the other being true

**NOTE** Pay close attention to the variable usage and then compare it with the variables in the `&&` operator above.

Example:

```javascript
if (true || false) {
  console.log('This will trigger');
}

if (false || true) {
  console.log('this will also trigger');
}

if (false || false) {
  console.log('this will not trigger');
}

// You can use it with variables too!
var w = true || true; // w is set to true
var x = 'cat' || 'dog'; // both are true so x is set to the cat string
var y = false || 'cat'; // this will set y to the string of cat
var z = 'cat' || false; // this will set z to the string of cat as well
```

#### NOT (!)

Returns `false` if its single operand that can be converted to `true`; otherwise, returns `true`.

**NOTE** Notice how placing the NOT operator in front of a string converts it to a boolean? Do you think it would do the same to the other types? (psst: yeah it would)

Example:

```javascript
if (!false) {
  console.log('this will trigger');
}

if (!true) {
  console.log('this will not trigger');
}

if (!'cat') {
  console.log('this will not trigger');
}

// Yep we can use this one with variables too
var x = !true; // Sets x to false
var y = !false; // Sets y to true
var z = !'cat'; // Sets z to false
```

#### Not Strict Equal (==)

Compares both sides of the == sign but only looks at their value and not their type

Example:

```javascript
if ('4' == 4) {
  console.log('this will trigger');
}

if ('four' == 4) {
  console.log('this will not trigger');
}

if (4 == 4) {
  console.log('this will trigger');
}
```

#### Strict Equals (===)

Compares both sides of the === sign compares both value and type

Example:

```javascript
if ('4' === 4) {
  console.log('this will not trigger');
}

if (4 === 4) {
  console.log('this will trigger');
}
```

#### Unstrict Not Equal (!=)

Compares both sides of the != sign returns true if both values are not equal

Example:

```javascript
if (true != false) {
  console.log('this will trigger');
}

if (undefined != null) {
  console.log('this will not trigger');
}
```

#### Strict Not Equal (!==)

Compares value and type of the values, returns true if either are false

```javascript
if (1 !== 1) {
  console.log('this will not trigger');
}

if (1 !== '1') {
  console.log('this will trigger');
}
```

#### Greater Than (>)

Returns true if the left side is greater than the right side

```javascript
if (1 > 0) {
  console.log('this will trigger');
}

if (1 > 1) {
  console.log('this will not trigger');
}

if ('test' > 1) {
  console.log('this will not trigger');
}
```

#### Greater Than or Equal To (>=)

Returns true if the left side is greater than or equal to the right side

```javascript
if (1 >= 0) {
  console.log('this will trigger');
}

if (1 >= 1) {
  console.log('this will trigger');
}

if (0 >= 1) {
  console.log('this will not trigger');
}

if ('test' >= 1) {
  console.log('this will not trigger');
}
```

#### Less Than (<)

Returns true if the left side is less than the right side

```javascript
if (0 < 1) {
  console.log('this will trigger');
}

if (1 < 1) {
  console.log('this will not trigger');
}

if ('test' < 1) {
  console.log('this will not trigger');
}
```

#### Less Than or Equal To (<=)

Returns true if the left side is less than or equal to the right side

```javascript
if (0 <= 1) {
  console.log('this will trigger');
}

if (1 <= 1) {
  console.log('this will trigger');
}

if (1 <= 0) {
  console.log('this will not trigger');
}

if ('test' <= 1) {
  console.log('this will not trigger');
}
```
