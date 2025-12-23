import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";
const authRouter = Router();
authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);

export default authRouter;
