import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';


const card = (
  <React.Fragment>
    <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       GET FREE <span style={{color:"green"}}>BAILIFF HELP NOW</span>
      </Typography>
      <Typography variant="h5" sx={{color:"#40ab73",fontSize: 14}}component="div">
        Get your baliff Problem resolved today by
      </Typography>
      <Typography variant="h5" sx={{color:"#40ab73",fontSize: 14}}component="div">
        Get your baliff Problem resolved today by
      </Typography>
      <Typography variant="h5" sx={{color:"#40ab73",fontSize: 14}}component="div">
       team will be in touch
      </Typography>
      <div className="">
    <TextField id="outlined-basic" label="Telephone" variant="outlined" />
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    </div>
    <Button variant='contained' sx={{ padding:"10px",marginTop:"10px",borderRadius:"20px",width:"40%",backgroundColor:"green"}}>GET HELP TODAY</Button>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 175 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
