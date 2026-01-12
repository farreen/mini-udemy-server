import mysql from "mysql2/promise";
import { env } from "./env.js";

// For serverless environments, use connection pooling with proper configuration
export const db = mysql.createPool({
  host: env.db.host,
  user: env.db.user,
  password: env.db.password,
  database: env.db.name,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export async function connection() {
  try {
    const connection = await db.getConnection();
    console.log("Connected to MySQL");
    connection.release();
  } catch (err) {
    console.error("DB connection failed:", err);
    // In serverless, don't exit process - let Vercel handle it
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    }
    throw err;
  }
}
