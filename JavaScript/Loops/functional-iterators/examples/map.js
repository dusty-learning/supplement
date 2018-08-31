var numData = [1, 2, 3, 4]

var doubles = numData.map(function (x) {
  return x * 2
})

console.log('Doubles:', doubles) // => [2, 4, 6, 8]

var objData = [
  {
    name: 'George',
    level: 22,
    primary: 'sword'
  },
  {
    name: 'Galihad',
    level: 100,
    primary: 'spear'
  },
  {
    name: 'Leroy',
    level: 10,
    primary: 'jenkins'
  }
]

const names = objData.map(function (x) {
  return x.name
})

console.log('Names:', names) // => ['George', 'Galihad', 'Leroy']

// Identify when it's a good idea to use it. Example:
var testData = ['foo', 'bar', 'baz']

var capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Instead of something like this:
var results = []

for (var i = 0; i < testData.length; i++) {
  results.push(capitalize(testData[i]))
}

// You can Easily do this!
var betterResults = testData.map(capitalize)

// And you'll get the same thing!
console.log('Dumb way of doing it:', results)
console.log('Good way of doing it', betterResults)
