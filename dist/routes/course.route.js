import { Router } from "express";
import * as CourseController from '../controllers/course.controller.js';
import { allowRoles, protect } from "../middleware/auth.middleware.js";
const courseRouter = Router();
// Public routes
courseRouter.get("/", CourseController.getAllCourses);
courseRouter.get("/:id", CourseController.getCourseById);
// Protected admin routes
courseRouter.post("/", protect, allowRoles("admin"), CourseController.createCourse);
courseRouter.put("/:id", protect, allowRoles("admin"), CourseController.updateCourse);
courseRouter.delete("/:id", protect, allowRoles("admin"), CourseController.deleteCourse);
export default courseRouter;
//# sourceMappingURL=course.route.js.map