import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = (props) => {
    var[input,setInput]=useState(props.data)
    console.log(props.data)
        
   
    const inputhandler=(e)=>{
        const{name,value}=e.target
        setInput({...input,[name]:value})
    }
    const readvalues=()=>{
        console.log("clicked")
        if(props.method==="post"){
        axios.post("http://localhost:3005/students",input)
        .then(response=>{
            alert('SUCCESS')
        })
    .catch(error=>console.log(error))
}
    else if(props.method==="put"){
        axios.put("http://localhost:3005/students/"+input.id,input)
        .then((response)=>{
            console.log("put data"+ response.data)
            alert("Updated SEcc")
            window.location.reload(false);
        })
        .catch(err=>console.log(err))
    }
}
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<TextField label='Name' name='name' variant='outlined' value={input.name}
onChange={inputhandler}></TextField>
<Typography>{input.name}</Typography> <br></br> <br></br>
<TextField label='Grade' name='grade'variant='outlined' value={input.grade}
onChange={inputhandler}></TextField>
<Typography>{input.grade}</Typography>
<br></br>
<br></br>
<Button onClick={readvalues}  variant='contained' color='success'>Add</Button>

    </div>
  )
}

export default Addstudent
