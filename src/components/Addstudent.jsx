import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = () => {
    var[input,setInput]=useState({
        name:'',
        grade:''
    })
    const inputhandler=(e)=>{
        const{name,value}=e.target
        setInput({...input,[name]:value})
    }
    const readvalues=()=>{
        console.log("clicked")
        axios.post("http://localhost:3005/students",input)
        .then(response=>{
            alert('SUCCESS')
        })
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
