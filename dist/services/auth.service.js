"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const refreshToken_model_1 = require("../models/refreshToken.model");
const user_model_1 = require("../models/user.model");
const jwt_1 = require("../utils/jwt");
const register = async (name, email, password, role) => {
    const hashed = await bcryptjs_1.default.hash(password, 10);
    await (0, user_model_1.createUser)(name, email, hashed, role);
};
exports.register = register;
const login = async (email, password) => {
    const user = await (0, user_model_1.findUserByEmail)(email);
    if (!user)
        throw new Error("Invalid credentials");
    const match = await bcryptjs_1.default.compare(password, user.password);
    if (!match)
        throw new Error("Invalid credentials");
    const accessToken = (0, jwt_1.generateAccessToken)({
        id: user.id,
        role: user.role,
    });
    const refreshToken = (0, jwt_1.generateRefreshToken)(user.id);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    await (0, refreshToken_model_1.saveRefreshToken)(user.id, refreshToken, expiresAt);
    return { accessToken, refreshToken };
};
exports.login = login;
const getCurrentUser = async (userId) => {
    const user = await (0, user_model_1.findUserById)(userId);
    if (!user)
        throw new Error("User not found");
    return user;
};
exports.getCurrentUser = getCurrentUser;
//# sourceMappingURL=auth.service.js.map