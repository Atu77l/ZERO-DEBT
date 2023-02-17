import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BlockIcon from '@mui/icons-material/Block';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <BlockIcon sx={{color:"#40ab73"}}/>
      </Typography>
      <Typography variant="h5" sx={{color:"#40ab73",fontSize: 14}}component="div">
        Do Not let
      </Typography>
      <Typography variant="h5" sx={{color:"#40ab73",fontSize: 14}}component="div">
        Bailiffs In.
      </Typography>
     
      <Typography variant="body2">
        Do not Panic,you are
        <br />
        not compelled to let
        <br/>
        anyone enter your
        <br/>
        home,so make sure
        <br/>
        you don't
        
      </Typography>
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
