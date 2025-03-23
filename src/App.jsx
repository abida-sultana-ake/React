import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <Person></Person>
      <Sport></Sport>
      <Pet></Pet>
      <Student name="Aka" dept="CSE"></Student>
      <Student name="Akai" dept="MSJ"></Student>
      <Student name="Akail" dept="BBA"></Student>
      <Developer name="Aka" tech="JS"></Developer>
      <Developer name="Akai" tech="C++"></Developer>
      <Developer name="Akail" tech="C"></Developer>
      <Player name="Taskin" runs="59"></Player>
      <Player name="Mahmadullah" runs="90"></Player>
      <Salami name="Bushra" salami="1000"></Salami>
      <Salami name="Mahiya" salami="100"></Salami>
      <Salami name="Borsha" salami="1000"></Salami>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
// Destructing
function Player ({name, runs}) {
  return (
    <div className='student'>
      <h3>Name: {name} </h3>
      <p>Run: {runs} </p>
    </div>
  )
}
// another example of Destructing
function Salami ({name, salami}) {
  return(
    <div className='student'>
      <h3>Name: {name} </h3>
      <p>Salami Amount: {salami} </p>
    </div>
  )
}

function Developer (props) {
  console.log(props);
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '15px',
      textAlign: 'left',
      margin: '10px',
      padding: '10px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Person () {
  const age = 17;

  const personStyle = {
    color: 'gray',
    fontSize: '46px'
  }

  return (
    <p style={personStyle} >I am a Person {age} </p>
  )
}

function Sport () {
  return (
    <div>
      <h2>Cricket</h2>
      <p>I like it most</p>
    </div>
  )
}

function Student (jalali) {
  console.log(jalali);
  return (
    <div className='student'>
      <p>Name: {jalali.name} </p>
      <p>Department: {jalali.dept} </p>
    </div>
  )
}

function Pet () {
  return (
    <div>
      <h1>Hello Kitte</h1>
      <p>This is a Cat</p>
    </div>
  )
}

export default App
