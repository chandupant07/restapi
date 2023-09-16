

let http = require('http')


var server = http.createServer((req, res) => {
  res.write('server create')
  res.end();
})

server.listen(3333)

