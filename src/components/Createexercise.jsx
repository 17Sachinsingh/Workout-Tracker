import React, { useState } from "react";

import "../styles/createexercise.css";
const Createexercise = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields,setEmptyFields]=useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, load, reps}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      setEmptyFields([])
      console.log('new workout added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      {/* <label>Excercise Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      /> */}
      <label>Exercise Title:</label>
<select onChange={(e) => setTitle(e.target.value)} value={title}>
  <option value="">Select an exercise</option>
  <option value="Push ups">Push ups</option>
  <option value="Pull ups">Pull ups</option>
  <option value="Squats">Squats</option>
  <option value="Deadlifts">Deadlifts</option>
  <option value="Walking lunges">Walking lunges</option>
  <option value="Bicep Curls">Bicep Curls</option>
  <option value="Overhead Tricep Extensions">Overhead Tricep Extensions</option>
  <option value="Boat Pose">Boat Pose</option>
  <option value="Planks">Planks</option>
  <option value="Rowing">Rowing</option>
</select>


      <label>Number of Sets:</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

      <button type="submit">Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Createexercise;
