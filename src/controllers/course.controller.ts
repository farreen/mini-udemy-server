import { Request, Response } from "express";
import * as CourseService from "../services/course.service";
export const createCourse = async (req: any, res: Response) => {
  const { title, description } = req.body;
  await CourseService.createCourse(title, description, req.user.id);
  res.status(201).json({ message: "Course created" });
};
  