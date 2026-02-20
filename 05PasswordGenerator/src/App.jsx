import { useCallback, useState ,  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, SetLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charallowed, setCharactoAllowed] = useState(false);
  const [password , setPassword] = useState("")


  const passwordGenerator  = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*()_+-={}[]|\:;<>,.?/~"


    for(let i=1 ; i<=length ; i++) {
      let char = Math.floor(Math.random()*str.length +1)
    }

    pass = str.charAt(char)

    setPassword(pass)

  } , [length , charallowed , numberAllowed,setPassword])






  return (
   
   <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-yellow-800 text-orange-500">

    <h3 className="text-white text-center my-3">
      Password Generator
    </h3>

    
    <div className="flex shadow rounded-lg text-white  overflow-hidden mb-4">

      <input
        type="text"
        value={password}
        className="outline-none text-white  w-full py-1 px-3"
        placeholder="Password"
        readOnly
      />

      <button className="bg-blue-600 text-white px-3">
        Copy
      </button>

    </div>

    
    <div className="flex text-sm  text-white gap-y-3">

    
      <div className="flex items-center gap-x-2">

        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) =>SetLength(e.target.value)}
        />

        <label>Length: {length}</label>

      </div>

      
      <div className="flex items-center  text-white gap-x-2 px-2 py-1">

        <input
          type="checkbox"
          id="numberInput"
          className="cursor-pointer"
          checked={numberAllowed}
          onChange={() =>
            setNumberAllowed((prev) => !prev)
          }
        />

        <label htmlFor="numberInput">
          Numbers
        </label>

      </div>

      
      <div className="flex items-center gap-x-2">

        <input
          type="checkbox"
          id="characterInput"
          className="cursor-pointer"
          checked={charallowed}
          onChange={() =>
            setCharactoAllowed((prev) => !prev)
          }
        />

        <label htmlFor="characterInput">
          Characters
        </label>

      </div>

    </div>

  </div>
</>
  )
}

export default App
