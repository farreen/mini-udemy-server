import { db } from "../config/db";

export const createCourse = async (
    title: string,
    description: string,
    adminId: number
  ) => {
    await db.execute(
      "INSERT INTO courses (title, description, created_by) VALUES (?, ?, ?)",
      [title, description, adminId]
    );
  };