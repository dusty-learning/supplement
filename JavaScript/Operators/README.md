# Operators!

So in the [Logic](https://github.com/dusty-learning/supplement/tree/master/JavaScript/Logic) Section of this repo we went over a good number of logical operators.

However, what about the rest of them? MDN has a really nice resource on these that goes very in depth. We will be roughly covering a breif set of operators here but know you can get more info here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

## Arithmetic Operators

Arithmetic operators are going to be your common mathmatical signs.

Takes a numerical values (either literals or variables) as their operands and returns a single numerical value.

List of Arithmetic Operators:

- `+` - Addition
- `-` - Subtraction
- `*` - Multiplication
- `/` - Division
- `%` - Modulus (Remainder)
- `++` - Increment
- `--` - Decrement

### Examples

### Addition (+)

The Addition operator is one of the special ones, since it is the only Arithmetic operator that can work with numbers AND strings.

```javascript
1 + 1 // 2
3 + -1 // 2

'5' + '4' // 54
'5' + 4 // 54
4 + '5' // 45
'test' + 'ing' // testing
```

### Subtraction (-)

Common subtraction math

```javascript
1 - 1 // 0
0 - 4 // -4

// Notice if you use a string subtraction will try to convert it to a number first
'2' - 1 // 1
2 - '1' // 1

// If the string is not a number value at between the quotes you will get a NaN result
'test' - 1 // NaN
```

### Multiplication (*)

Common multiplication math

```javascript
1 * 1 // 1
0 * 4 // 0
5 * 5 // 25

// Notice if you use a string multiplication will try to convert it to a number first
'2' * 1 // 2
2 * '1' // 2

// If the string is not a number value at between the quotes you will get a NaN result
'test' * 1 // NaN

// JavaScript will follow the order of operations
5 - 1 * 2 // 3
```

### Division (/)

Common division math

```javascript
1 / 2 // 0.5
0 / 4 // 0
25 / 5 // 5

// Notice if you use a string division will try to convert it to a number first
'2' / 1 // 2
2 / '1' // 2

// If the string is not a number value at between the quotes you will get a NaN result
'test' / 1 // NaN

// JavaScript will follow the order of operations
5 - 1 / 2 // 4.5
```

### Modulus/Remainder (%)

So this lil guy will try to divide the two values and provides the remainder of the division

```javascript
1 % 2 // 1
0 % 4 // 0
25 % 5 // 0

// Notice if you use a string division will try to convert it to a number first
'2' % 1 // 1
2 % '1' // 1

// If the string is not a number value at between the quotes you will get a NaN result
'test' % 1 // NaN

// JavaScript will follow the order of operations
5 - 1 % 2 // 4
```

### Increment (++)

This will increment the value it is attached to by 1.

**NOTE** the side you place this on is important

```javascript
1++ // 2

var x = 2;

x++; // x is now 3
'test'++ // NaN
```

Above I said placement is important to note there IS a difference

```javascript
var x = 4;

++x; // This sets x to 5 and returns 5

var y = 4;

y++; // This returns 4 and only then sets y to 5
```

### Decrement (--)

This will decrease the value it is attached to by 1.

**NOTE** the side you place this on is important

```javascript
3-- // 2

var x = 2;

x--; // x is now 1
'test'-- // NaN
```

Above I said placement is important to note there IS a difference

```javascript
var x = 4;

--x; // This sets x to 3 and returns 3

var y = 4;

y--; // This returns 4 and only then sets y to 3
```

## Assignment Operators

So we all know how to assign variables right? Well what if I told you you can do math during that assignment?

List of Assignment Operators:

- `=` - Assignment
- `+=` - Addition Assignment
- `-=` - Subtraction Assignment
- `*=` - Multiplication Assignment
- `/=` - Division Assignment
- `%=` - Remainder Assignment

### Info & Examples

All of our examples will be using assignment with JavaScript Variables

### Assignment (=)

This is your classic assignment operator it sets whatever you have on the left, to whatever is on the right. Pretty easy right?

**Usage** - `x = y`

```javascript
var x = 5;
var y = 10;
var z = 25;

x = y // x is now 10

// 1) Don't do this this is for example sake and teaching you all the things
// 2) What is happening here is we are setting, x and y to z
x = y = z // x, y, and z are all 25
```

### Addition Assignment (+=)

Similar to the regular [assignment](#assignment) variable above what this guy does is take whatever is on the left and add whatever is on the right.

**Usage** - `x += y`

**Meaning** - `x = x + y`

```javascript
var x = 5;
var y = 10;

x += y; // x is now 15 because we added 10 to our 5

var z = 20;

y += z; // y is now 30
// They don't alawys have to be variables obviously!
y += 5; // y is now 35!
```

So what about strings? Let's check it out!

```javascript
var x = 'test';
var y = 'ing';

x += y; // x is now the string 'testing'
x += 's'; // x is now the string 'testings'
```

Pretty sweet right?

### Subtraction Assignment (-=)

Similar to the regular [assignment](#assignment) variable above what this guy does is take whatever is on the left and subtract whatever is on the right. Are you starting to get the pattern yet?

**Usage** - `x -= y`

**Meaning** - `x = x - y`

```javascript
var x = 1;
var y = 4;

x -= y; // x is now -3;
```

So what happens if you try to do this with strings???

```javascript
var x = 'test';
var y = 'thing';

x -= 1; // x is now NaN
y -= 'test'; // y is now NaN
```

So if we try to apply a string to this subtraction rule we get back a [NaN](https://github.com/dusty-learning/supplement/tree/master/JavaScript/Types#nan) response

**This will apply to ALL of the other assignment types BESIDES addition**

### Multiplication Assignment (*=)

Similar to the regular [assignment](#assignment) variable above what this guy does is take whatever is on the left and multiply it by whatever is on the right.

**Usage** - `x *= y`

**Meaning** - `x = x * y`

```javascript
var x = 5;

x *= 5; // x is now 25
```

### Divison Assignment (/=)

Similar to the regular [assignment](#assignment) variable above what this guy does is take whatever is on the left and divide it by whatever is on the right.

**Usage** - `x /= y`

**Meaning** - `x = x / y`

```javascript
var x = 25;
var y = 20;

x /= 5; // x is now 5
y /= 3; // y is now 6.666666666666667
```

### Remainder Assignment (/=)

Similar to the regular [assignment](#assignment) variable above what this guy does is take whatever is on the left and divide it by whatever is on the right and return the remainder

**Usage** - `x %= y`

**Meaning** - `x = x % y`

```javascript
var x = 25;
var y = 20;

x %= 5; // x is now 0
y %= 3; // y is now 2
```
