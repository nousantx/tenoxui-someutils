const someutils = require('./dist/index.umd.js')

console.log(someutils.merge({ a: 1 }, { b: 2 }))
console.log(someutils.createColors({ red: ['#ff0000', '#ff4d4d'] }, 'text', ['red']))
