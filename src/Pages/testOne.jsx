import { Box, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import q11 from '../Images/q11.png'
import q12 from '../Images/q12.png'
import q13 from '../Images/q13.png'
import a11 from '../Images/a11.png'
import a12 from '../Images/a12.png'
import a13 from '../Images/a13.png'
import a14 from '../Images/a14.png'
import a17 from '../Images/a17.png'
import a16 from '../Images/a16.png'
import question_box from '../Images/question_box.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AnswerOption from "../Components/answerOption";
import { useNavigate } from "react-router-dom";

export default function TestOne() {

  let navigate = useNavigate();

  const routeChange= ()=> {

    navigate('/testTwo')
  }

  return(

<Grid container style={{ backgroundColor: '#5D3FD3' }} height="100vh">

  <Grid item xs={12}  lg={4} align="left">
  <Typography variant="h5" style={{ color: 'white' }}>
          <b>1/5</b>
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
      <img src={q11} height="100px" width="100px">
      </img>
      {/* </CardContent>
      
    </Card> */}


</Grid>

<Grid item xs={12} lg={2}>
<img src={q12} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={q13} height="100px" width="100px">
</img>
</Grid>

<Grid item xs={12} lg={2}>
<img src={question_box} height="100px" width="100px">
</img>
</Grid>


    </Grid>
<Grid conntainer xs={12} style={{marginTop:'20px', marginBottom:'20px'}}>

  <Typography variant="h5" color="white">
  1. Which shape should be in the rightmost cell with a question mark?
  </Typography>
</Grid>
<Grid container xs={12}>
<Grid item xs={2}>
<AnswerOption op={a11} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a12} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a13} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a14} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a17} route={routeChange}/>
</Grid>

<Grid item xs={2}>
<AnswerOption op={a16} route={routeChange}/>
</Grid>

</Grid>

  </Grid>
</Grid>
  );
}