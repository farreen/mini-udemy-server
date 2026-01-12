import { Request, Response } from "express";
import * as AuthService from "../services/auth.service.js";

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  console.log("323232323", req.body);
  if (!(name && email && password && role)) {
    res.status(400).json({ message: "All fields are compulsory" });
  } else {
    await AuthService.register(name, email, password, role);
    res.status(201).json({ message: "User registered" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { accessToken, refreshToken } = await AuthService.login(
    email,
    password
  );

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "strict",
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
  });

  res.json({ message: "Login successful" });
};

export const getMe = async (req: any, res: Response) => {
  const user = await AuthService.getCurrentUser(req.user.id);
  res.json(user);
};


