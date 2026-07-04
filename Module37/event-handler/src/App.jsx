import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Counter from './Counter'
import Batsman from './Batsman'
import Toggle from './Toggle'
import GreetingInput from './GreetingInput'
import Users from './Users'
import TodoList from './TodoList'
import FeedbackForm from './FeedbackForm'
import ProductSearch from './ProductSearch'
import Stopwatch from './Stopwatch'
import WindowResizeListener from './WindowResizeListener'
import SimpleTabs from './SimpleTabs'
import PersistentNote from './PersistentNote'
import QuoteGenerator from './QuoteGenerator'
import TempConverter from './TempConverter'
import RegisterForm from './RegisterForm'
import ThemeSwitcher from './ThemeSwitcher'
import SimpleModal from './SimpleModal'
import SimpleQuiz from './SimpleQuiz'
import SimpleAccordion from './SimpleAccordion'
import CountdownTimer from './CountdownTimer'
import StepProgress from './StepProgress'

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

       <GreetingInput></GreetingInput>

       <TodoList></TodoList>

       <FeedbackForm></FeedbackForm>

       <ProductSearch></ProductSearch>

       <Stopwatch></Stopwatch>

       <WindowResizeListener></WindowResizeListener>

       <SimpleTabs></SimpleTabs>

       <PersistentNote></PersistentNote>

       <QuoteGenerator></QuoteGenerator>

       <TempConverter></TempConverter>

       <RegisterForm></RegisterForm>

       <ThemeSwitcher></ThemeSwitcher>

       <SimpleModal></SimpleModal>

       <SimpleQuiz></SimpleQuiz>

       <SimpleAccordion></SimpleAccordion>

       <CountdownTimer></CountdownTimer>

       <StepProgress></StepProgress>

       <Users></Users>

       <Batsman></Batsman>
    </div>
    </>
  )
}

export default App
