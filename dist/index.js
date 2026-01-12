import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import courseRouter from "./routes/course.route.js";
import enrollmentRouter from "./routes/enrollment.route.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));
app.use("/api/auth", authRouter);
app.use("/api/course", courseRouter);
app.use("/api/enrollment", enrollmentRouter);
app.get("/", (_req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Mini Udemy backend is running 🚀"
    });
});
/**
 * ✅ ONLY listen locally
 */
if (process.env.NODE_ENV !== "production") {
    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
}
export default app;
