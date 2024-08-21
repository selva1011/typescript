import { useState } from 'react'
import './App.css'
import AddTask from './Components/AddTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTask />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
