import hammerLogo from './assets/hammer.svg';
import './App.css';

function App() {

  return (
    <div className="app-container">
      <div>
        <div>
          <a href="/" target="_blank" rel="noopener noreferrer">
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
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input">
            <input type="password" placeholder="Senha"/>
          </div>
        </div>
        <div className="forgot-password">
          <span >Esqueci minha senha!</span>
        </div>
        <div className="submit-container">
          <div className="submit">SIGN IN</div>
        </div>
      </div>
    </div>
  );
}

export default App;
