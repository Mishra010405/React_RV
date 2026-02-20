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


    for(let i=1 ; i<=Array.length ; i++) {
      let char = Math.floor(Math.random()*str.length +1)
    }

    pass = str.charAt(char)

    setPassword(pass)

  } , [length , charallowed , numberAllowed])






  return (
   
   <>
   <h1>Hii My Name IS Shivam Mishra</h1>
   </>
  )
}

export default App
