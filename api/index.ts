import app from "../src/index.js";
import { connection } from "../src/config/db.js";

let isConnected = false;

export default async function handler(req: any, res: any) {
  try {
    if (!isConnected) {
      await connection();
      isConnected = true;
      console.log("DB connected");
    }

    return app(req, res);
  } catch (err) {
    console.error("Vercel handler error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
