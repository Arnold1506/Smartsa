import React,{useState} from 'react'
import axios from 'axios'

const Singup = () => {
    const [name,setName]=useState("")
    const[password,setPassword]=useState("")
    const [email,setEmail]=useState("")

    const formSubmitHandler=(e)=>{
      e.preventDefault()
      axios.post("http://localhost:8080/signup",{
        name:name,
        password:password,
        email:email
      }).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    }

  return (
    <div >
        <form onSubmit={(e)=>{formSubmitHandler(e)}} style={{display:"flex",flexDirection:"column"}}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor="password">password</label>
        <input type="text" name='passwords' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Singup