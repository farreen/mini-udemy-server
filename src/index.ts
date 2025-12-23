import express from "express";
import cors from "cors";
import { connection } from "./config/db";
import authRouter from "./routes/auth.route";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);

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
