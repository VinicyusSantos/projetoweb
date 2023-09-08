import hammerLogo from '../assets/hammer.svg';
import '../styles/Login.css';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (testando) => {
    testando.preventDefault();

    console.log(email, senha);
    
    
    try{
      const response = await axios.post('http://localhost:3000/login',
        JSON.stringify({email, senha}),
        {
          headers: { 'Content-Type' : ' application/json'}
        }
      );
    } catch (error) {
        if(!error?.response) {
          setError('Erro ao acessar o servidor');    
        } else if (error.response.status == 401) {
          setError('Usuário ou senha inválidos')
        }
    }
  };

      



  return (
    <div className="app-container">
      <div>
        <div>
          <a href="/" rel="noopener noreferrer">
            <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
          </a>
        </div>
        <h1 className="centered-h1">AL MOSSAR</h1>
      </div>
      <div className="container">
      <div className="header">
        <div className="text">Sign In</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="email" placeholder="Email"
          onChange = {(testando) => setEmail(testando.target.value)}
          />
        </div>
      <div className="input">
          <input type="password" placeholder="Senha"
            onChange = {(testando) => setSenha(testando.target.value)}
          />
        </div>
      </div>
          <div className="forgot-password">
            <span >Esqueci minha senha!</span>
          </div>
          <div className="submit-container">
          <button onClick={(testando) => handleLogin(testando)} className="submit">SIGN IN</button>
          </div>
        </div>
        <p>{error}</p>
    </div>

  );
}
export default Login;