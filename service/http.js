const http = require('http')
// const url = require('url')

http.createServer((req, res) => {
  let url = 'https://' + req.headers.host + req.url
  console.log(url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('hello world!')
  res.end()
}).listen(3000, '127.0.0.1', () => {
  console.log('server running at http://127.0.0.1:3000')
})
