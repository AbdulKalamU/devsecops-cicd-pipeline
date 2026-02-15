const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('DevSecOps Pipeline version 1.0! The pipeline is working!');
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});
