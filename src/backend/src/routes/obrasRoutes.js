import express from 'express';
import { obrascontroller } from '../controllers/obrasController.js';

export const obrasRoutes = express.Router()



//visualização de obras especificas
obrasRoutes.post('/obras', obrascontroller.post);

