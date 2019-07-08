var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
  //w kursie bya informacja, ze przed ifem ma byc ta linia:
  // response.setHeader('Content-Type', 'text/html; charset=utf-8');
  //zrobilem inaczej ze wzgledu na inne typy plikow w ifach
  // jak dodac charset=utf-8 do :
  // response.writeHead(404, {'Content-Type': 'image/jpeg'});

  if(request.method === 'GET' && request.url === '/url') {
    fs.readFile('./index.html', 'utf-8', function(error, html) {
      if(error) throw error;
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(html);
      response.end();
    });
  } else {
    fs.readFile('./404.jpg', null, function(error, image) {
      if(error) throw error;
      response.writeHead(404, {'Content-Type': 'image/jpeg'});
      response.write(image);
      response.end();
    });
  }
});
server.listen(8000);
