const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello')
  } else if (req.url === '/about') {
    res.end('Here is the about page')
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>The page you are trying to reach doesn't exist.</p>
  <a href='/'>Home</a>
  `)
  }
})
server.listen(5000)
