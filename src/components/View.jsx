import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
var[students,setStudents]= useState([])
useEffect(()=>{
    axios.get("http://localhost:3005/students")
    .then(response=>{
    setStudents(students=response.data)
    console.log(students)})
    .catch(error=>console.log(error))
},[])
const deleteValue=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3005/students/"+id)
    .then(response=>{
        alert("DELETED")
        window.location.reload(false)
    })
}
  return (
    <div>
      <TableContainer>
<Table>
<TableHead>
    <TableRow>
        <TableCell>id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Grade</TableCell>
    </TableRow>
</TableHead>
<TableBody>
    {students.map((value,index)=>{
        return<TableRow>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.name}</TableCell>
            <TableCell>{value.grade}</TableCell>
             <TableCell><Button onClick={()=>deleteValue(value.id)} variant='contained' color='error'>DELETE</Button></TableCell>
             <TableCell><Button variant='contained'>UPDATE</Button></TableCell>
        </TableRow>
    })}
</TableBody>
</Table>
      </TableContainer>
    </div>
  )
}

export default View
