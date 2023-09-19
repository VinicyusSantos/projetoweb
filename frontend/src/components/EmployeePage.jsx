import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import hammerLogo from '../assets/hammer.svg';
import '../styles/EmployeePage.css';

function EmployeePage() {


  useEffect(() => {
    // Aqui vai ficar a chamadas do API do backend para obter os dados.
    // Atualizar tambem os estados 'works', 'employees' e 'orders' com os dados recebidos do backend.
  }, []);

  return (
    <div>
      <div className="app-containerr">
        <a href="/" rel="noopener noreferrer">
          <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
        </a>
        <h1 className="centered-h11">Página de Funcionário</h1>
      </div>
      <div className="containerrr">
        <button className="obras">Obras</button>
        <button className="solic">Solicitações de funcionários</button>
        </div>
    </div>
  );
}

export default EmployeePage;
