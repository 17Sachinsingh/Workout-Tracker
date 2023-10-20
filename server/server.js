require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const express = require("express");
const mongoose = require("mongoose");




const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use('/api/register', registerRoutes);
app.use("/api/workouts", workoutRoutes);
app.use('/api/login', loginRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("Error is", err);
  });
