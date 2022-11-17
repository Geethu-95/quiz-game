import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import q21 from '../Images/q21.png'
import q22 from '../Images/q22.png'
import q23 from '../Images/q23.png'
import a21 from '../Images/a21.png'
import a22 from '../Images/a22.png'
import a23 from '../Images/a23.png'
import a24 from '../Images/a24.png'
import a25 from '../Images/a25.png'
import a26 from '../Images/a26.png'
import question_box from '../Images/question_box.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";
import AnswerOption from "../Components/answerOption";

export default function TestTwo() {

  let navigate = useNavigate();

  const routeChange= ()=> {

    navigate('/testThree')
  }
  return(

<Grid container style={{ backgroundColor: '#5D3FD3' }} height="100vh">

  <Grid item xs={12}  lg={4} align="left">
  <Typography variant="h5" style={{ color: 'white' }}>
          <b>2/5</b>
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
      <img src={q21} height="100px" width="100px">
      </img>
      {/* </CardContent>
      
    </Card> */}


</Grid>

<Grid item xs={12} lg={2}>
<img src={q22} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={q23} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={question_box} height="100px" width="100px">
</img>
</Grid>


    </Grid>
<Grid conntainer xs={12} style={{marginTop:'20px', marginBottom:'20px'}}>

  <Typography variant="h5" color="white">
  2. Which shape should be in the rightmost cell with a question mark?
  </Typography>
</Grid>
<Grid container xs={12}>
<Grid item xs={2}>
<IconButton onClick={routeChange}>
<img src={a21} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton onClick={routeChange}>
<img src={a22} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton onClick={routeChange}>
<img src={a23} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton onClick={routeChange}>
<img src={a24} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton onClick={routeChange}>
<img src={a25} height="100px" width="100px">
</img>
</IconButton>
</Grid>

<Grid item xs={2}>
<IconButton onClick={routeChange}>
<img src={a26} height="100px" width="100px">
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