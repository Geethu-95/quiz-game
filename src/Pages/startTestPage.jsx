import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Grid } from '@mui/material';
import image from '../Images/image.svg'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#E5E4E2',
  '&:hover': {
    backgroundColor: '#E5E4E2',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#71797E',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export function SearchAppBar() {

 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    // setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"white"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{color:'blue'}}/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            align="left"
            style={{color:'#71797E'}}
          >
            testometrika
          </Typography>
          <Search >
            <SearchIconWrapper>
              <SearchIcon style={{color:'#71797E'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{color:'#71797E'}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function StartTestPage(){

  return(
<>
<SearchAppBar/>
<Grid container  xs={12} style={{backgroundColor:'#5D3FD3'}} width="100%" height={'100%'}>
<Grid item xs={12} style={{marginTop:'15px',marginBottom:'25px'}}>
    <img src={image} height='200px' width='200px'/>
</Grid>

<Grid item xs={12} style={{marginTop:'20px'}}>
    <Typography variant ="h4" style={{color:'white'}}> IQ Test for kids from 7 to 16 year old </Typography>
</Grid>


<Grid item xs={12}  style={{marginTop:'25px',marginBottom:'40px'}}>
    <Button size="large" style={{backgroundColor:'grey',color:'white'}}>Start Test</Button>
</Grid>

<Grid item xs={12} style={{margin:'40px 40px 40px 40px'}}>
<Typography variant="h6"style={{color:'white',textAlign:'justify'}}> Most IQ tests are not suitable for children, as they are originally developed for the adult population. However, if you want to know the IQ of a child between the ages of 7 and 16, there are several tests that can help you. There is an IQ test for children, developed by us, which, unlike similar ones, can also determine the IQ level of children at the age of 6 years.The child will be shown a series of three pictures arranged with some regularity. Children will need to choose pictures that are suitable for an empty cell. The first four questions should be answered together with the child so that he/she understands the essence of the task - these questions are not taken into account in the calculation of the child’s IQ. Let's get started!

</Typography>
</Grid>

<Grid item xs={12} align="left" style={{margin:'40px 40px 40px 40px'}}>

<Typography variant="h6" style={{color:'white',textAlign:'justify'}}> 
  Author of the test:  Testometrika Team
  </Typography>
</Grid>
</Grid>

</>

  );
}
