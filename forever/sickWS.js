var util = require('util'),
    http = require('http');

var ws = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu.')
  res.end();
})
ws.listen(8000);

/* server started */  
util.puts('> hello world running on port 8000');

setInterval(function () {
  util.puts('Throwing error now.');
  throw new Error('User generated fault.');
}, 1000);