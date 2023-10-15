import React from 'react';
import Exercisecard from './Exercisecard';
import "../styles/exercises.css";
import Pushup from "../styles/exercise-images/push-up.jpg";
import Pullup from "../styles/exercise-images/pullups.jpeg";
import Squats from "../styles/exercise-images/squats.jpg";
import Deadlift from "../styles/exercise-images/deadlifts.webp";
import Lunges from "../styles/exercise-images/lunges.jpg";
import Bicep from "../styles/exercise-images/bicep.webp";
import Overhead from "../styles/exercise-images/overhead.webp";
import Boat from "../styles/exercise-images/boat.jpg";
import Planks from "../styles/exercise-images/planks.jpg";

const Resistance = () => {
  return (
    <div>
      <h2 id="resistance1">Indermediate Workout</h2>
    
    <div className="resistance">
    <Exercisecard
         title="Push-Ups"
         image={Pushup}
         alt="pushups"
         text="Push-ups target the chest, shoulders and triceps muscles, and because your body is in a high plank posture, you also engage your core and legs for stability.  "
         link="https://www.verywellfit.com/the-push-up-exercise-3120574"
         you_link="https://www.youtube.com/watch?v=IODxDxX7oi4"
       />
      
       <Exercisecard
         title="Pull-ups"
         image={Pullup}
         alt="pullups"
         text="Pull-ups are an upper-body exercise that recruits multiple large muscle groups, primarily the muscles in the back and biceps, and uses the body's own weight as resistance.   "
         link="https://www.healthline.com/health/exercise-fitness/benefit-of-pull-up"
         you_link="https://www.youtube.com/watch?v=eGo4IYlbE5g"
       />
       <Exercisecard
         title="Squats"
         image={Squats}
         alt="pullups"
         text="Squats build strength, primarily in the lower body, by working the glutes and the quadriceps muscles. They also recruit the core to stabilize the body throughout the exercise."
         link="https://www.menshealth.com/uk/building-muscle/a755607/how-to-master-the-squat/"
         you_link="https://www.youtube.com/watch?v=ubdIGnX2Hfs"
       />
       <Exercisecard
         title="Deadlifts"
         image={Deadlift}
         alt="Deadlifts"
         text="Deadlifts are one of the most important exercises that you can do to learn how to lift things without hurting your back. It also feels great to be able to lift something heavy."
         link="https://www.menshealth.com/uk/fitness/a748582/how-to-deadlift/"
         you_link="https://www.youtube.com/watch?v=XxWcirHIwVo"
         />
         </div>
         <h2 id="resistance">Extreme Workout</h2>
         <div className="resistance">
         
       <Exercisecard
         title="Walking Lunges"
         image={Lunges}
         alt="Walking Lunges"
         text="Walking lunges are one of the best exercises to continue to target the glues and to tone the legs. They recruit multiple muscle groups, and since they also work your balance, walking lunges are a great way to build confidence by improving overall strength and stability."
         link="https://www.verywellfit.com/how-to-do-walking-lunges-4588048 "
         you_link="https://www.youtube.com/watch?v=r49nFlyDvTc"
         />
       <Exercisecard
         title=" Bicep Curls"
         image={Bicep}
         alt=" Bicep Curls"
         text="Bicep curls are an upper-body exercise that targets the muscles on the front side of the upper arms. They build functional strength that you'll need to carry heavy things, and they make your arms look great! "
         link="https://www.verywellfit.com/strength-exercises-for-the-biceps-1231100"
         you_link="https://www.verywellfit.com/strength-exercises-for-the-biceps-1231100"
         />
       <Exercisecard
         title="Overhead Tricep Extensions"
         image={Overhead}
         alt="Overhead Tricep Extensions"
         text="Building muscle in your triceps can help reduce the sagging in the arms that often comes with age. Improving muscle tone in that area of the body is a great way to boost body confidence."
         link="https://www.healthline.com/health/fitness/overhead-triceps-extension#how-to"
         you_link="https://www.youtube.com/shorts/8FNGBJUHfsA"
         />
       <Exercisecard
         title="Boat Pose"
         image={Boat}
         alt="Boat Pose"
         text=" Boat pose is one of the best core-strengthening exercises, since it works both the abdominal and the back muscles. It requires no equipment."
         link="https://www.webmd.com/fitness-exercise/yoga-how-to-the-boat-pose"
         you_link="https://www.youtube.com/watch?v=8KsyQvwi85Q"
       />
       <Exercisecard
         title="Planks"
         image={Planks}
         alt="Planks"
         text=" Plank is a static posture that engages almost every muscle in the body. It is a core exercise, but also recruits muscles in the upper body and in the lower bod."
         link="https://www.verywellfit.com/the-plank-exercise-3120068#:~:text=Begin%20in%20the%20plank%20position,your%20navel%20toward%20your%20spine."
         you_link="https://www.youtube.com/watch?v=BQu26ABuVS0"
       />
     </div> 
    </div>
  )
}

export default Resistance
