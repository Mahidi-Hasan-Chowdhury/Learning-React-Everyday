import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ToDO, {Task,ToDos,SwitchStatement,IfElseStatement,ElementVariables,UserList} from './Todo'
import BookList from './Library'


function App() {

  return (
    <>     
      <h1>Welcome to Vite</h1>
      <p>This is a simple React app built with Vite.</p>
      <Person></Person>
      <Sports></Sports>
      <Student></Student>
      <Developer name="John Doe" age={30} skills={['JavaScript', 'Python', 'React']}></Developer>
      <Player name="John Doe" age={30} team="Team A"></Player>
      

      <ToDO tasks={"Learn React"} isDone={true}></ToDO>
      <ToDO tasks={"Build a React app"} isDone={false}></ToDO>
      <ToDO tasks={"Deploy the app"} isDone={false}></ToDO>

      <Task completed={true} work="Doing Homework"></Task>
      <Task completed={false} work="Doing Assignment"></Task>

      <ToDos>
        <li>Learn React</li>
        <li>Build a React app</li>
        <li>Deploy the app</li>
      </ToDos>
      <SwitchStatement value="option1"></SwitchStatement>
      <IfElseStatement value="option2"></IfElseStatement>
      <ElementVariables value="option3"></ElementVariables>


      <UserList users={users}></UserList> 

      <BookList books={books}></BookList>

    </>
  )
}

const users = [
    {id: 1, name: 'John Doe', email: 'john.doe@example.com'},
    {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com'},
    {id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com'}
];

const books = [
    {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, price: '$10.99'},
    {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, price: '$8.99'},
    {id: 3, title: '1984', author: 'George Orwell', year: 1949, price: '$9.99'}
];



const personStyle = {
  color: 'blue',
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px'
}


function Person() {
const name = "Mahidi Hasan"
const age = 22
  return (
    <div>
      
      <h1 style={personStyle}>{name}</h1>
      
      <h2>Age: {age}</h2>
      <p>I am a software engineer.</p>
    </div>
  )
}

function Sports(){
  return(
    <>
      <h1>Sports</h1>
      <p>Sports are physical activities that involve skill, competition, and often teamwork. They can be played for fun, fitness, or as a profession. Some popular sports include soccer, basketball, tennis, and swimming. Engaging in sports can improve physical health, mental well-being, and social connections.</p>
    </>
  )
}

function Student(){
  return(
    <div className='student'>
      <h1>Student</h1>
      <p>Name: </p>
      <p>Roll: </p>
    </div>
  )
}



// Props are used to pass data from parent component to child component. They are read-only and cannot be modified by the child component. Props are used to make components reusable and dynamic.

function Developer(props){
  return(
    <div>
      <h1>Developer</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Skills: {props.skills.join(', ')}</p>
    </div>
  )
}


// destructuring props

function Player({name, age, team}){
  return(
    <div>
      <h1>Player</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Team: {team}</p>
    </div>
  )
}
export default App
