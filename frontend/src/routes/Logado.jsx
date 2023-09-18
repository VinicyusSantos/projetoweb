import React, { useState, useEffect } from 'react';
import AdminPage from '../components/AdmPage.jsx';
import Employee from '../components/EmployeePage.jsx';

function Logado() {
  const [identificacao, setIdentificacao] = useState(null);

  useEffect(() => {
    const identificacaoSimulada = localStorage.getItem('identificacao');
    setIdentificacao(identificacaoSimulada);
  }, []);

  if (identificacao === '0') {
    return <AdminPage />;
  } else if (identificacao === '1') {
    return <Employee />;
  } else {
    return <p>Identificação desconhecida</p>;
  }
}

export default Logado;
