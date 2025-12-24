import { Request, Response } from "express";
import * as CourseService from "../services/course.service";
export const createCourse = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  console.log("434343_000",title, description, req)
//   await CourseService.createCourse(title, description, req.user.id);
//   res.status(201).json({ message: "Course created" });
};
