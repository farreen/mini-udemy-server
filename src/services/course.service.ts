import * as CourseModel from "../models/course.model";

export const createCourse = async (
  title: string,
  description: string,
  adminId: number
) => {
  await CourseModel.createCourse(title, description, adminId);
};

export const getAllCourses = async () => {
  return await CourseModel.getAllCourses();
};

export const getCourseById = async (id: number) => {
  const course = await CourseModel.getCourseById(id);
  if (!course) {
    throw new Error("Course not found");
  }
  return course;
};

export const updateCourse = async (
  id: number,
  title: string,
  description: string,
  adminId: number
) => {
  await CourseModel.updateCourse(id, title, description, adminId);
};

export const deleteCourse = async (id: number, adminId: number) => {
  await CourseModel.deleteCourse(id, adminId);
};