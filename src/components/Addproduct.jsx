import { Button, TextField, Typography } from "@mui/material"
import axios from "axios"
import React, { useState } from "react"

const Addproduct = (props) => {
    var[input,setInput]=useState(props.data)
    console.log(props.data)
        
   
    const inputhandler=(e)=>{
        const{name,value}=e.target
        setInput({...input,[name]:value})
    }
    const readvalues=()=>{
        console.log("clicked")
        if(props.method==="post"){
        axios.post("http://localhost:3002/product",input)
        .then(response=>{
            alert('SUCCESS')
        })
    .catch(error=>console.log(error))
}
    else if(props.method==="put"){
        axios.put("http://localhost:3002/product/"+input.id,input)
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
<Typography>{input.name}</Typography>
<TextField label='brand' name='brand'variant='outlined' value={input.brand}
onChange={inputhandler}></TextField>
<Typography>{input.brand}</Typography>
<TextField label='quantiy' name='quantiy'variant='outlined' value={input.quantiy}
onChange={inputhandler}></TextField>
<Typography>{input.quantiy}</Typography>
<TextField label='Rupeese' name='Rupeese'variant='outlined' value={input.Rupeese}
onChange={inputhandler}></TextField>
<Typography>{input.Rupeese}</Typography>
<br></br>
<br></br>
<Button onClick={readvalues}  variant='contained' color='success'>Add</Button>

    </div>
  )
}

export default Addproduct