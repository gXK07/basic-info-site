const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const page = `${url.substring(1)}.html`;
    fs.readFile(page, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }  
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);