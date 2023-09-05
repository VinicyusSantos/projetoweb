import express from 'express'
import { logincontroller } from '../controllers/loginController.js'

export const loginRoutes = express.Router()

loginRoutes.post('/login', logincontroller.post)
