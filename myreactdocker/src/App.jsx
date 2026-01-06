import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const connNode = () =>{
    fetch('http://10.0.20.6:3001')
    .then(()=>{
      alert("success")
    })
    .catch(()=>{
      alert("fail")
    })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
<<<<<<< HEAD
        <button onClick={connNode}>
          React-Node-NaverCloud
=======
        <button onClick={testNodeConn}>
          testNodeConn
>>>>>>> c1bf8ded2b393ecfc8ceef1417f863791a5375da
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
