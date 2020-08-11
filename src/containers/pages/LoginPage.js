import React, {useState} from 'react'
import axios from '../../config/axios'
function LoginPage() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const login = async()=>{
    const token = await axios.post('/users/login',{username,password})
    console.log(token)
    }
    return (
        <div>
           <p>Login page</p> 
           <p>Username</p><input type='Text' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
           <p>password</p><input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
           <button onClick={login}>submit</button>
        </div>
    )
}

export default LoginPage
