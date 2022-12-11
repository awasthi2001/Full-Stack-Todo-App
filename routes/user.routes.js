import { Router } from "express";
import { getUser } from "../controllers/Users.controllers.js";

export const UserRouter = Router();

UserRouter.get('/:token',getUser)

//jwt ka structure 
//