# Types

Type list

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Null`
- `Undefined`
- `NaN`

These Are all JavaScript types, deep down though everything under the hood in JavaScript is really a part of the `global object`

Overall Types are pretty bad in the world of JavaScript and you will find out very quickly that you cannot depend on them.

Ones that I know you are probably unfamiliar with are the `Null`, `Undefined`, and `NaN` types (Maybe the `Object` type as well but we will get there).

## Null & Undefined

So if we go back and use our [logical operators](https://github.com/dusty-learning/supplement/tree/master/JavaScript/Logic#logical-operators) here...

```javascript
null == undefined // true
null === undefined // false
null != undefined // false
null !== undefined // true
```

The `null` type/value is loosely compared to the `undefined` strictly however they are not the same.

Both `null` and `undefined` are treated as falsey values for example:

```javascript
if (null) {
  console.log('will not fire');
}

if (undefined) {
  console.log('will not fire');
}

if (null == undefined) {
  console.log('will fire because the comparison is true');
}

if (null !== undefined) {
  console.log('will also fire for the same reason');
}
```

A whole lotta crap right? (It only gets worse)

As said above, the type system in JavaScript is not fantastic and allows for some REALLY bad code, this is a lot of the reason JavaScript gets a lot of crap from other languages that and a lot of JavaScript developers are really bad at it, their code only works because JavaScript lets it...

### NaN

So the `NaN` type... Any guess on what that means?

If you guessed `Not A Number` you're correct! This value appears if you try to math and end up with a value that isn't a number... The most obvious way right?

So... Is it falsey? Let's check it out

```javascript
if (NaN) {
  console.log('this will not fire');
}
```

Yep! NaN by itself is indeed a "falsey" value.

**Fun Fact** if you do `typeof NaN === 'number'` it will return as true. Yup. That's great right? Right...? (I can't explain that one)


Feel free to play around with some of them in these codepens here: (String, Number, Array, Object)

[JavaScript Types CodePen](https://codepen.io/collection/nxgEMg/#)