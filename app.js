const http = require("http");

http
  .createServer(function (request, response) {
    
    console.log(request.url);
    console.log("🚀 ~ file: app.js:5 ~ response:")
    
    if (request.url === "/") {
      response.end("Main");
    } else if (request.url === "/category") {
      response.end("category");
    }
  })
  .listen(3000);
