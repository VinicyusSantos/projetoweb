import React, { useState, useEffect } from 'react';
import hammerLogo from '../assets/hammer.svg';
import '../styles/EmployeePage.css';
export function ObraFuncionario() {

  return (
    <div>
      <div className="app-container">
        <a href="/" rel="noopener noreferrer">
          <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
        </a>
        <h1 className="centered-h1">OBRAS</h1>
      </div>
      <div className="container">
        <div className="obras">Obra 1</div>
        <div className="obras">Obra 2</div>
        <div className="obras">Obra 3</div>
        <div className="obras">Obra 4</div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default ObraFuncionario;