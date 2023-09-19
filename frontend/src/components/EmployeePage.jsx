import React, { useState, useEffect } from 'react';
import hammerLogo from '../assets/hammer.svg';
import perfilLogo from '../assets/perfilLogo.svg';
import '../styles/EmployeePage.css';

function EmployeePage() {
  const [works, setWorks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Aqui vai ficar a chamada da API do backend para obter os dados.
    // Atualize também os estados 'works', 'employees' e 'orders' com os dados recebidos do backend.
  }, []);

  return (
    <div>
      <div className="app-container">
        <a href="/" rel="noopener noreferrer">
          <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
        </a>
        <h1 className="centered-h1">Página de Funcionário</h1>
      </div>
      <div className="container">
        <div className="obras">Obras</div>
        <div className="solic">Solicitações de funcionários</div>
      </div>
      <div>
        <img src={perfilLogo} className="logo perfil" alt="Perfil logo" />
      </div>
    </div>
  );
}

export default EmployeePage;