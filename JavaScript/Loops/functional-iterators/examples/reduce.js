var mathData = [1, 2, 3, 4]

// Take note of the syntax here
// acc = out accumulator
// x = our array value
// Also notice the 2nd parameter is 0 so acc will start at 0
var total = mathData.reduce(function (acc, x) {
  return acc + x
}, 0)

console.log('Total:', total) // => 10

var objData = [
  {
    name: 'Leo',
    level: 5,
    guild: 'None'
  },
  {
    name: 'Arthur',
    level: 23,
    guild: 'The Round Table'
  },
  {
    name: 'Grady',
    level: 55,
    guild: 'Graders Raiders'
  }
]

var moreComplicated = objData.reduce(function (acc, x) {
  return acc.concat({
    name: x.name,
    info: {
      level: x.level,
      guild: x.guild
    }
  })
}, [])

console.log('More Complicated Object:', moreComplicated)
// Output:
// [
//   {
//     name: 'Leo',
//     info: {
//       level: 5,
//       guild: 'None'
//     }
//   },
//   {
//     name: 'Arthur',
//     info: {
//       level: 23,
//       guild: 'The Round Table'
//     }
//   },
//   {
//     name: 'Grady',
//     info: {
//       level: 55,
//       guild: 'Grader Raiders'
//     }
//   }
// ]

var stringData = 'test-thing'

var results = stringData.split('-').reduce(function (acc, x) {
  // This just makes the first letter capitalized
  var capital = x.charAt(0).toUpperCase() + x.slice(1)

  // Combine our string back together
  return acc + ' ' + capital
}, '')

console.log('String Results', results) // => 'Test Thing'
