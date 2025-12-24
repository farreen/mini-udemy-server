import { Router } from "express";
import * as CourseController from '../controllers/course.controller'
import { allowRoles, protect } from "../middleware/auth.middleware";
const courseRouter = Router();

courseRouter.post("/", protect, allowRoles("admin"), CourseController.createCourse);

export default courseRouter;
