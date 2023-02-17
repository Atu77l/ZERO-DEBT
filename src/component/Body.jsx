import React from 'react'
import image from './../photo1.jpg'
import { Button } from '@mui/material'
import Form from './../Card/Form'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import BodyCard from './../Card/BodyCard'
const Body = () => {
  return (
    <>
    <div className="bg-slate-800 flex flex-rows justify-between text-white">
     <div className="m-20">
       <PhoneInTalkIcon sx={{color:"white",fontSize:"50px"}}/>
       <div className="font-bold text-2xl">Speak to our team</div>
       <div className="font-bold text-2xl">for free help and advice</div>
       <div className="font-bold text-2xl">now</div>
       <div>Call Today <span style={{color:"green"}}>0202 101 3842</span> Lines</div>
       <div>open 24 Hours a Day / 7 Days A Week</div>
     </div>
     <div  className="justify-center text-center mt-20 mr-20">
     <Form/>
     </div>
    </div>
    <div className="grid grid-cols-2 z-1 mt-20 ml-20 mr-20 bg-white shadow-2xl border-solid" style={{marginBottom:"-50px"}}> 
    <div className="m-5 ">
     <h1 className="font-bold text-2xl">WAYS WE CAN <span style={{color:"green"}}>HELP</span></h1>
      <div style={{fontSize:"12px",marginTop:"20px"}} >
        <p >We recognise that dealinng with creditors and bailliffs may be streedul, but you are not alone. Because of our experience,we can examine
        your issue and recommedn the besst course of action.</p>
       <br/>
        <p>you might call us right now to explore what solutions area vailablt to help you get through everything with our assistance and support.</p>
        <br/>
        <p>Whether you're seeking for free,noobligation guidance or a way to get out of debt, we provide a pleasant,discreet,specialised service.</p>
      </div>
      </div>
      <div className="">
        <img src={image} alt="hello"></img>
        </div>
    </div>
    <div className="bg-green-400 h-40">

    </div>
    <div className="ml-20 mr-20 flex flex-row justify-between" style={{marginTop:"-30px"}}>
    <BodyCard/><BodyCard/><BodyCard/><BodyCard/>
    </div>
    <div className="m-5">
        <div className="m-5 text-center justify-center text-2xl font-bold">
        <h2 >SOME <span style={{color:"green"}} >BAILIFFS</span> WE HAVE STOPPED</h2>
        </div>
        <div className="text-center justify-center m-5 shadow-lg">
         
        </div>
        <div className="text-center justify-center">
        <Button variant='contained' sx={{ padding:"10px",borderRadius:"20px",width:"40%",backgroundColor:"green"}}>GET HELP TODAY</Button>
        </div>
    </div>
    </>
  )
}

export default Body