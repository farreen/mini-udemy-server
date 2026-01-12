import * as EnrollmentService from "../services/enrollment.service.js";
export const enrollInCourse = async (req, res) => {
    const { courseId } = req.params;
    await EnrollmentService.enrollInCourse(req.user.id, Number(courseId));
    res.json({ message: "Successfully enrolled in course" });
};
export const getMyEnrollments = async (req, res) => {
    const enrollments = await EnrollmentService.getStudentEnrollments(req.user.id);
    res.json(enrollments);
};
export const getCourseEnrollments = async (req, res) => {
    const { courseId } = req.params;
    const enrollments = await EnrollmentService.getCourseEnrollments(Number(courseId));
    res.json(enrollments);
};
export const checkEnrollment = async (req, res) => {
    const { courseId } = req.params;
    const isEnrolled = await EnrollmentService.checkEnrollmentStatus(req.user.id, Number(courseId));
    res.json({ enrolled: isEnrolled });
};
export const unenrollFromCourse = async (req, res) => {
    const { courseId } = req.params;
    await EnrollmentService.unenrollFromCourse(req.user.id, Number(courseId));
    res.json({ message: "Successfully unenrolled from course" });
};
