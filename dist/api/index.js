import app from "../src/index.js";
import { connection } from "../src/config/db.js";
let isConnected = false;
export default async function handler(req, res) {
    if (!isConnected) {
        try {
            await connection(); // connect to remote DB
            isConnected = true;
        }
        catch (err) {
            console.error("DB connection failed:", err);
            return res.status(500).json({ error: "Database connection failed" });
        }
    }
    return app(req, res); // pass request to Express app
}
