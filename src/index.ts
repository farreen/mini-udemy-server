import express from 'express';
import { connection } from "./config/db";
const app = express();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
      await connection();
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  };
  
  startServer();