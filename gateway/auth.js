/**
 * determine if request has valid credentials using http basic auth scheme
 * @param {string | undefined} authHeader - Authorization header from client request
 * @returns {boolean}
 */

export function isAuthenticated(authHeader) {
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  const encodedCredentials = authHeader.split(" ")[1];
  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString(
    "utf-8"
  );
  const [username, password] = decodedCredentials.split(":");
  const expectedUsername = "foo";
  const expectedPassword = "bar";

  if (username !== expectedUsername || password !== expectedPassword) {
    return false;
  }

  return true;
}
