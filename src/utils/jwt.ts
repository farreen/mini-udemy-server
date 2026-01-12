import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/auth.types.js";
import { env } from "../config/env.js";

export const generateAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, env.jwt.secret, {
    expiresIn: "15m"
  });
};

export const generateRefreshToken = (userId: number) => {
  return jwt.sign(
    { id: userId },
    env.jwt.refreshSecret,
    { expiresIn: "7d" }
  );
};
