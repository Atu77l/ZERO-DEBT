import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
    <Typography className="m-5" sx={{ fontSize: 18,fontWeight:"20px" ,color:"green" }} color="text.secondary" gutterBottom>
       IN ARREARS
      </Typography>
      <Typography variant="h5" sx={{fontSize: 18,fontWeight:"20px" ,color:"green"}}component="div">
      WITH COUNCIL
      </Typography>
      <Typography variant="h5" sx={{fontSize: 18,fontWeight:"20px" ,color:"green"}}component="div">
      tax
      </Typography>
      <p className="m-5">
       Our team of experienced professionals provide expert confidential advice and 
       are ready to help you deal with intimidating bailiffs
       </p>
    
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 175 ,margin:"10px"}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
