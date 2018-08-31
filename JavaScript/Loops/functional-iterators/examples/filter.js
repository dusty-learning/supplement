var numData = [1, 2, 3, 4, 5]

var largerThanTwo = numData.filter(function (x) {
  return x > 2
})

console.log('Larger Than Two:', largerThanTwo) // => [3, 4, 5]

var strData = ['test', 'test', 'hello', 'one', 'three', 'test', 'foo', 'bar', 'test']

var noTest = strData.filter(function (x) {
  return x !== 'test'
  // Alternative:
  // return !x.includes('test')
})

console.log('No Tests:', noTest) // => ['hello', 'one', 'three', 'foo', 'bar']
