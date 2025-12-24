import * as CourseModel from "../models/course.model";
export const createCourse = async (
    title: string,
    description: string,
    adminId: number
  ) => {
    await CourseModel.createCourse(title, description, adminId);
  };