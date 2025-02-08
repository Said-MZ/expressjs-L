const http = require("http");
const { readFileSync } = require("fs");

//all files

const homePage = readFileSync("./navbar-app/index.html");
const css = readFileSync("./navbar-app/styles.css");
const js = readFileSync("./navbar-app/browser-app.js");
const logo = readFileSync("./navbar-app/logo.svg");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>About page</h1>");
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    res.write(css);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml",
    });
    res.write(logo);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/js",
    });
    res.write(js);
    res.end();
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write(`
      <h1>404</h1>
      <h2>page not found</h2>
      `);
    res.end();
  }
});

server.listen(5001);
