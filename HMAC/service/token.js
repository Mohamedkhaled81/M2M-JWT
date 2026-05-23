import jwt from "jsonwebtoken";
import { serversConfigDetails } from "../config/index.js";

const verifyOptions = {
  algorithms: ["HS256"],
};

const signOptions = {
  algorithm: "HS256",
  expiresIn: "15m",
  issuer: serversConfigDetails.srvrName,
};

/**
 * @param subject : unique id of entity
 */
export function createToken(subject, payload = {}) {
    const options  = { ...signOptions, subject };
    return jwt.sign(payload, serversConfigDetails.tokenSecret, options);
}

export function verifyToken(token) {
  let decodedToken = null;
  try {
    decodedToken = jwt.verify(
      token,
      serversConfigDetails.tokenSecret,
      verifyOptions,
    );
  } catch (err) {
    console.log(err);
  }
  return decodedToken;
}