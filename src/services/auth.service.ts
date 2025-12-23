import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { saveRefreshToken } from "../models/refreshToken.model";
import { createUser, findUserByEmail } from "../models/user.model";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

export const register = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const hashed = await bcrypt.hash(password, 10);
  await createUser(name, email, hashed, role);
};

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const accessToken = generateAccessToken({
    id: user.id,
    role: user.role,
  });

  const refreshToken = generateRefreshToken(user.id);

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);

  await saveRefreshToken(user.id, refreshToken, expiresAt);

  return { accessToken, refreshToken };
};
