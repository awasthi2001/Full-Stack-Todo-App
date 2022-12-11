import { Router } from "express";
import { CreateUser, handleLogin } from "../controllers/Auth.controllers.js";

export const AuthRouter = Router();

AuthRouter.post('/register',CreateUser)
AuthRouter.post('/login',handleLogin)