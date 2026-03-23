import mysql from "mysql2/promise";
import { env } from "./env.js";
// For serverless environments, use connection pooling with proper configuration
export const db = mysql.createPool({
    host: env.db.host,
    user: env.db.user,
    password: env.db.password,
    database: env.db.name,
    // Serverless-friendly timeouts: fail fast instead of hanging.
    connectTimeout: 5000,
    waitForConnections: true,
    connectionLimit: 1,
    queueLimit: 0,
    enableKeepAlive: false,
});
export async function connection() {
    try {
        const connection = await db.getConnection();
        console.log("Connected to MySQL");
        connection.release();
    }
    catch (err) {
        console.error("DB connection failed:", err);
        throw err;
    }
}
//# sourceMappingURL=db.js.map