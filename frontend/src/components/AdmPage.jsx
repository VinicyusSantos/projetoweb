import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import hammerLogo from '../assets/hammer.svg';
import '../styles/AdmPage.css';
import perfilLogo from '../assets/perfilLogo.png';
import { useNavigate } from 'react-router-dom';
import Info from '../routes/informacao';

function AdminPage() {

  const navigate = useNavigate();

  const entrarobra = async (Evento) => {
    Evento.preventDefault();
    const i = 0;
    localStorage.setItem('i', i)
    navigate('/info')
  }

  const entrarindicad = async (Evento) => {
    Evento.preventDefault();
    const i = 1;
    localStorage.setItem('i', i)
    navigate('/info')
  }

  const entrarfunc = async (Evento) => {
    Evento.preventDefault();
    const i = 2;
    localStorage.setItem('i', i)
    navigate('/info')
  }

  const entrarsolic = async (Evento) => {
    Evento.preventDefault();
    const i = 3;
    localStorage.setItem('i', i)
    navigate('/info')
  }

  const entrardecis = async (Evento) => {
    Evento.preventDefault();
    const i = 4;
    localStorage.setItem('i', i)
    navigate('/info')
  }

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
        <h1 className="centered-h1">ADMINISTRADOR</h1>
      </div>
      <div className="containerr">
        <button onClick={(Evento) => entrarobra(Evento)} className="obras">Obras</button>
        <button onClick={(Evento) => entrarindicad(Evento)} className="indicad">Indicadores gráficos</button>
        <button onClick={(Evento) => entrarfunc(Evento)} className="func">Funcionários</button>
        <button onClick={(Evento) => entrarsolic(Evento)} className="solic">Solicitações de funcionários</button>
        <button onClick={(Evento) => entrardecis(Evento)} className="decis">Decisões</button>
      </div>
      <div className="containerrrr">
        <img src={perfilLogo} className="logoperfil" alt="Perfil logo" />
      </div>
    </div>
  );
}

export default AdminPage;
