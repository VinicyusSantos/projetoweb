import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '/src/styles/SolicitacoesEmployee.css';

export function Solicicacoes() {
  const [solici, setSolici] = useState({
    nome: '',
    solicitacao: '',
    motivo: '', // Corrigido para "motivo" em vez de "descricao"
  });

  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/enviando', solici, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log(response.data);

      // Redirecionar após o envio bem-sucedido, se necessário
      navigate('/pagina-de-sucesso'); // Substitua '/pagina-de-sucesso' pela rota desejada
    } catch (err) {
      console.error('Erro ao enviar a solicitação:', err);
    }
  };

  const handleNomeChange = (evento) => {
    setSolici({ ...solici, nome: evento.target.value });
  };

  const handleSolicitacaoChange = (evento) => {
    setSolici({ ...solici, solicitacao: evento.target.value });
  };

  const handleMotivoChange = (evento) => {
    setSolici({ ...solici, motivo: evento.target.value });
  };

  return (
    <div>
      <div className="app-containerjk">
        <h1 className="cabecalhojk">SOLICITAÇÕES PESSOAIS</h1>
      </div>
      <div className="Solicitacoesjk">
        <form onSubmit={handleSubmit}>
          <div className='containerrrjk'>
            <h2>Solicitação de Item</h2>
            <div className="input-groupjk">
              <label htmlFor="nome"><pz>Seu nome:</pz></label>
              <textarea
                id="nome"
                placeholder="Insira seu nome:"
                value={solici.nome}
                onChange={handleNomeChange}
              ></textarea>
            </div>
            <div className="input-groupjk">
              <label htmlFor="item"><pz>Título da solicitação:</pz></label>
              <textarea
                id="item"
                placeholder="Insira o título da solicitação:"
                value={solici.solicitacao}
                onChange={handleSolicitacaoChange}
              ></textarea>
            </div>
            <div className="input-groupjk">
              <label htmlFor="motivo"><pz>Descrição da solicitação:</pz></label>
              <textarea
                id="motivo"
                placeholder="Insira a descrição da solicitação:"
                value={solici.motivo}
                onChange={handleMotivoChange}
              ></textarea>
            </div>
            <a href="/info" rel="noopener noreferrer">
            <button type="button">Enviar solicitação</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Solicicacoes;