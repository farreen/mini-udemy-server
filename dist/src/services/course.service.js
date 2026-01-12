import * as CourseModel from "../models/course.model.js";
export const createCourse = async (title, description, adminId) => {
    await CourseModel.createCourse(title, description, adminId);
};
export const getAllCourses = async () => {
    return await CourseModel.getAllCourses();
};
export const getCourseById = async (id) => {
    const course = await CourseModel.getCourseById(id);
    if (!course) {
        throw new Error("Course not found");
    }
    return course;
};
export const updateCourse = async (id, title, description, adminId) => {
    await CourseModel.updateCourse(id, title, description, adminId);
};
export const deleteCourse = async (id, adminId) => {
    await CourseModel.deleteCourse(id, adminId);
};
