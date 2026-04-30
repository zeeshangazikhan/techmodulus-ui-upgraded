const fs = require("fs");
const path = require("path");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

process.env.NODE_ENV = process.env.NODE_ENV || "production";

const standaloneServer = path.join(__dirname, ".next", "standalone", "server.js");

if (fs.existsSync(standaloneServer)) {
  require(standaloneServer);
} else {
  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST || "0.0.0.0";
  const app = next({
    dev: false,
    dir: __dirname,
    hostname: host,
    port,
  });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, host, () => {
      console.log(`Server running on http://${host}:${port}`);
    });
  });
}
