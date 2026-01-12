import { db } from "../config/db.js";
export const createCourse = async (title, description, adminId) => {
    await db.execute("INSERT INTO courses (title, description, created_by) VALUES (?, ?, ?)", [title, description, adminId]);
};
export const getAllCourses = async () => {
    const [rows] = await db.execute(`SELECT c.*, u.name as creator_name 
     FROM courses c 
     LEFT JOIN users u ON c.created_by = u.id 
     ORDER BY c.created_at DESC`);
    return rows;
};
export const getCourseById = async (id) => {
    const [rows] = await db.execute(`SELECT c.*, u.name as creator_name 
     FROM courses c 
     LEFT JOIN users u ON c.created_by = u.id 
     WHERE c.id = ?`, [id]);
    return rows[0];
};
export const updateCourse = async (id, title, description, adminId) => {
    // Verify the course belongs to the admin
    const [rows] = await db.execute("SELECT * FROM courses WHERE id = ? AND created_by = ?", [id, adminId]);
    if (rows.length === 0) {
        throw new Error("Course not found or unauthorized");
    }
    await db.execute("UPDATE courses SET title = ?, description = ? WHERE id = ?", [title, description, id]);
};
export const deleteCourse = async (id, adminId) => {
    // Verify the course belongs to the admin
    const [rows] = await db.execute("SELECT * FROM courses WHERE id = ? AND created_by = ?", [id, adminId]);
    if (rows.length === 0) {
        throw new Error("Course not found or unauthorized");
    }
    await db.execute("DELETE FROM courses WHERE id = ?", [id]);
};
//# sourceMappingURL=course.model.js.map