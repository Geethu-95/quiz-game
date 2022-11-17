import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import q41 from '../Images/q41.png'
import q42 from '../Images/q42.png'
import q43 from '../Images/q43.png'
import a41 from '../Images/a41.png'
import a42 from '../Images/a42.png'
import a43 from '../Images/a43.png'
import a44 from '../Images/a44.png'
import a45 from '../Images/a45.png'
import a46 from '../Images/a46.png'
import question_box from '../Images/question_box.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";
import AnswerOption from "../Components/answerOption";

export default function TestFour() {

  let navigate = useNavigate();

  const routeChange= ()=> {

    navigate('/testFive')
  }

  return(

<Grid container style={{ backgroundColor: '#5D3FD3' }} height="100vh">

  <Grid item xs={12}  lg={4} align="left">
  <Typography variant="h5" style={{ color: 'white' }}>
          <b>4/5</b>
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
      <img src={q41} height="100px" width="100px">
      </img>
      {/* </CardContent>
      
    </Card> */}


</Grid>

<Grid item xs={12} lg={2}>
<img src={q42} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={q43} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={question_box} height="100px" width="100px">
</img>
</Grid>


    </Grid>
<Grid conntainer xs={12} style={{marginTop:'20px', marginBottom:'20px'}}>

  <Typography variant="h5" color="white">
  4. Which shape should be in the rightmost cell with a question mark?
  </Typography>
</Grid>
<Grid container xs={12}>
<Grid item xs={2}>
<AnswerOption op={a41} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a42} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a43} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a44} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a45} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a46} route={routeChange}/>
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