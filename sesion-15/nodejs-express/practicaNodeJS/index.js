const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
const name = "Maribel Torres Guevara";

const handleServer = function (request, response) {
  response.statusCode = 200;
  response.setHeader("Content-type", "text/plain");
  response.end(`Mi nombre es: ${name}`);
};

const server = http.createServer(handleServer);

server.listen(port, hostname, function () {
  console.log(`Mi nombre es: ${name}`);
});
