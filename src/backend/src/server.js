import express from 'express';
import {routes} from './routes/routes.js'


const app = express();

app.use(express.json())
app.use(routes)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
