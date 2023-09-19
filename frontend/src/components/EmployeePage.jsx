import React, { useState, useEffect } from 'react';
import hammerLogo from '../assets/hammer.svg';
import '../styles/EmployeePage.css';
import { useNavigate } from 'react-router-dom';

function EmployeePage() {

  const navigate = useNavigate();

  const entrarobrafunc = async (Evento) => {
    Evento.preventDefault();
    const i = 5;
    localStorage.setItem('i', i)
    navigate('/info')
  }

  const entrarsolicitfunc = async (Evento) => {
    Evento.preventDefault();
    const i = 6;
    localStorage.setItem('i', i)
    navigate('/info')
  }


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
        <h1 className="centered-h1">FUNCIONÁRIO</h1>
      </div>
      <div className="containerrr">
        <button onClick={(Evento) => entrarobrafunc(Evento)} className="obras">Obras</button>
        <button onClick={(Evento) => entrarsolicitfunc(Evento)} className="solic">Solicitações de funcionários</button>
        </div>
    </div>
  );
}

export default EmployeePage;