import { Box, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Stage, Layer, Rect, Text, Circle, Line, RegularPolygon, Group, Wedge } from 'react-konva';

export default function TestOne() {

  return (

    <Grid container xs={12} style={{ backgroundColor: '#5D3FD3' }}>
      <Grid item xs={12} lg={4} align="left">
        <Typography variant="h5" style={{ color: 'white' }}>
          <b>0/5</b>
        </Typography>
      </Grid>

      <Grid item xs={12} lg={4} align="left">
        
      </Grid>

      <Grid item xs={12} lg={4} align="right">
        <IconButton>
          <CloseIcon style={{ color: 'white' }} />
        </IconButton>
      </Grid>

      <Grid item xs={12} style={{marginLeft:'25%'}} alignItems='center'>

        <Grid item xs={12}>


          {/* <Grid item xs={12} lg={3}> */}
            <Stage width={1000} height={600}>

              <Layer>

                <RegularPolygon
                  sides={3}
                  x={50}
                  y={100}
                  width={100}
                  height={100}
                  //   fill="red"
                  stroke="orange"
                />

                <RegularPolygon
                  sides={3}
                  x={200}
                  y={100}
                  width={100}
                  height={100}
                  //   fill="red"
                  stroke="#00FFFF"
                />

                <Rect

                  x={300}
                  y={50}
                  width={80}
                  height={80}

                  stroke="orange"
                //   shadowBlur={5}
                />

                <Rect
                  x={430}
                  y={40}
                  width={100}
                  height={100}

                  stroke="white"
                  strokeWidth={5}

                />
                <Text
                  x={470}
                  y={80}
                  fontSize={20}
                  text="?"
                  stroke='white'
                  // strokeWidth={5}
                  align="center"
                />

<Text
                  x={20}
                  y={168}
                  fontSize={20}
                  text="1. Which shape should be in the rightmost cell with a question mark?"
                  // stroke='white'
                  // strokeWidth={5}
                  align="center"
                />

                {/* <br /> */}

                <RegularPolygon
                  sides={3}
                  x={50}
                  y={250}
                  width={100}
                  height={100}
                  //   fill="red"
                  stroke="orange"
                />

                <RegularPolygon
                  sides={3}
                  x={200}
                  y={220}
                  width={100}
                  height={100}
                  //   fill="red"
                  stroke="#00FFFF"
                  rotation={-180}
                />

                <Rect

                  x={300}
                  y={200}
                  width={80}
                  height={80}

                  stroke="#00FFFF"
                //   shadowBlur={5}
                />
                <Rect

                  x={420}
                  y={200}
                  width={80}
                  height={80}

                  stroke="orange"
                //   shadowBlur={5}
                />

<RegularPolygon
                  sides={3}
                  x={600}
                  y={250}
                  width={100}
                  height={100}
                  //   fill="red"
                  stroke="orange"
                />

              </Layer>
            </Stage>
          {/* </Grid> */}

        </Grid>

        {/* <Grid item xs={12}>
          <Grid item xs={12}>
            <Stage width={1200} height={}>

              <Layer>
              <RegularPolygon
                  sides={3}
                  x={50}
                  y={100}
                  width={100}
                  height={100}
                  //   fill="red"
                  stroke="orange"
                />
              </Layer>
            </Stage>

          </Grid>


        </Grid> */}
      </Grid>

      {/* <Grid item xs={12} lg={4} align="right">
        <IconButton>
          <CloseIcon style={{ color: 'grey' }} />
        </IconButton>
      </Grid> */}
    </Grid>
  );

}