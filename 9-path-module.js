const path = require('path')
console.log(path.sep) // returns /

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) // returns /content/subfolder/text.txt

const base = path.basename(filePath)
console.log(base) // returns test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
// returns /Users/melissatrevis/node-projects/node-express-tutorial/content/subfolder/test.txt
