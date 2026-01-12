"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEnrollment = exports.checkEnrollment = exports.getEnrollmentsByCourse = exports.getEnrollmentsByStudent = exports.createEnrollment = void 0;
const db_1 = require("../config/db");
const createEnrollment = async (studentId, courseId) => {
    // Check if already enrolled
    const [existing] = await db_1.db.execute("SELECT * FROM enrollments WHERE student_id = ? AND course_id = ?", [studentId, courseId]);
    if (existing.length > 0) {
        throw new Error("Already enrolled in this course");
    }
    await db_1.db.execute("INSERT INTO enrollments (student_id, course_id) VALUES (?, ?)", [studentId, courseId]);
};
exports.createEnrollment = createEnrollment;
const getEnrollmentsByStudent = async (studentId) => {
    const [rows] = await db_1.db.execute(`SELECT e.*, c.title, c.description, c.created_at as course_created_at,
            u.name as creator_name
     FROM enrollments e
     JOIN courses c ON e.course_id = c.id
     LEFT JOIN users u ON c.created_by = u.id
     WHERE e.student_id = ?
     ORDER BY e.enrolled_at DESC`, [studentId]);
    return rows;
};
exports.getEnrollmentsByStudent = getEnrollmentsByStudent;
const getEnrollmentsByCourse = async (courseId) => {
    const [rows] = await db_1.db.execute(`SELECT e.*, u.name as student_name, u.email as student_email
     FROM enrollments e
     JOIN users u ON e.student_id = u.id
     WHERE e.course_id = ?
     ORDER BY e.enrolled_at DESC`, [courseId]);
    return rows;
};
exports.getEnrollmentsByCourse = getEnrollmentsByCourse;
const checkEnrollment = async (studentId, courseId) => {
    const [rows] = await db_1.db.execute("SELECT * FROM enrollments WHERE student_id = ? AND course_id = ?", [studentId, courseId]);
    return rows.length > 0;
};
exports.checkEnrollment = checkEnrollment;
const removeEnrollment = async (studentId, courseId) => {
    await db_1.db.execute("DELETE FROM enrollments WHERE student_id = ? AND course_id = ?", [studentId, courseId]);
};
exports.removeEnrollment = removeEnrollment;
//# sourceMappingURL=enrollment.model.js.map