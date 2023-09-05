import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import App2 from './testeapp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function testando() {
  return(
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <App2 />
</React.StrictMode>,
)
);
}

export default testando;

