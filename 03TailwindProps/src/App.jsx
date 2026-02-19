import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)
  let mylan = {
    username: "Shivam Mishra",
    age: 21,
  }
  let arr = [122,34,44,5]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 mb-4 rounded-xl'  >Hii, My Name is Shivam Mishra</h1>
    <p className='bg-green-400 text-black p-4 mb-4 rounded-xl' >This project is made by me. By Useing Some Components OdF The Props</p>

    
<br/>

      <Cards username = "Shivam Mishra " btntext = " Visit Me" />
      <br/>
      <Cards Name = "Virat Kohli" btntext= " click Me "  someobj={arr}/>


    </>
  )
}

export default App
