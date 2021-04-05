// Synchronus (blocking) methods

console.log('start')
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second)

writeFileSync(
  // creates new file
  './content/result-sync.txt',
  // adds content to new file
  `Here is the result: ${first}, ${second}`,
  // appends content to existing file contents (does not overwrite)
  { flag: 'a' }
)

console.log('done with this task')
console.log('starting next task')
