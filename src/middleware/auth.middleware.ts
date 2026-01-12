import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const protect = (req: any, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, env.jwt.secret) as {
      id: number;
      role: string;
    };

    req.user = decoded;

    next();
  } catch {
    res.status(401).json({ message: "Token invalid or expired" });
  }
};

export const allowRoles = (...roles: ("admin" | "student")[]) => {
  return (req: any, res: any, next: any) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};
