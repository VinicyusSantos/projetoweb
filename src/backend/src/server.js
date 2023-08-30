import express from 'express';
import cors from 'cors'
import {obrasRoutes} from './routes/obrasRoutes.js'
import {loginRoutes} from './routes/loginRoutes.js'


const app = express();

app.use(express.json())
app.use(cors())
app.use(obrasRoutes)
app.use(loginRoutes)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
