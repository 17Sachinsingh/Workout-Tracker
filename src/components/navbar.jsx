import React,{ useState } from 'react';
import { AppBar ,Typography,Container,IconButton ,Button, Toolbar,Tabs,Tab} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[value,setValue]=useState('Home');
  return (
    <AppBar position='static' >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton variant="contained" size='large' sx={{color:"white"}} >                
                <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              </IconButton>
              
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
                  <Tab label ="Home" component={Link} to='/' />
                  <Tab label="Exercises" component={Link} to='/exercises'/>
                  <Tab label="BMI" component={Link} to='/bmi'/>
                  <Tab label="Dashboard" component={Link} to='/dashboard' /> 
                </Tabs>
                <Button variant='contained' sx={{marginLeft:'auto'}}>LogIn</Button>
                <Button variant='contained' sx={{marginLeft: '10px'}}>SignUp</Button>

            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar
