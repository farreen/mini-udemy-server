import { db } from "../config/db.js";
export const createUser = async (name, email, password, role) => {
    await db.execute("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [name, email, password, role]);
};
export const findUserByEmail = async (email) => {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
};
export const findUserById = async (id) => {
    const [rows] = await db.execute("SELECT id, name, email, role, created_at FROM users WHERE id = ?", [id]);
    return rows[0];
};
//# sourceMappingURL=user.model.js.map