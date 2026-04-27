import bcrypt from "bcryptjs";
import { saveRefreshToken } from "../models/refreshToken.model.js";
import { createUser, findUserByEmail, findUserById } from "../models/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
export const register = async (name, email, password, role) => {
    const hashed = await bcrypt.hash(password, 10);
    await createUser(name, email, hashed, role);
};
export const login = async (email, password) => {
    try {
        const user = await findUserByEmail(email);
        if (!user) {
            throw new Error("Invalid credentials");
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new Error("Invalid credentials");
        }
        const accessToken = generateAccessToken({
            id: user.id,
            role: user.role,
        });
        const refreshToken = generateRefreshToken(user.id);
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);
        await saveRefreshToken(user.id, refreshToken, expiresAt);
        return { accessToken, refreshToken };
    }
    catch (error) {
        // Log for debugging (important)
        console.error("Login service error:", error.message);
        // Re-throw so controller can handle it
        throw new Error(error.message || "Login failed");
    }
};
export const getCurrentUser = async (userId) => {
    const user = await findUserById(userId);
    if (!user)
        throw new Error("User not found");
    return user;
};
//# sourceMappingURL=auth.service.js.map