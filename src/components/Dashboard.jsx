import React from 'react'
import { useEffect,useState } from 'react';
import Detailsworkout from './Detailsworkout';
const Dashboard = () => {
  const [workouts,setWorkouts]=useState(null)
  useEffect(()=>{
    const fetchWorkouts=async () =>{
      const response=await fetch('/api/workouts')
      const json=await response.json()

      if(response.ok){
        setWorkouts(json)
      }
    
    }
  fetchWorkouts()
  },[])
  return (
    <div>
    
    {workouts && workouts.map((workout) =>(
        <Detailsworkout key={workout._id} workout={workout} />
      ))}
    </div>
  )
}

export default Dashboard
