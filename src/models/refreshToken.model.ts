import { db } from "../config/db.js";

export const saveRefreshToken = async (
  userId: number,
  token: string,
  expiresAt: Date
) => {
  await db.execute(
    "INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
    [userId, token, expiresAt]
  );
};
