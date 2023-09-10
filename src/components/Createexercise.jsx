import React from 'react'
import '../styles/createexercise.css';

const Createexercise = () => {
  return (
    <div className='form-container'>  
      <h1 className='center'>Cardio</h1>
      <form className='exercise-type'>
        <label for="exercise-name">Exercise name</label><br/>
        <input type='text' />
        <label for="sets">sets</label><br/>
        <input type='text' />
        <label for="reps">reps</label><br/>
        <input type='text' />
        <button className='submit-cardio' type='submit'> Get Started</button>
        <button className='submit-cardio-out' type='submit'> Clear</button>
      </form>
    </div>
  )
}

export default Createexercise
