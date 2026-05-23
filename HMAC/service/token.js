import { verify } from "jsonwebtoken";
import { serversConfigDetails } from "../config/index.js";

const verifyOptions = {
  algorithms: ["HS256"],
};

export function verifyToken(token) {
  let decodedToken = null;
  try {
    decodedToken = verify(
      token,
      serversConfigDetails.tokenSecret,
      verifyOptions,
    );
  } catch (err) {
    console.log(err);
  }
  return decodedToken;
}
