import React,{useState} from 'react'
import axios from 'axios'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const formSubmitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/login",{
            email:email,
            password:password
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })

    }

  return (
    <div>
        <form onSubmit={formSubmitHandler} style={{display:"flex",flexDirection:"column"}}>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login