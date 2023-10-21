import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import MotivationImage from "./Randomimage";
import BMI from "../styles/exercise-images/bmi.jpg";
import Progress from "../styles/exercise-images/progress.jpg";
import Reference from "../styles/exercise-images/reference.jpg";
import Summary from "../styles/exercise-images/summarize.webp";
import "../styles/home.css";
import FeatureCard from "./FeatureCard";
const Home = () => {
  const [motivationText, setMotivationText] = useState("");
  const motivationQuotes = [
    "I hated every minute of training, but I said, Don’t quit. Suffer now and live the rest of your life as a champion. – Muhammad Ali",
    "We are what we repeatedly do. Excellence then is not an act but a habit. –Aristotle",
    "The body achieves what the mind believes. – Napoleon Hill",
    "The hard days are the best because that’s when champions are made, so if you push through, you can push through anything. – Dana Vollmer",
    "If you don’t find the time, if you don’t do the work, you don’t get the results. – Arnold Schwarzenegger",
    "Dead last finish is greater than did not finish, which trumps did not start. — Unknown",
    "Push harder than yesterday if you want a different tomorrow. – Vincent Williams Sr.",
    "The real workout starts when you want to stop. – Ronnie Coleman",
    "Take care of your body. It’s the only place you have to live. — Jim Rohn",
    "I’ve failed over and over again in my life and that is why I succeed. – Michael Jordan",
    "Once you are exercising regularly, the hardest thing is to stop it. – Erin Gray",
    "The secret of getting ahead is getting started. — Mark Twain",
    "Exercise should be regarded as tribute to the heart – Gene Tunney",
    "You’re going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn’t parallel to how heavy you lift, it’s parallel to how hard you work. – Joe Manganiello",
    "Most people fail, not because of lack of desire, but, because of lack of commitment. – Vince Lombardi",
    "You miss one hundred percent of the shots you don’t take. – Wayne Gretzky",
    "If something stands between you and your success, move it. Never be denied. – Dwayne “The Rock” Johnson",
    "All progress takes place outside the comfort zone.– Michael John Bobak",
    "Just believe in yourself. Even if you don’t, just pretend that you do and at some point, you will. – Venus Williams",
    "The harder you work and the more prepared you are for something, you’re going to be able to persevere through anything. – Carli Lloyd",
    "Enduring means accepting. Accepting things as they are and not as you would wish them to be, and then looking ahead, not behind. – Rafael Nadal",
    "If you want something you’ve never had, you must be willing to do something you’ve never done. – Thomas Jefferson",
    "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character. – Arnold Schwarzenegger",
    "Continuous improvement is better than delayed perfection. – Mark Twain",
    "Once you learn to quit, it becomes a habit. – Vince Lombardi",
    "It’s hard to beat a person who never gives up. – Babe Ruth",
    "Do something today that your future self will thank you for. — Sean Patrick Flanery",
    "Success is usually the culmination of controlling failure. – Sylvester Stallone",
    "Think of your workouts as important meetings you schedule with yourself. Bosses don’t cancel – Unknown",
    "Workout till you feel that pain and soreness in muscles. This one is good pain. No pain, no gain. – Invajy",
    "Confidence comes from discipline and training. – Robert Kiyosaki",
    "I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.–Muhammad Ali",
    "What hurts today makes you stronger tomorrow –Jay Cutler",
    "Strength does not come from physical capacity. It comes from an indomitable will –Mahatma Gandhi",
    "You must expect things of yourself before you can do them. – Michael Jordan",
    "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion. – Arnold Schwarzenegger",
    "If you fail to prepare, you’re prepared to fail. – Mark Spitz",
    "Motivation is what gets you started. Habit is what keeps you going. – Jim Ryun",
    "A champion is someone who gets up when they can’t. – Jack Dempsey",
    "The difference between the impossible and the possible lies in a person’s determination. – Tommy Lasorda",
    "When you have a clear vision of your goal, it’s easier to take the first step toward it. – LL Cool J",
  ];
  useEffect(() => {
    // Generate random motivation text when the component mounts (on website load or refresh)
    const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
    setMotivationText(motivationQuotes[randomIndex]);
  }, []);
  return (
    <>
      <p
        style={{
          fontSize: "18px",
          color: "#333",
          lineHeight: "1.5",
          margin: "20px",
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "22px",
          fontStyle: "italic",
        }}
      >
        <q>{motivationText}</q>
      </p>
      <div className="home-page">
        <div className="first-part">
          <Box className="box1">
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              sx={{ margin: "20px" }}
            >
              Get Fit
            </Typography>
            <Typography variant="h3" color="textPrimary" fontWeight="bold">
              Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ marginTop: "30px" }}
            >
              Check out the most effective exercises personalized to you
            </Typography>
            <Stack>
              <a href="/exercises" className="explore-button">
                Explore Exercises
              </a>
            </Stack>
          </Box>
        </div>
        <div className="image-motivation">
          <MotivationImage />
        </div>
      </div>
      <div className="section-separator"></div>
      <div className="features">
        <FeatureCard
          title="Tailor Your Fitness Journey"
          description=" Personalize workouts to fit your goals. Achieve results that are uniquely yours."
          imageUrl={Progress}
          className="FeatureCard"
        />
        <FeatureCard
          title="Track Your Health with BMI"
          description="Assess your fitness at a glance. Get personalized insights and set achievable wellness goals."
          imageUrl={BMI}
          className="FeatureCard"
        />
        <FeatureCard
          title="Track Your Progress"
          description="View comprehensive workout summaries. Analyze your fitness journey and stay motivated."
          imageUrl={Summary}
          className="FeatureCard"
        />
        <FeatureCard
          title="Explore Exercise Guides"
          description="Access detailed exercise information. Learn proper techniques and stay safe on your fitness journey."
          imageUrl={Reference}
          className="FeatureCard"
        />
      </div>
    </>
  );
};

export default Home;
