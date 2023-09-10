import React from "react";
import { Link } from "react-router-dom";
import Highknee from "../styles/exercise-images/high-knee.jpg";
import Powerwalk from "../styles/exercise-images/power-walking.jpg";
import Rowing from "../styles/exercise-images/rowing.jpg";
import Cycling from "../styles/exercise-images/cycling.jpg"
import Swimming from "../styles/exercise-images/swimming.jpeg"
import Jumping_Rope from "../styles/exercise-images/roping.jpg"
import "../styles/exercises.css";
import Exercisecard from "./Exercisecard";
import Resistance from "./Resistance";
const Exercises = () => {
  return (
    <>
    <Resistance/>
     <h2 id="cardio">Cardio Exercises</h2>
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
      <Exercisecard
        title="Cycling"
        image={Cycling}
        alt="Cycling"
        text="Both indoor and outdoor cycling are phenomenal low-impact forms of cardio that are great for all different types of fitness levels. You can change the intensity with both speed and resistance, allowing for workout variety to keep things fun and efficient"
        link="https://www.healthline.com/health/fitness-exercise/cycling-benefits"
        you_link="https://www.youtube.com/watch?v=0MLnC3bzXgQ"
      />
       <Exercisecard
        title="Swimming"
        image={Swimming}
        alt="Swimming"
        text="Moving your entire body against the resistance of water makes for a fantastic cardio workout that's fun too. Swimming can help build endurance, tone muscles and keep your heart rate up all while minimizing joint impact. "
        link="https://www.healthline.com/health/fitness-exercise/swimming-is-the-best-workout-you-need-to-do#Swimming-is-the-easiest-way-to-get-a-full-body-workout-"
        you_link="https://www.youtube.com/watch?v=tCnRBFCJDYk"
      />
      <Exercisecard
        title="Jumping Rope"
        image={Jumping_Rope}
        alt="Swimming"
        text="It's an affordable and easy way to work up a great sweat. Benefits of jump roping include enhancing muscle strength, boosting metabolism, improving coordination and more.  "
        link="https://www.healthline.com/health/jumping-rope-to-lose-weight"
        you_link="https://www.youtube.com/watch?v=1BZM2Vre5oc"
      />
    </div>
    
    </>
  );
};

export default Exercises;
