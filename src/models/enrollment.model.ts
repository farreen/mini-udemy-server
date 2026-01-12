import { db } from "../config/db.js";

export const createEnrollment = async (studentId: number, courseId: number) => {
  // Check if already enrolled
  const [existing] = await db.execute<any[]>(
    "SELECT * FROM enrollments WHERE student_id = ? AND course_id = ?",
    [studentId, courseId]
  );

  if (existing.length > 0) {
    throw new Error("Already enrolled in this course");
  }

  await db.execute(
    "INSERT INTO enrollments (student_id, course_id) VALUES (?, ?)",
    [studentId, courseId]
  );
};

export const getEnrollmentsByStudent = async (studentId: number) => {
  const [rows] = await db.execute<any[]>(
    `SELECT e.*, c.title, c.description, c.created_at as course_created_at,
            u.name as creator_name
     FROM enrollments e
     JOIN courses c ON e.course_id = c.id
     LEFT JOIN users u ON c.created_by = u.id
     WHERE e.student_id = ?
     ORDER BY e.enrolled_at DESC`,
    [studentId]
  );
  return rows;
};

export const getEnrollmentsByCourse = async (courseId: number) => {
  const [rows] = await db.execute<any[]>(
    `SELECT e.*, u.name as student_name, u.email as student_email
     FROM enrollments e
     JOIN users u ON e.student_id = u.id
     WHERE e.course_id = ?
     ORDER BY e.enrolled_at DESC`,
    [courseId]
  );
  return rows;
};

export const checkEnrollment = async (studentId: number, courseId: number) => {
  const [rows] = await db.execute<any[]>(
    "SELECT * FROM enrollments WHERE student_id = ? AND course_id = ?",
    [studentId, courseId]
  );
  return rows.length > 0;
};

export const removeEnrollment = async (studentId: number, courseId: number) => {
  await db.execute(
    "DELETE FROM enrollments WHERE student_id = ? AND course_id = ?",
    [studentId, courseId]
  );
};

