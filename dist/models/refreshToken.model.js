import { db } from "../config/db.js";
export const saveRefreshToken = async (userId, token, expiresAt) => {
    await db.execute("INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)", [userId, token, expiresAt]);
};
//# sourceMappingURL=refreshToken.model.js.map