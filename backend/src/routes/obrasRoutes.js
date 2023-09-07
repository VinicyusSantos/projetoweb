import express from 'express';
import { obrascontroller } from '../controllers/obrasController.js';
import { obrasadd } from '../controllers/obrasController.js';
import { obrasremove } from '../controllers/obrasController.js';

export const obrasRoutes = express.Router()

obrasRoutes.post('/obras', obrascontroller.post);
obrasRoutes.post('/adicionar', obrasadd.post)
obrasRoutes.delete('/excluir/:id', obrasremove.delete)