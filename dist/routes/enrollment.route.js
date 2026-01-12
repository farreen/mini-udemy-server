import { Router } from "express";
import * as EnrollmentController from "../controllers/enrollment.controller.js";
import { protect, allowRoles } from "../middleware/auth.middleware.js";
const enrollmentRouter = Router();
// Student routes
enrollmentRouter.post("/course/:courseId", protect, allowRoles("student"), EnrollmentController.enrollInCourse);
enrollmentRouter.get("/my-courses", protect, allowRoles("student"), EnrollmentController.getMyEnrollments);
enrollmentRouter.get("/course/:courseId/check", protect, EnrollmentController.checkEnrollment);
enrollmentRouter.delete("/course/:courseId", protect, allowRoles("student"), EnrollmentController.unenrollFromCourse);
// Admin route to see enrollments for a course
enrollmentRouter.get("/course/:courseId/students", protect, allowRoles("admin"), EnrollmentController.getCourseEnrollments);
export default enrollmentRouter;
//# sourceMappingURL=enrollment.route.js.map