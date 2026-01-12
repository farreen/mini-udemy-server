"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveRefreshToken = void 0;
const db_1 = require("../config/db");
const saveRefreshToken = async (userId, token, expiresAt) => {
    await db_1.db.execute("INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)", [userId, token, expiresAt]);
};
exports.saveRefreshToken = saveRefreshToken;
//# sourceMappingURL=refreshToken.model.js.map