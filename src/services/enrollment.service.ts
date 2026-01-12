import * as EnrollmentModel from "../models/enrollment.model.js";

export const enrollInCourse = async (studentId: number, courseId: number) => {
  await EnrollmentModel.createEnrollment(studentId, courseId);
};

export const getStudentEnrollments = async (studentId: number) => {
  return await EnrollmentModel.getEnrollmentsByStudent(studentId);
};

export const getCourseEnrollments = async (courseId: number) => {
  return await EnrollmentModel.getEnrollmentsByCourse(courseId);
};

export const checkEnrollmentStatus = async (studentId: number, courseId: number) => {
  return await EnrollmentModel.checkEnrollment(studentId, courseId);
};

export const unenrollFromCourse = async (studentId: number, courseId: number) => {
  await EnrollmentModel.removeEnrollment(studentId, courseId);
};

