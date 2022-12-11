import { Router } from "express";
import { AddTodo, getAllTodo } from "../controllers/Todo.controllers.js";

export const TodoRouter = Router();

TodoRouter.get('/:User_id',getAllTodo)
TodoRouter.post('/',AddTodo)
TodoRouter.delete('/:id',)
TodoRouter.patch('/:id',AddTodo)