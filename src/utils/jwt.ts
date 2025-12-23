import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/auth.types.js";

export const generateAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "15m"
  });
};

export const generateRefreshToken = (userId: number) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_REFRESH_SECRET!,
    { expiresIn: "7d" }
  );
};
