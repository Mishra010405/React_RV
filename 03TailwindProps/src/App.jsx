import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 mb-4 rounded-xl'  >Hii, My Name is Shivam Mishra</h1>
    <p className='bg-green-400 text-black p-4 mb-4 rounded-xl' >This is The Begning Of My React Projects...</p>

    
<br/>

      <Cards/>


    </>
  )
}

export default App
