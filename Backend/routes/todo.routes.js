import { Router } from "express";
import { AddTodo, getAllTodo, HandleDelete, HandlePatch } from "../controllers/Todo.controllers.js";

export const TodoRouter = Router();

TodoRouter.get('/:User_id',getAllTodo)
TodoRouter.post('/',AddTodo)
TodoRouter.delete('/:_id',HandleDelete)
TodoRouter.patch('/:_id',HandlePatch)