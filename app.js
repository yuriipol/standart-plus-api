const http = require("http");

http
  .createServer(function (request, response) {
    console.log(request.url);
    if (request.url === "/") {
      response.end("Main");
    } else if (request.url === "/category") {
      response.end("category");
    }
  })
  .listen(3000);
