import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Login from "./routes/Login.jsx"
import Logado from './routes/Logado.jsx';
import Info from './routes/informacao.jsx';

//rotas temporarias adm

import Decisoes from './components/InfoAdm/Decisoes.jsx'
import Funcionarios from './components/InfoAdm/Funcionarios.jsx'
import Indicadores from './components/InfoAdm/Indicadores.jsx'
import ObrasAdm from './components/InfoAdm/ObrasAdm.jsx'
import Solicitacoes from './components/InfoAdm/Solicitacoes.jsx'

//rotas temporarias employee

import Obrasfuncionario from './components/InfoEmployee/ObrasFuncionario.jsx'
import Solicicacoes from './components/InfoEmployee/Solicicacoes.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "logado",
    element: <Logado />,
  },
  {
    path: "info",
    element: <Info />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
