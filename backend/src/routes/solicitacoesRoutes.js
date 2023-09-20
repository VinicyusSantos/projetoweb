import express from 'express';
import { solicitacoescontroller } from '../controllers/solicitacoesController.js';

export const solicitacoesRoutes = express.Router()

solicitacoesRoutes.post('/enviando', solicitacoescontroller.post)
solicitacoesRoutes.get('/visualizar', solicitacoescontroller.get)