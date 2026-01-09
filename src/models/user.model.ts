import { db } from "../config/db";

export const createUser = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  await db.execute(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, password, role]
  );
};

export const findUserByEmail = async (email: string) => {
  const [rows] = await db.execute<any[]>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  return rows[0];
};

export const findUserById = async (id: number) => {
  const [rows] = await db.execute<any[]>(
    "SELECT id, name, email, role, created_at FROM users WHERE id = ?",
    [id]
  );
  return rows[0];
};
