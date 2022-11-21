import { getUsers } from "./controller/UserController"
import { deleteTask, finishTask, getTask, getTasks, saveTask, updateTask } from "./controller/TasksController"

import { Router, request, response, Request, Response } from 'express'
const routes = Router()

routes.get('/users', getUsers)
routes.get('/tasks', getTasks)
routes.get('/tasks/:id', getTask)
routes.put('/tasks/:id', updateTask)
routes.post('/tasks', saveTask)
routes.delete('/tasks/:id', deleteTask)
routes.patch('/tasks/:id', finishTask)

export default routes