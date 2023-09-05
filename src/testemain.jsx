import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './testeapp.jsx'
import './App.css'

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
