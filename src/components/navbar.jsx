import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Container,
  IconButton,
  Button,
  Toolbar,
  Tabs,
  Tab,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const [value, setValue] = useState("Home");
  const { loginWithRedirect, logout,isAuthenticated,user } = useAuth0();

  return (
    <AppBar position="static" sx={{ height: "80px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="regular">
          <IconButton
            variant="contained"
            size="large"
            sx={{ color: "white" }}
            component={Link}
            to="/"
          >
            <FitnessCenterIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </IconButton>
          <Typography
            variant="h6"
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: "none", md: "flex" },
              letterSpacing: "0.15rem",
            }}
          >
            Workout Tracker
          </Typography>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Exercises" component={Link} to="/exercises" />
            <Tab label="BMI" component={Link} to="/bmi" />
            <Tab label="Add Workout" component={Link} to="/create-exercise" />
            <Tab label="Summary" component={Link} to="/dashboard" />
          </Tabs>
          {isAuthenticated ? (
            <Button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              variant=" outlined"
              sx={{ marginLeft: "auto" }}
            >
             
              Log Out
          
            </Button>
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              variant=" outlined"
              sx={{ marginLeft: "auto" }}
            >
              Log In
            </Button>
            
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
