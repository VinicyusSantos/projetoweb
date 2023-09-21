import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '/src/styles/solicitacoesEmployee.css';


export function Solicicacoes() {
  const [solici, setSolici] = useState({
    nome: '',
    solicitacao: '',
    descricao: '',

  });

  const handleSubmit = async (evento) => { 
    evento.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/enviando', solici, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('', response.data);


    } catch (err) {
      console.error('Erro ao enviar a solicitação:', err);
    }
  };

  return (
    <div>
      <div className="app-container">
        <h1 className="cabecalho">Digite abaixo sua solicitação</h1>
      </div>
      <div className="Solicitacoes">
        <form onSubmit={handleSubmit}>
          <textarea 
            placeholder="Insira seu nome" 
            required 
            value={solici.nome} 
            onChange={(e) => setSolici({ ...solici, nome: e.target.value })}
          /> 
          <textarea 
            placeholder="Qual item você deseja solicitar?" 
            required 
            value={solici.solicitacao} 
            onChange={(e) => setSolici({ ...solici, solicitacao: e.target.value })}
          /> 
          <textarea 
            placeholder="Descreva o porquê você deseja este item" 
            required 
            value={solici.descricao} 
            onChange={(e) => setSolici({ ...solici, descricao: e.target.value })}
          /> 

          <button type="submit" className="submit">Confirmar</button>
        </form>
      </div>
    </div>
  );
}

export default Solicicacoes;