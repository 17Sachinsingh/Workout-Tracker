import React from 'react'
import { Box,Button,Typography,Container } from '@mui/material'
const Home = () => {
  return (
    <Container>
    
        <Typography variant='h4' 
        sx={{color:'blue', ml:'22px',mt:'100px'}}>
            Live
        </Typography>
        <Typography variant='h3' 
        sx={{color:'turquoise', ml:'22px'}}>
            Sweat
        </Typography>
        <Typography variant='h1' 
        sx={{color:'blue', ml:'22px'}}>
            Burn
        </Typography>
        <Button variant='contained' color='secondary'sx={{my:'20px' }}>Explore Exercises</Button>
    </Container>
  )
}

export default Home
