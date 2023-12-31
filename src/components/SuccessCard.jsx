import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Button } from '@mui/material';
import "../styles/success-card.css"

const SuccessCard = ({ userName }) => {
  return (
    <div className="success-card">
      <Card>
        <CardContent>
          <h2 style={{color:'navy'}}>Welcome, {userName}!</h2>
          <p>You are logged in.</p>
          <Button variant="contained" color="primary">
            <Link to="/" className="success-link">
              Go to Home
            </Link>
            
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessCard;
