import React, { useState } from 'react'
import axios from 'axios'
const Admin = () => {
    const [fileData,setFileData]=useState(null)

    const onSubmitHandler=(e)=>{
      e.preventDefault()
      // console.log("Hello");
      // console.log('file',fileData);
      if(fileData){
        const formData=new FormData()
        formData.append("file",fileData)
        console.log(formData);
        axios.post("http://localhost:8080/postdata",formData,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }).then(res=>[
          console.log(res.data)
        ]).catch(err=>{
          console.log(err);
        })
      }
    } 

    const onChangeHandler=(e)=>{
      console.log(e.target.files[0]);
      setFileData(e.target.files[0])
    }

  return (
    <div>
        <form onSubmit={(e)=>{onSubmitHandler(e)}}>
            <input type="file" name="file" id="file" onChange={(e)=>{onChangeHandler(e)}} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Admin