import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '/src/styles/solicitacoesEmployee.css';
import hammerLogo from '../../assets/hammer.svg';

export function Solicicacoes() {
  const [solici, setSolici] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (evento) => {
    evento.preventDefault(); 


    axios.post('/api/enviar', { solici })
      .then((response) => {

        console.log('Enviado com sucesso:', response.data);
      })
      .catch((error) => {

        console.error('Erro ao enviar:', error);
      });
  };

  return (
    <div>
      <div className="app-container">
        <a href="/" rel="noopener noreferrer">
          <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
        </a>
        <h1 className="centered-h1">Digite abaixo sua solicitação</h1>
      </div>
      <div className="containerrr">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite algo aqui"
            value={solici}
            onChange={(evento) => setSolici(evento.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Solicicacoes;
