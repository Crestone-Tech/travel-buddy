// PURPOSE: server authentication middleware

// REQs
import { NextFunction, Request, Response } from "express";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";
import { HydratedDocument, ObjectId } from "mongoose";

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

export interface AuthRequest extends Request {
  user?: IUser | HydratedDocument<IUser>;
}

// auth middleware function
export function authMiddleware(
  req: AuthRequest,
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
    const { sub } = jwt.verify(token, secret, { maxAge: expiration });
    User.findById(sub).then((user) => {
      if (user) {
        req.user = user;
      } else {
        throw new Error("Invalid user");
      }
    });
  } catch {
    console.log("Invalid token");
    return res.status(400).json({ message: "invalid token!" });
  }

  // next middleware
  next();
}

export type SignTokenParams = {
  username: string;
  email: string;
  _id: string | ObjectId;
};
// sign token function
export function signToken({ username, email, _id }: SignTokenParams) {
  const payload = { username, email, _id };

  // return jwt token with payload, secret, and expiration
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}
