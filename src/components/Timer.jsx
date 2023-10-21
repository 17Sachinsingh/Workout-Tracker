import React, { useState, useEffect } from "react";
import "../styles/createexercise.css";

const Timer = () => {
  const [minutesInput, setMinutesInput] = useState(0);
  const [secondsInput, setSecondsInput] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const totalSeconds = minutesInput * 60 + secondsInput;

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      if (seconds >= totalSeconds) {
        setIsRunning(false);
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [isRunning, seconds, totalSeconds]);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setSecondsInput(0);
    setMinutesInput(0);
  };

  return (
    <div className="timer">
        <h3 style={{textAlign:'center'}}>Timer</h3>
      <span style={{marginLeft:'90px'}}>
         {Math.floor(seconds / 60)} mins : {seconds % 60} secs
      </span>
      <div>
        <input
          type="number"
          placeholder="Minutes"
          value={minutesInput}
          onChange={(e) => setMinutesInput(parseInt(e.target.value))}
          disabled={isRunning}
        />
        <input
          type="number"
          placeholder="Seconds"
          value={secondsInput}
          onChange={(e) => setSecondsInput(parseInt(e.target.value))}
          disabled={isRunning}
        />
      </div>
      <div classname="timer-btns">
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
