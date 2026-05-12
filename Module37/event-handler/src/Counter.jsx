import { useState } from "react"

export default function Counter() {
    const counterStyle = {
        border: '1px solid black',
        padding: '10px',
        width: '200px'
    }
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }
  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}