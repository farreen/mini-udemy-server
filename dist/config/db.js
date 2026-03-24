import mysql from "mysql2/promise";
import { env } from "./env.js";
function withTimeout(p, ms, message) {
    return new Promise((resolve, reject) => {
        const t = setTimeout(() => reject(new Error(message)), ms);
        p.then((v) => {
            clearTimeout(t);
            resolve(v);
        }).catch((err) => {
            clearTimeout(t);
            reject(err);
        });
    });
}
// For serverless environments, use connection pooling with fail-fast behavior.
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
        // mysql2 pool option support can vary; enforce a hard cap around getConnection()
        const connection = await withTimeout(db.getConnection(), 3000, "MySQL connection timed out");
        console.log("Connected to MySQL");
        connection.release();
    }
    catch (err) {
        console.error("DB connection failed:", err);
        throw err;
    }
}
//# sourceMappingURL=db.js.map