import httpProxy from "http-proxy";
import http from "node:http";

import { isAuthenticated } from "./auth.js";
import { logger } from "./logging.js";

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  logger.info(`HTTP ${req.method} ${req.url}`);
  const _isAuthenticated = isAuthenticated(req.headers.authorization);
  if (!_isAuthenticated) {
    res.writeHead(401, {
      "WWW-Authenticate": "Basic realm=Services gateway",
      "Content-Type": "text/plain",
    });
    res.end("401 Unauthorized");
    return;
  }

  if (req.url.startsWith("/foo")) {
    req.url = req.url.replace("/foo", "");
    proxy.web(req, res, {
      target: "http://localhost:3002",
    });
  } else if (req.url.startsWith("/bar")) {
    req.url = req.url.replace("/bar", "");
    proxy.web(req, res, {
      target: "http://localhost:3001",
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Gateway service running on port ${port}`);
});
