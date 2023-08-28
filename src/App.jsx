import { useState } from 'react'
import hammerLogo from './assets/hammer.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={hammerLogo} className="logo hammer" alt="Hammer logo" />
        </a>
      </div>
      <h1>AL MOSSAR</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <div className="degrad">LOGIN</div>
        </button>
      </div>
    </>
  )
}

export default App
