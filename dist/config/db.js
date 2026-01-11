"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
exports.connection = connection;
const promise_1 = __importDefault(require("mysql2/promise"));
const env_1 = require("./env");
exports.db = promise_1.default.createPool({
    host: env_1.env.db.host,
    user: env_1.env.db.user,
    password: env_1.env.db.password,
    database: env_1.env.db.name,
    waitForConnections: true,
    connectionLimit: 10,
});
async function connection() {
    try {
        const connection = await exports.db.getConnection();
        console.log("Connected to MySQL");
        connection.release();
    }
    catch (err) {
        console.error("DB connection failed:", err);
        process.exit(1); // stop app if DB fails
    }
}
//# sourceMappingURL=db.js.map