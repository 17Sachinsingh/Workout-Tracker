// import React from 'react'
// import { useEffect,useState } from 'react';
// import Detailsworkout from './Detailsworkout';
// const Dashboard = () => {
//   const [workouts,setWorkouts]=useState(null)
//   useEffect(()=>{
//     const fetchWorkouts=async () =>{
//       const response=await fetch('/api/workouts')
//       const json=await response.json()

//       if(response.ok){
//         setWorkouts(json)
//       }
    
//     }
//   fetchWorkouts()
//   },[])
//   return (
//     <div>
    
//     {workouts && workouts.map((workout) =>(
//         <Detailsworkout key={workout._id} workout={workout} />
//       ))}
//     </div>
//   )
// }

// export default Dashboard
import React, { useEffect, useState } from 'react';
import Detailsworkout from './Detailsworkout';

const Dashboard = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      {workouts && workouts.length > 0 ? (
        workouts.map((workout) => (
          <Detailsworkout key={workout._id} workout={workout} />
        ))
      ) : (
        <p style={{
          
          fontSize: '32px',
          margin: '18%',
          textAlign: 'center',
          color:'#1976d2'
        }}>No workouts available at the moment.</p>
      )}
    </div>
  );
};

export default Dashboard;
