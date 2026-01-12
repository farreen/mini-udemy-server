import * as EnrollmentModel from "../models/enrollment.model.js";
export const enrollInCourse = async (studentId, courseId) => {
    await EnrollmentModel.createEnrollment(studentId, courseId);
};
export const getStudentEnrollments = async (studentId) => {
    return await EnrollmentModel.getEnrollmentsByStudent(studentId);
};
export const getCourseEnrollments = async (courseId) => {
    return await EnrollmentModel.getEnrollmentsByCourse(courseId);
};
export const checkEnrollmentStatus = async (studentId, courseId) => {
    return await EnrollmentModel.checkEnrollment(studentId, courseId);
};
export const unenrollFromCourse = async (studentId, courseId) => {
    await EnrollmentModel.removeEnrollment(studentId, courseId);
};
//# sourceMappingURL=enrollment.service.js.map