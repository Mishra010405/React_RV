import React, {useContext} from 'react'
import UserContext from '../COntext/UserContext'

function Profile() {
    const {user} = useContext(UserContext)


    if(!user) return <div>Please Login</div>


    return <div>Welcome User {user.username}</div>
}

export default Profile