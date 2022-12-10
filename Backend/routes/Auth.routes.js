import { Router } from "express";
import { CreateUser } from "../controllers/Auth.controllers.js";

export const AuthRouter = Router();

AuthRouter.post('/register',CreateUser)