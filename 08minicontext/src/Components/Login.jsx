import React , {useState, useContext} from 'react'
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

        <form onSubmit={handlesubmit}>

        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>

        {" "}

        <input type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        />

        {" "}

        <button type='submit'>Submit</button> 

        </form>
        
    </div>
  )
}

export default Login