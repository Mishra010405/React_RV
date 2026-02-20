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
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3' > Password Generaotor </h1>

    <div className='flex shadow rounded-lg ovwerflow-hidden mb-4'>
      <input
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3 '
      placeholder='Password'
      readOnly
      />
      <button>Copy</button>
    </div>
   </div>

   </>
  )
}

export default App
