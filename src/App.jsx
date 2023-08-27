import { useState } from 'react'
import reactLogo from './assets/react.svg'
import hammerLogo from './assets/hammer.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={hammerLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>AL MOSSAR</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <div className="degrad">LOGIN
          </div>
        </button>
      </div>
    </>
  )
}

export default App
