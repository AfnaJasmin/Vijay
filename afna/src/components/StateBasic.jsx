import { Button, TextField, Typography } from '@mui/material'  
import  { useState } from 'react'

const StateBasic = () => {
var[name,fname]=useState("AFNA")

  var [val,setval]=useState()
  var [sub,setsub]=useState()


  const handleInput=(e)=>{
    setval(e.target.value);
  }
   

    const submitHandler=()=>{
      console.log("clicked")
      setsub(val)
    }
  

  return (
    <div style={{margin:"70px"}}>
    <Typography variant='h6'>WELCOME TO {sub}</Typography>
    <br/>
    <TextField variant="outlined"  onChange={handleInput}/>  
    <Button variant='contained' onClick={submitHandler}>submit</Button>
    </div>
  )
}

export default StateBasic