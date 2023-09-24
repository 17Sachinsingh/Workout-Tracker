import React,{ useState } from 'react';
import { AppBar ,Typography,Container,IconButton ,Button, Toolbar,Tabs,Tab} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[value,setValue]=useState('Home');
  return (
    <AppBar position='static' sx={{height:'80px'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters variant='regular' >
              <IconButton variant="contained" size='large' sx={{color:"white"}} 
              component={Link} to='/'>                
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
                  <Tab label ="Home" component={Link} to='/'  />
                  <Tab label="Exercises" component={Link} to='/exercises'/>
                  <Tab label="BMI" component={Link} to='/bmi'/>
                  <Tab label="Summary" component={Link} to='/dashboard' /> 
                </Tabs>
                <Button component={Link} to='/user' variant='contained' sx={{marginLeft:'auto'}} >
                  Create user </Button>
                <Button component={Link} to ='/create-exercise' variant='contained' sx={{marginLeft: '10px'}}>
                  Add Workout </Button>

            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar
