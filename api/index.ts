import express from "express";
import cors from "cors";
import { connection } from "../src/config/db";
import authRouter from "../src/routes/auth.route";
import courseRouter from "../src/routes/course.route";
import enrollmentRouter from "../src/routes/enrollment.route";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/course", courseRouter);
app.use("/api/enrollment", enrollmentRouter);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

// Initialize database connection (for serverless, this will be called on cold starts)
let dbConnected = false;
const initDb = async () => {
  if (!dbConnected) {
    try {
      await connection();
      dbConnected = true;
    } catch (error) {
      console.error("DB connection failed:", error);
    }
  }
};

// Initialize DB before handling requests
app.use(async (req, res, next) => {
  await initDb();
  next();
});

// Export for Vercel serverless
export default app;

