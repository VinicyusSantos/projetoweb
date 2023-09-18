import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import hammerLogo from '../assets/hammer.svg';
import '../styles/AdmPage.css';

function AdminPage() {
  const [works, setWorks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Aqui vai ficar a chamadas do API do backend para obter os dados.
    // Atualizar tambem os estados 'works', 'employees' e 'orders' com os dados recebidos do backend.
  }, []);

  return (
    <div>
      <div className="app-container">
        <a href="/" rel="noopener noreferrer">
          <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
        </a>
        <h1 className="centered-h1">Página Administrativa</h1>
      </div>
      <div className="containerr">
        <div className="obras">Obras</div>
        <div className="config">Configurações do site</div>
        <div className="indicad">Indicadores gráficos</div>
        <div className="func">Funcionários</div>
        <div className="solic">Solicitações de funcionários</div>
        <div className="decis">Decisões</div>
        </div>
    </div>
  );
}

export default AdminPage;
