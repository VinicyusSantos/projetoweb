import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Login from "./components/Login.jsx"
import Employee from "./components/EmployeePage.jsx";
import AdminPage from "./components/AdmPage.jsx"
import Logado from './components/Logado.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "logado",
    element: <Logado />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
