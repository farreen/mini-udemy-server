import { Router } from "express";
import * as CourseController from '../controllers/course.controller'
import { allowRoles, protect } from "../middleware/auth.middleware";
const courseRouter = Router();

// Public routes
courseRouter.get("/", CourseController.getAllCourses);
courseRouter.get("/:id", CourseController.getCourseById);

// Protected admin routes
courseRouter.post("/", protect, allowRoles("admin"), CourseController.createCourse);
courseRouter.put("/:id", protect, allowRoles("admin"), CourseController.updateCourse);
courseRouter.delete("/:id", protect, allowRoles("admin"), CourseController.deleteCourse);

export default courseRouter;
