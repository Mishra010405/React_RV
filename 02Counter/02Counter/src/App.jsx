import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setcounter] = useState(0);
  // let counter  = 15;

  const addvalue = () => {
    counter = counter + 1
    setcounter(counter)
    console.log(counter)
  }


  const removeValue = () => {
    // counter = counter-1;
    setcounter(counter-1);
    
  }
 
  return (
    <>
      <h1>Hii My Name is Shivam Mishra</h1>
      <p>Counter Value : {counter}</p>

      <br />
      <button onClick={addvalue}>Add Value {counter}</button>
      <br />


      <button onClick={removeValue}>Remove Counter : {counter}</button>

      <br/>
      <p>Footer : {counter}</p>

    </>
  )
}

export default App
