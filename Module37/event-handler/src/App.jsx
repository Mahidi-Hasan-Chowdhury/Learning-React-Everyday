import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Counter from './Counter'
import Batsman from './Batsman'
import Toggle from './Toggle'

function App() {
  function handleClick() {
    alert('Button Clicked!')
  } 

  const handleClick3 = () => {
    alert('Button 3 Clicked!')
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(`The new number is ${newNum}`)
  }
  return (
    <>
    <div>
      <h3>Learning Event Handling</h3>   
       <button onClick={handleClick}>Click Me</button> 
       <button onClick={function handleClick2(){ alert('Button 2 Clicked!') }}>Click Me 2</button> 

       <button onClick={handleClick3}>Click Me 3</button>

       <button onClick={() => alert('Button 4 Clicked!')}>Click Me 4</button>

       <button onClick={()=>handleAdd5(10)}>Click Me 5</button>


       <Counter></Counter>

       <Toggle></Toggle>

       <Batsman></Batsman>
    </div>
    </>
  )
}

export default App
