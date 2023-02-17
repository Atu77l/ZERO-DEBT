import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Footer = () => {
  return (
    <>
    <div className="p-10 text-sm" style={{backgroundColor:"rgb(250,205,254)"}}>
    <p className="m-5 text-sm">Debts is a free-to-use website that provides information on Individual Voluntary Arrangements (IVAs) and debt management plans (DMPs)</p>
    <p className="m-5 text-sm">Zero Debts does not provide advice but gives information on Individual Voluntary Arrangements. Upon completion of a fact find, should you be unsuitable for an IVA, you will be given the option of being referred to an FCA Regulated Firm for a full advice call where you would choose a debt solution best suited to your circumstances. You will also be given the option of being referred to the free sector for independent advice (Money Helper).</p>
    <p className="m-5 text-sm">There is no obligation to proceed into any arrangement we recommend, and you can also use any other services of your choice.</p>
    <p className="m-5 text-sm">Zero Debts does not charge fees for the information provided which are obligation-free. Should you choose an IVA, there are fees for setting up and ongoing management,We may be paid a referral fee if you opt for a solution from one of our associates</p>
    </div>
    <div>  
    <Box sx={{ flexGrow: 1 ,backgroundColor:"green"}}>
    <AppBar position="static" sx={{backgroundColor:"green"}}>
      <Toolbar>
      </Toolbar>
      </AppBar>
    </Box>
      </div>
      </>
  )
}

export default Footer