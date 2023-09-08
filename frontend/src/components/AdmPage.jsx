// About.js
import hammerLogo from '../assets/hammer.svg'
import React from 'react';
import '../styles/AdmPage.css'

function Adm() {
  return(
    <div className="app-container">
      <div>
        <div>
          <a href="/" rel="noopener noreferrer">
            <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
          </a>
        </div>
        <h1 className="centered-h1">BOA NOITE</h1>
      </div>
    </div>
  )
  
}

export default Adm;


