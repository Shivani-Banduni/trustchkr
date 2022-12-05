import React from 'react'
import axios from 'axios'
import {
    FormControl,
    Button,
    ButtonGroup,
    // FormLabel,
    // FormErrorMessage,
    Input,
    // FormHelperText,
  } from '@chakra-ui/react'
// import { Erroe } from './Erroe'
export const Form = () => {
    const [data,setdata]=React.useState([])
    const [nam,setname]=React.useState('')
    const [origin,setorigin]=React.useState('')
    const [destination,setdestination]=React.useState('')
    const [departuredate,setdeparture]=React.useState('')
    const [departuretime,setdeparturetime]=React.useState('')

    const [newdata,setnewdata]=React.useState([])
    React.useEffect(()=>{
        axios.get("http://localhost:3004/results").then((res)=>setdata(res.data))
         console.log('data',data)
    },[])
//    console.log(name)

   const handleclick=()=>{
var da=data.filter((e)=>{
    return (
        nam==e.name 
   
    )

})
setnewdata(da)
console.log("new",newdata)
   }
  return (
    <div className='mainn'>
            <div className='main'>
        <FormControl>
  
  <b>Name-</b><br/><Input type='text' placeholder='enter your name' onChange={(e)=>setname(e.target.value)}/><br/><br/>
  {nam!==newdata.name?alert("wrong"):'kjhjaks'}
  <b>Origin City-</b><Input type='text ' onChange={(e)=>setorigin(e.target.value)} placeholder='enter your origin city'/><br/><br/>
  <b>Destination City-</b> <Input type='text' onChange={(e)=>setdestination(e.target.value)} placeholder='enter your destination city' /><br/><br/>
  <b>Departure Date-</b> <Input type='date' onChange={(e)=>setdeparture(e.target.value)}/><br/><br/>
  <b>Return Date-</b> <Input type='date' /><br/><br/>
  <b>Departure time-</b> <Input type='time' onChange={(e)=>setdeparturetime(e.target.value)}/><br/><br/>
  <b>Arrival time-</b> <Input type='time' /><br/><br/>
  <b>Price-</b><br/><Input placeholder='enter price' type='number'></Input><br/><br/>
  <Button onClick={handleclick} style={{backgroundColor:'blue',color:'white',height:'50px',borderRadius:'10px'}}>Button</Button>


</FormControl>
</div>

<div className='append-div'>
{newdata.map((e)=>{
    return(
    <>
 {/* { */}
 
     <>
    <img className='image' src='https://img.freepik.com/premium-photo/aircraft-is-flying-islands-sea-sunrise-summer-landscape-with-white-passenger-airplane_159067-617.jpg?w=2000'></img>
    <b className='depart-date'>ID</b><b>{e.id}</b><br/>  
   

    <b className='depart-date'>Flight name</b><b>{e.name}</b><br/>
   <b className='depart-date'>OriginCity</b><b>{e.originCity}</b><br/>
  <b className='depart-date'>DepartureDate</b> <b>{e.departureDate}</b><br/>
  <b className='depart-date'>DepartureTime</b><b>{e.departureTime}</b><br/>
  <b className='depart-date'>Price</b> <b>{e.price}</b>
</>
     {/* } */}





    </>)
})}
</div>
    </div>

  )
}












 //     && 
    // origin==e.originCity && 
    // destination==e.destinationCity && 
    // departuredate==e.departureDate && 
    // departuretime==e.departureTime
