import React from "react";
import { Link } from "react-router-dom";
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

const Exercisecard = (props) => {
  return (
    <div className="exercise-parent">
      <Card sx={{ maxWidth: 345 }} className="card1">
        <CardMedia
          component="img"
          height="170"
          image={props.image}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom component="div">
           {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" as='a' href={props.link} target="_blank" >Know more</Button>
          <Button style={{marginLeft:'auto'}} size="small" as='a' href={props.you_link} target="_blank" >Watch </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Exercisecard;
