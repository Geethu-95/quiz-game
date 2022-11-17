import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import q31 from '../Images/q31.png'
import q32 from '../Images/q32.png'
import q33 from '../Images/q33.png'
import a31 from '../Images/a31.png'
import a32 from '../Images/a32.png'
import a33 from '../Images/a33.png'
import a34 from '../Images/a34.png'
import a36 from '../Images/a36.png'
import a35 from '../Images/a35.png'
import question_box from '../Images/question_box.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";

export default function TestThree() {
  let navigate = useNavigate();

  const routeChange= ()=> {

    navigate('/testFour')
  }

  
  return(

<Grid container style={{ backgroundColor: '#5D3FD3' }} height="100vh">

  <Grid item xs={12}  lg={4} align="left">
  <Typography variant="h5" style={{ color: 'white' }}>
          <b>3/5</b>
        </Typography>
  </Grid>

  <Grid item xs={12} lg={4}>

  </Grid>

  <Grid item xs={12}  lg={4} align="right">
  <IconButton>
          <CloseIcon style={{ color: 'white' }} />
        </IconButton>
  </Grid>

  <Grid container spacing={1} xs={12} style={{marginLeft:'15px'}}>
    <Grid container xs={12} style={{marginLeft:"300px"}}>
    <Grid item xs={12} lg={2}>

    {/* <Card height="100px" width="100px">
      <CardContent> */}
      <img src={q31} height="100px" width="100px">
      </img>
      {/* </CardContent>
      
    </Card> */}


</Grid>

<Grid item xs={12} lg={2}>
<img src={q32} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={q33} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={question_box} height="100px" width="100px">
</img>
</Grid>


    </Grid>
<Grid conntainer xs={12} style={{marginTop:'20px', marginBottom:'20px'}}>

  <Typography variant="h5" color="white">
  3. Which shape should be in the rightmost cell with a question mark?
  </Typography>
</Grid>
<Grid container xs={12}>
<Grid item xs={2}>
<IconButton onClick={routeChange}>
<img src={a31} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton  onClick={routeChange}>
<img src={a32} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton  onClick={routeChange}>
<img src={a33} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton  onClick={routeChange}>
<img src={a34} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton  onClick={routeChange}>
<img src={a36} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton  onClick={routeChange}>
<img src={a35} height="100px" width="100px">
</img>
</IconButton>
</Grid>

</Grid>

  </Grid>
  <Grid container xs={12} lg={12}>
    <IconButton style={{color:'grey'}} size="large">
        <KeyboardBackspaceIcon/>
    </IconButton>
  </Grid>
 
</Grid>
  );
}