import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import q51 from '../Images/q51.png'
import q52 from '../Images/q52.png'
import q53 from '../Images/q53.png'
import a51 from '../Images/a51.png'
import a52 from '../Images/a52.png'
import a53 from '../Images/a53.png'
import a54 from '../Images/a54.png'
import a55 from '../Images/a55.png'
import a56 from '../Images/a56.png'
import question_box from '../Images/question_box.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";
import AnswerOption from "../Components/answerOption";

export default function TestFive() {

  let navigate = useNavigate();

  const routeChange= ()=> {

    navigate('/results')
  }

  

  return(

<Grid container style={{ backgroundColor: '#5D3FD3' }} height="100vh">

  <Grid item xs={12}  lg={4} align="left">
  <Typography variant="h5" style={{ color: 'white' }}>
          <b>5/5</b>
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
      <img src={q51} height="100px" width="100px">
      </img>
      {/* </CardContent>
      
    </Card> */}


</Grid>

<Grid item xs={12} lg={2}>
<img src={q52} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={q53} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={question_box} height="100px" width="100px">
</img>
</Grid>


    </Grid>
<Grid conntainer xs={12} style={{marginTop:'20px', marginBottom:'20px'}}>

  <Typography variant="h5" color="white">
  5. Which shape should be in the rightmost cell with a question mark?
  </Typography>
</Grid>
<Grid container xs={12}>
<Grid item xs={2}>
<AnswerOption op={a51} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a52} route={routeChange}/>
</Grid>

<Grid item xs={2}>

<AnswerOption op={a53} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a54} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a55} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a56} route={routeChange}/>
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