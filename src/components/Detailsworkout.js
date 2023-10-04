import React from "react";
import '../styles/detailworkout.css'
//import fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const Detailsworkout = ({ workout }) => {
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    window.location.reload()
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      
      <p>
        <strong>Number of sets: </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
     
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  );
};

export default Detailsworkout;
