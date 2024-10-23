// PURPOSE: server authentication middleware

// REQs
import { NextFunction, Request, Response } from "express";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

// CONSTs
const secret = "secret_travel_buddy"; // secret key
const expiration = "2h"; // 2 hours

// error message for authentication
export const AuthenticationError = new GraphQLError(
  "Unable to authenticate user...",
  {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }
);

// auth middleware function
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // token sending in req query or headers
  let token: string = (req.query.token || req.headers.authorization) as string;

  // if token in headers, adjust token value
  if (req.headers.authorization) {
    token = token.split(" ").pop()?.trim() || "";
  }

  // if no token, return message
  if (!token) {
    return res.status(400).json({ message: "You have no token!" });
  }

  // verify token
  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Invalid token");
    return res.status(400).json({ message: "invalid token!" });
  }

  // next middleware
  next();
}
// sign token function
export function signToken({ username, email, _id }) {
  const payload = { username, email, _id };

  // return jwt token with payload, secret, and expiration
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}
