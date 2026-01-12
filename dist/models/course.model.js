"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.getCourseById = exports.getAllCourses = exports.createCourse = void 0;
const db_1 = require("../config/db");
const createCourse = async (title, description, adminId) => {
    await db_1.db.execute("INSERT INTO courses (title, description, created_by) VALUES (?, ?, ?)", [title, description, adminId]);
};
exports.createCourse = createCourse;
const getAllCourses = async () => {
    const [rows] = await db_1.db.execute(`SELECT c.*, u.name as creator_name 
     FROM courses c 
     LEFT JOIN users u ON c.created_by = u.id 
     ORDER BY c.created_at DESC`);
    return rows;
};
exports.getAllCourses = getAllCourses;
const getCourseById = async (id) => {
    const [rows] = await db_1.db.execute(`SELECT c.*, u.name as creator_name 
     FROM courses c 
     LEFT JOIN users u ON c.created_by = u.id 
     WHERE c.id = ?`, [id]);
    return rows[0];
};
exports.getCourseById = getCourseById;
const updateCourse = async (id, title, description, adminId) => {
    // Verify the course belongs to the admin
    const [rows] = await db_1.db.execute("SELECT * FROM courses WHERE id = ? AND created_by = ?", [id, adminId]);
    if (rows.length === 0) {
        throw new Error("Course not found or unauthorized");
    }
    await db_1.db.execute("UPDATE courses SET title = ?, description = ? WHERE id = ?", [title, description, id]);
};
exports.updateCourse = updateCourse;
const deleteCourse = async (id, adminId) => {
    // Verify the course belongs to the admin
    const [rows] = await db_1.db.execute("SELECT * FROM courses WHERE id = ? AND created_by = ?", [id, adminId]);
    if (rows.length === 0) {
        throw new Error("Course not found or unauthorized");
    }
    await db_1.db.execute("DELETE FROM courses WHERE id = ?", [id]);
};
exports.deleteCourse = deleteCourse;
//# sourceMappingURL=course.model.js.map