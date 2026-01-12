// api/index.ts
import app from "../src/index.js";
import { connection } from "../src/config/db.js";

let isConnected = false;

export default async function handler(req: any, res: any) {
  if (!isConnected) {
    await connection();
    isConnected = true;
  }
  return app(req, res);
}
