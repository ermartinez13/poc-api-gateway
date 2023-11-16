/**
 * determine if request has valid credentials using http basic auth scheme
 * @param {string | undefined} authHeader - Authorization header from client request
 * @returns {boolean}
 */

export function isAuthenticated(authHeader) {
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  /* user id and password are sent over as text that is base64 encoded */
  const encodedCredentials = authHeader.split(" ")[1];
  /* decode base64 string by first converting to sequence of bytes that then gets converted to utf-8 string */
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
