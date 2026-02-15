const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Version 2.0! Watchtower CD was successful!');
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});
