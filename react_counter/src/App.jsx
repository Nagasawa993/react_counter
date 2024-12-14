import { useState } from 'react'
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
    color: count > 0 ? 'green' : count === 0 ? 'white' : 'red'
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
