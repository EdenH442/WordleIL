import { useState } from 'react'
import './App.css'
import Wordle from './components/Wordle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Wordle/>
    </div>
  )
}

export default App
