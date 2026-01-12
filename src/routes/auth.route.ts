import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";
import { protect } from "../middleware/auth.middleware";

const authRouter = Router();
authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.get("/me", protect, AuthController.getMe);

export default authRouter;
