import React from "react";
import { Link } from "react-router-dom";
import Highknee from "../styles/exercise-images/high-knee.jpg";
import Powerwalk from '../styles/exercise-images/power-walking.jpg'
import Rowing from '../styles/exercise-images/rowing.jpg'

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import "../styles/exercises.css";
import Exercisecard from "./Exercisecard";
const Exercises = () => {
  return (
    <div className="exercise-parent">
      <Exercisecard
        title="High Knees Run"
        image={Highknee}
        alt="high knee run"
        text="High knees activate your quadriceps, hamstrings, calves, glutes, and
            hip flexors, helping improve muscular endurance, balance, and
            coordination in these muscles"
        link="https://www.healthline.com/health/fitness/high-knees-benefits#benefits"
        you_link="https://www.youtube.com/watch?v=QPfOZ0e30xg"
      />
      <Exercisecard
        title="Power Walking"
        image={Powerwalk}
        alt="power walk"
        text="Maintain good posture by keeping your head upright with your chin in neutral position.Focus on quick smooth strides rather than longer strides."
        link="https://www.healthline.com/health/exercise-fitness/power-walking"
        you_link="https://www.youtube.com/watch?v=gknH0pQwohc"
      />
      <Exercisecard
        title="Rowing"
        image={Rowing}
        alt="Rowing"
        text="A fantastic low-impact form of cardio, rowing is a full body workout that provides an efficient way to break a sweat. Keep your knees straight with each stroke and don't let them bow out to the side."
        link="https://www.healthline.com/health/benefits-of-rowing-machine"
        you_link="https://www.youtube.com/watch?v=6_eLpWiNijE"
      />

    </div>
  );
};

export default Exercises;
