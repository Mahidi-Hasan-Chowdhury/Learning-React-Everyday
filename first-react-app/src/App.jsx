import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Device name="Laptop" price="55"></Device> 
      <Device name="Mobile" brand="samsung"></Device> 
      <Device name="watch" price="3"></Device> 
      <Person></Person>
      <Student grade="7" marks="90"></Student>
      <Student></Student>
      <Student></Student>
      <Developer name="Mahidi" tech ="Springboot"></Developer>
      <Developer name="Siam" tech ="GO"></Developer>
      <Developer name="Asif" tech ="Mern"></Developer>
      <Project></Project>

      <Player name= "Tamim" runs="5000"></Player>
      <Player name= "Mush" runs="500"></Player>
      <Salami event= "Eid" amount="100"></Salami>
      <Salami event= "Graduation" ></Salami>
    </>
  )
}

function Device(props){
  console.log(props)
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 21;
  const money = 20;
  // This person is an object
  const person = {name:'Mahidi',age:21}
  return <h3>I am {person.name} with age: {age + money}, real age: { person.age} </h3>
}


const bio = {name: "Mahidi Hasan Chowdhury", age: 21};
function Student() {
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Name: {bio.name}</p>
    <p>age: {bio.age}</p>
  </div>
  )
}


function Developer(props){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Developer: {props.name}</h5>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Project(){
  
  return(
    <div style={{
    margin: '20px',
    padding: '20px',
    border: '2px solid cyan',
    borderRadius: '20px'
  }}>
      <h4>Hello Coding World</h4>
    </div>
  )
}

//  -------------------------------------
//38-5 Prop Types & How to pass/read prop

//const {name, runs} = {name:"tamim", runs:'100'}
function Player({name, runs}){
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <h3>Runs: {runs}</h3>
    </div>
  )
}

//if any destructured value is not given , we can use default value like 0 
function Salami({event,amount=0}){
  return (
   <div className='student'>
    <h3>Salami Events: {event}</h3>
    <h3>Amount: {amount}</h3>
   </div>
  )
}

export default App

