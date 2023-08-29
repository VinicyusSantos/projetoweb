import { useState } from 'react';
import hammerLogo from './assets/hammer.svg'; // Certifique-se de importar o logo corretamente
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
        </a>
      </div>
      <h1>AL MOSSAR</h1>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input">
            <input type="password" placeholder="Password"/>
          </div>
        </div>
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>
        </div>
      </div>
    </div>
  );
}

export default App;
