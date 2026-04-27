import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export const generateAccessToken = (payload) => {
    return jwt.sign(payload, env.jwt.secret, {
        expiresIn: "1hr"
    });
};
export const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, env.jwt.refreshSecret, { expiresIn: "7d" });
};
//# sourceMappingURL=jwt.js.map