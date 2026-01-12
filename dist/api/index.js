// api/index.ts
import app from "../src/index.js";
import { connection } from "../src/config/db.js";
let isConnected = false;
export default async function handler(req, res) {
    if (!isConnected) {
        await connection();
        isConnected = true;
    }
    return app(req, res);
}
