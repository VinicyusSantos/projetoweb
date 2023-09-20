import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '/src/styles/solicitacoesEmployee.css';
import hammerLogo from '../../assets/hammer.svg';

export function Solicicacoes() {
  const [nome, setNome] = useState('');
  const [solici, setSolici] = useState('');
  const [descricao, setDescricao] = useState(''); 

  const handleSubmit = async (evento) => { 
    evento.preventDefault();
    console.log("clicou");
    console.log(solici);
    console.log(descricao)
    console.log (nome)
  };

  return (
    <div>
      <div className="app-container">
        <h1 className="cabecalho">Digite abaixo sua solicitação</h1>
      </div>
      <div className="solicitacoes">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título da solicitação:"
            onChange={(evento) => setSolici(evento.target.value)} 
          />
          <button type="submit" className="submit">Confirmar</button>
        </form>
      </div>
      <div className='descricao'>
        <form onSubmit={handleSubmit}>
          <input
            type="text" 
            placeholder="Descrição da solicitação:"
            onChange={(evento) => setDescricao(evento.target.value)} 
          />
        </form>
      </div>
      <div className='nome'>
        <form onSubmit={handleSubmit}>
          <input
            type="text" 
            placeholder="Nome do funcionário:"
            onChange={(evento) => setNome(evento.target.value)} 
          />
        </form>
      </div>
    </div>
  );
}

export default Solicicacoes;
