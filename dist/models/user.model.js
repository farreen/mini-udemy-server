"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = exports.findUserByEmail = exports.createUser = void 0;
const db_1 = require("../config/db");
const createUser = async (name, email, password, role) => {
    await db_1.db.execute("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [name, email, password, role]);
};
exports.createUser = createUser;
const findUserByEmail = async (email) => {
    const [rows] = await db_1.db.execute("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
};
exports.findUserByEmail = findUserByEmail;
const findUserById = async (id) => {
    const [rows] = await db_1.db.execute("SELECT id, name, email, role, created_at FROM users WHERE id = ?", [id]);
    return rows[0];
};
exports.findUserById = findUserById;
//# sourceMappingURL=user.model.js.map