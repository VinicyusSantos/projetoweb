import React, { useState, useEffect } from 'react';
import hammerLogo from '../assets/hammer.svg';
import '../styles/EmployeePage.css';
function EmployeePage() {


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
<<<<<<< HEAD
      <div className="containerrr">
        <button className="obras">Obras</button>
        <button className="solic">Solicitações de funcionários</button>
        </div>
=======
      <div className="container">
        <div className="obras">Obras</div>
        <div className="solic">Solicitações de funcionários</div>
      </div>
      <div>
        
      </div>
>>>>>>> a7c3634bb0311790d83eb36c301c846b30aefb87
    </div>
  );
}

export default EmployeePage;