import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addstudent from './Addstudent'

const View = () => {
    var[update,setUpdate]=useState(false)
    var[selected,setSelected]=useState([])
   var[students,setStudents]= useState([])
useEffect(()=>{
    axios.get("http://localhost:3002/product")
    .then(response=>{
    setStudents(students=response.data)
    console.log(students)})
    .catch(error=>console.log(error))
},[])
const deleteValue=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3002/product/"+id)
    .then(response=>{
        alert("DELETED")
        window.location.reload(false)
    })
}
const updateValue=(value)=>{
    setSelected(value)
    setUpdate(true)
}
var finalJSK =<TableContainer>
<Table>
<TableHead>
    <TableRow>
        <br></br>        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <TableCell>name</TableCell>
        <TableCell>brand</TableCell>
        <TableCell>quantiy</TableCell>
        <TableCell>Rupeese</TableCell>
    </TableRow>
</TableHead>
<TableBody>
    {students.map((value,index)=>{
        return<TableRow>
            <TableCell>{value.name}</TableCell>
            <TableCell>{value.brand}</TableCell>
            <TableCell>{value.quantiy}</TableCell>
            <TableCell>{value.Rupeese}</TableCell>
             <TableCell><Button onClick={()=>deleteValue(value.id)} variant='contained' color='error'>DELETE</Button></TableCell>
             <TableCell><Button onClick={()=>updateValue(value)} variant='contained'>UPDATE</Button></TableCell>
        </TableRow>
    })}
</TableBody>
</Table>
      </TableContainer>
    if(update)
    finalJSK=<Addstudent data={selected} method ="put"/>
  
return (
   finalJSK
  )
}

export default View
