import mysql from "mysql2/promise";
import { env } from "./env";

export const db = mysql.createPool({
  host: env.db.host,
  user: env.db.user,
  password: env.db.password,
  database: env.db.name,
  waitForConnections: true,
  connectionLimit: 10,
});

export async function connection() {
  try {
    const connection = await db.getConnection();
    console.log("Connected to MySQL");
    connection.release();
  } catch (err) {
    console.error("DB connection failed:", err);
    process.exit(1); // stop app if DB fails
  }
}
