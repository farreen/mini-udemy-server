import express from "express";
import cors from "cors";
import { connection } from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import courseRouter from './routes/course.route.js';
import enrollmentRouter from './routes/enrollment.route.js';
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
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
const startServer = async () => {
  try {
    await connection();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

// export default app;