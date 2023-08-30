import express from 'express'
import {routercontroller} from '../controllers/routesController.js'

export const routes = express.Router()

routes.get('/', routercontroller.get)