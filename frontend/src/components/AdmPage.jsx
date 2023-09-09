import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import hammerLogo from '../assets/hammer.svg';
import '../styles/AdmPage.css';

function AdminPage() {
  const [works, setWorks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Aqui vai ficar a chamadas do API do backend para obter os dados.
    // Atualizar tambem os estados 'works', 'employees' e 'orders' com os dados recebidos do backend.
  }, []);

  return (
    <div className="app-container">
      <div>
        <div>
          <a href="/" rel="noopener noreferrer">
            <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
          </a>
        </div>
        <h1 className="centered-h1">Página Administrativa</h1>
      </div>
      <div className="tables-container">
        <div className="admin-table">
          <h2>Obras em Andamento</h2>
          <table>
            <thead>
              <tr>
                <th>Nome da Obra</th>
                <th>Funcionário envolvido</th>
                <th>Orçamento</th>
                <th>Data de conclusão</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeie os dados de 'works' aqui para preencher a tabela */}
            </tbody>
          </table>
        </div>
        <div className="employee-table">
          <h2>Funcionários e Obras</h2>
          <table>
            <thead>
              <tr>
                <th>Nome do Funcionário</th>
                <th>Obra</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeie os dados de 'employees' aqui para preencher a tabela */}
            </tbody>
          </table>
        </div>
        <div className="order-list">
          <h2>Lista de Pedidos</h2>
          <ul>
            {/* Mapear aqui os dados de 'orders' aqui para preencher a lista de pedidos */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
