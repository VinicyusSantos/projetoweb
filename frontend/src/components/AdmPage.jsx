import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import hammerLogo from '../assets/hammer.svg';
import '../styles/AdmPage.css';
import perfilLogo from '../assets/perfilLogo.svg';

function AdminPage() {


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
        <button className="obras">Obras</button>
        <button className="indicad">Indicadores gráficos</button>
        <button className="func">Funcionários</button>
        <button className="solic">Solicitações de funcionários</button>
        <button className="decis">Decisões</button>
        </div>
        <img src={perfilLogo} className="logo perfil" alt="Perfil logo" />
    </div>
  );
}

export default AdminPage;
