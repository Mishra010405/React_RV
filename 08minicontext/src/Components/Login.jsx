import React , {useState, useContext}from 'react'
import UserContext from '../COntext/UserContext'


function Login() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')


    const {setUser} = useContext(UserContext)


    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }

  return (
    <div>
        <h2>Login in </h2>
        <input type='text'
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder='username'/>
        {" "}
        <input type='text'
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder='password'
        />
        <button>Submit</button> 
        
    </div>
  )
}

export default Login