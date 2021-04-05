// CommonJS - every file is a module by default
// Modules - encapsulated code (only share minimum needed)

const names = require('./4-names')
// Can also destructure:
// const { lisa, jen } = require('./4-names')
// sayHi(lisa)
// sayHi(jen)

const sayHi = require('./5-utils')
// Can also rename imports
// const greet = require('./5-utils')

// greet(names.lisa)
// greet(names.jen)
// greet('Mom')
// greet('Sheila')

sayHi(names.lisa)
sayHi(names.jen)
sayHi('Mom')
sayHi('Sheila')

const data = require('./6-alternative-flavor')
console.log(data)

// If a function is invoked in a module, requiring the module will run the code
require('./7-mind-grenade')
