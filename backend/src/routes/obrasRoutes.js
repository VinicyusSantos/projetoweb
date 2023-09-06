import express from 'express';
import { obrascontroller } from '../controllers/obrasController.js';
import { obrasadd } from '../controllers/obrasController.js';

export const obrasRoutes = express.Router()

obrasRoutes.post('/obras', obrascontroller.post);
obrasRoutes.post('/adicionar', obrasadd.post)

