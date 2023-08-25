import React,{ useState } from 'react';
import { AppBar ,Typography,Container,IconButton ,Button, Toolbar,Tabs,Tab} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
const Navbar = () => {
  const[value,setValue]=useState(' ');
  return (
    <AppBar position='static' sx>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography variant='h6'
                href='/'
                sx={{
                    ml:2,
                    mr:2,
                    display:{xs:'none',md:'flex'},
                    letterSpacing:'0.15rem'
                }}
                >Workout Tracker</Typography>
                <Tabs textColor='inherit' 
                value={value} 
                onChange={(e,value)=>setValue(value)} 
                indicatorColor='secondary'>
                  <Tab label ="Homepage"/>
                  <Tab label="Exercises"/>
                  <Tab label="BMI"/>
                  <Tab label="Dashboard"/>
                </Tabs>
                <Button variant='contained' sx={{marginLeft:'auto'}}>LogIn</Button>
                <Button variant='contained' sx={{marginLeft: '10px'}}>SignUp</Button>

            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar
