"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const course_route_1 = __importDefault(require("./routes/course.route"));
const enrollment_route_1 = __importDefault(require("./routes/enrollment.route"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
}));
app.use("/api/auth", auth_route_1.default);
app.use("/api/course", course_route_1.default);
app.use("/api/enrollment", enrollment_route_1.default);
app.get("/", (_req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Mini Udemy backend is running 🚀"
    });
});
const startServer = async () => {
    try {
        await (0, db_1.connection)();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};
startServer();
exports.default = app;
//# sourceMappingURL=index.js.map