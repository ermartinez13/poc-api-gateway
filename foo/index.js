import { log } from "node:console";
import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const body = {
      data: "foo",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(body));
  } else if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("405 Method not allowed");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not found");
  }
});

const port = 3002;
server.listen(port, () => {
  log(`Foo service running on port ${port}`);
});
