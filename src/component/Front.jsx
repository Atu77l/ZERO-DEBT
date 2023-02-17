import React from 'react'
import image from './../photo1.jpg';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import FrontCard from './../Card/FrontCard'

const Front = () => {
  return (
    <>
    <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat" ,backgroundSize:"cover",height:"500px"}} className="w-100 h-100">
        <div className="text-white from-stone-100 pt-52 pl-10 font-bold text-2xl">Are you being</div>
        <div className="text-white from-stone-100 pl-10 font-bold text-2xl">hassled by <span style={{color:"#2a8850"}} >a Balliff</span></div>
        <div className="text-white from-stone-100 pl-10 font-bold text-xl">We are here to help</div>
        <div className="text-white from-stone-100 pl-10 text-l"><CheckIcon sx={{color:"#2a8850"}}/>Stop Calls And further Action From Creditores & Bailiffs.</div>
        <div className="text-white from-stone-100 pl-10 text-l"><CheckIcon sx={{color:"#2a8850"}}></CheckIcon>Write off whar you cannot afford to pay</div>
        <div className="text-white from-stone-100 pl-10 text-l"><CheckIcon sx={{color:"#2a8850"}}/>More than half your debt repayments</div>
        <div className="text-white from-stone-100 pl-10 text-l"><CheckIcon sx={{color:"#2a8850"}}/>Write off whar you cannot afford to pay</div>
        <div  className="text-white from-stone-100 pl-10 text-l"><CheckIcon sx={{color:"#2a8850"}}/>More than half your debt repayments</div>
        <div className="text-center justify-center text-white pt-2 font-bold text-2xl">ALWAYS REMEMBER</div>
    </div>
    
    <div className="flex flex-rows justify-center" style={{marginTop:"-25px"}}>
    <FrontCard/><FrontCard/><FrontCard/><FrontCard/>
    </div>
    <div className="m-20 text-center justify-center"> 
    <Button variant='contained' sx={{ padding:"10px",borderRadius:"20px",width:"40%",backgroundColor:"green"}}>GET HELP TODAY</Button></div>
    </>
  )
}

export default Front