import React, { useState, useEffect } from "react";
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
import '../styles/home.css'
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";
const Navbar = ({ isLoggedIn2, onLogout }) => {
  const handleLogout = () => {
    // Calling  the logout function
    onLogout();
  };
  const [selectedTab, setSelectedTab] = useState("Home");

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
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            indicatorColor="secondary"
          >
            <Tab label="Home" component={Link} to="/" />
            {isLoggedIn2 ? (
              <>
                <Tab label="Exercises" component={Link} to="/exercises" />
                <Tab label="BMI" component={Link} to="/bmi" />
                <Tab
                  label="Add Workout"
                  component={Link}
                  to="/create-exercise"
                />
                <Tab label="Summary" component={Link} to="/dashboard" />
                <Button
                  color="error"
                  size="medium"
                  onClick={handleLogout}
                  sx={{ marginLeft: "auto" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Tab label="Register" component={Link} to="/signup" />
                <Tab label="Sign In" component={Link} to="/signin" />
              </>
            )}
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
