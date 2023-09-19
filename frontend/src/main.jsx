import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Login from "./routes/Login.jsx"
import Logado from './routes/Logado.jsx';
import Info from './routes/informacao.jsx';
import ObraFuncionario from './components/ObraFuncionario.jsx';

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
  },
  {
    path: "obras",
    element: <ObraFuncionario />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
