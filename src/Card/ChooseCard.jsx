import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Handshake } from '@mui/icons-material';

const card = (
  <React.Fragment>
    <CardContent>
    <Typography  sx={{ borderRadius:"50%",backgroundColor:"green",fontSize: 18,width:"50px" ,marginLeft:"120px",color:"green" }} className="justify-center text-center" gutterBottom>
       <Handshake sx={{color:"white",margin:"5px"}}/>
      </Typography>
      
      <p className="m-5">
       Expert team of debt Specialist to help you
       </p>
    
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 100 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
