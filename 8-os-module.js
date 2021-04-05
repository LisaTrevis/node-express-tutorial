const os = require('os')
// Can also destructure if we know what methods/properties we want from the start

// info about current user
const user = os.userInfo()
console.log(user)

// returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds.`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
