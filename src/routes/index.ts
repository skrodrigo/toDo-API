import { Router } from 'express'

import { TasksController } from '../controllers/tasks-controller'
import { TagsController } from '../controllers/tags-controller'


const routes = Router()

const tasksController = new TasksController()  
const tagsController = new TagsController() 


routes.get('/tasks', tasksController.list)
routes.get('/tasks/:id', tasksController.detail)
routes.post('/tasks', tasksController.create)
routes.put('/tasks/:id', tasksController.update)
routes.delete('/tasks/:id', tasksController.delete)

routes.get('/tasks', tagsController.list)
routes.post('/tasks', tagsController.create)
routes.put('/tasks/:id', tagsController.update)
routes.delete('/tasks/:id', tagsController.delete)

export { routes }