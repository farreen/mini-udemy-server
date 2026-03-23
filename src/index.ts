import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import courseRouter from "./routes/course.route.js";
import enrollmentRouter from "./routes/enrollment.route.js";
import { connection } from "./config/db.js";
import serverlessHttp from "serverless-http";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/course", courseRouter);
app.use("/api/enrollment", enrollmentRouter);

app.get("/", (_req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Mini Udemy backend is running...wohoo",
  });
});

let isConnected = false;
async function connectToDB() {
  if (isConnected) return;
  await connection();
  isConnected = true;
  console.log("DB connected");
}

app.use(async (req, res, next) => {
  if (!isConnected) {
    try {
      await connectToDB();
    } catch (err) {
      console.error("DB connection failed:", err);
      return res.status(500).json({ message: "Database connection failed" });
    }
  }
  next();
});

/**
 * listen locally ...
 */
if (process.env.NODE_ENV !== "production") {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}

// Vercel (serverless) entry: wrap Express app in a request handler
export default serverlessHttp(app);
