import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import '../styles/footer.css'
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo" >
            <IconButton sx={{color:'white ' ,ml:'100px'}} size='medium' variant='contained'
            component={Link} to='/' > 
             <FitnessCenterIcon /> 
             </IconButton>
                        
        </div>
        <div className="footer-contact">
          <p>Contact us:</p>
          <p>Email: <a href="17sachinthakur@gmail.com">17sachinthakur@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
        </div>
        <div className="footer-social">
          <p>Follow us:</p>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <FacebookIcon/>
          </a>
          <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
            <TwitterIcon/>
          </a>
          <a href="https://instagram.com/mr_singhsachin?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
          </a>
          <p style={{color:'red'}}>&copy; 2023 Sachin. All rights reserved.</p>

        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
