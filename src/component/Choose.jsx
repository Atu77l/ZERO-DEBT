import React from 'react'
import { Button } from '@mui/material'
import Card from './Card'
import ChooseCard from './../Card/ChooseCard'
const Choose = () => {
  return (
    <>
    <div className="justify-center text-center">
       <h1 className="mt-10 font-bold">WHY CHOOSE US?</h1>
       <h4 className="font-thin">We've helped thousand of people get out of debt</h4>
    </div>
    <div className="m-5 flex flex-row justify-center">
    <ChooseCard/><ChooseCard/><ChooseCard/>  
    </div>
    <div className="text-center justify-center p-10">
    <Button variant='contained' sx={{ padding:"10px",borderRadius:"20px",width:"40%",backgroundColor:"green"}}>GET HELP TODAY</Button>
        </div>
    </>
  )
}

export default Choose