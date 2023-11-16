# About

This repo was created to help me better understand the how and why of an API gateway.

The `foo` and `bar` directories spin up http servers that handle root path requests and simply respond with some text.

The `gateway` directory spins up a third server instance that logs all incoming requests, implements basic http authentication, and proxies requests to the appropriate service.

## Resources

The following were used a reference to help me understand the concepts and implementation of an API gateway.

- [api gateway - ngix](https://www.nginx.com/learn/api-gateway/#:~:text=An%20API%20gateway%20is%20a%20data%2Dplane%20entry%20point%20for,%2C%20routing%2C%20and%20load%20balancing.)

- [gateway vs reverse proxy](https://www.baeldung.com/cs/api-gateway-vs-reverse-proxy)

- [build gateway in node - snyk](https://snyk.io/blog/how-to-build-secure-api-gateway-node-js/)
