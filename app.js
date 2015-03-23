var beefy = require('beefy');
var http = require('http');

var handler = beefy({
  entries: ['main2.js'],
  cwd: __dirname,
  live: true,
  bundlerFlags: ['-t', 'coffeeify', '--extension', '.coffee']
});

http.createServer(handler).listen(8124);
