import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleIncrease =() => {
    setCount((prevCount) => prevCount + 1)
  }
  const handleDecrease =() => {
    setCount((prevCount) => prevCount - 1)
  }
  const style = {
    color: count >= 0 ? 'green' : 'red'
  };

  return (
    <>
      <div>
        <h1 style={style}>現在のカウント:{count}</h1>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </>
  )
}

export default App
