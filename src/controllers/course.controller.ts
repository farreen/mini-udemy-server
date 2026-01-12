import { Request, Response } from "express";
import * as CourseService from "../services/course.service.js";

export const createCourse = async (req: any, res: Response) => {
  const { title, description } = req.body;
  await CourseService.createCourse(title, description, req.user.id);
  res.status(201).json({ message: "Course created" });
};

export const getAllCourses = async (req: Request, res: Response) => {
  const courses = await CourseService.getAllCourses();
  res.json(courses);
};

export const getCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const course = await CourseService.getCourseById(Number(id));
  res.json(course);
};

export const updateCourse = async (req: any, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  await CourseService.updateCourse(Number(id), title, description, req.user.id);
  res.json({ message: "Course updated" });
};

export const deleteCourse = async (req: any, res: Response) => {
  const { id } = req.params;
  await CourseService.deleteCourse(Number(id), req.user.id);
  res.json({ message: "Course deleted" });
};
  