import hammerLogo from './assets/hammer.svg';
import './App.css';
//import Login from './components/Login.jsx';

function App2() {

  return (
    <div className="app-container">
      <div>
        <div>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
          </a>
        </div>
        <h1 className="centered-h1">BOA NOITE</h1>
      </div>
    </div>
  );
}

export default App2;
