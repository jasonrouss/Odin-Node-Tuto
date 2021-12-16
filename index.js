const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile("index.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else if (req.url === "/about.html") {
    fs.readFile("about.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else if (req.url === "/contact-me.html") {
    fs.readFile("contact-me.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else {
    fs.readFile("404.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  }
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});
