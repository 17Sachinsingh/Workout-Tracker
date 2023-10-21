import React ,{useState} from 'react'
import '../styles/bmi.css'
const Bmi = () => {
  const [weight,setWeight]=useState(' ')
  const [height,setHeight]=useState(' ')
  const [bmi,setBmi]=useState(' ')
  const [message,setMessage]=useState(' ')
  let calcBmi = (event) => {
      //prevent submitting to the server
      event.preventDefault()
   
      if (weight === 0 || height === 0) {
        alert('Please enter a valid weight and height')
      } else {
        let bmi = (weight *10000 / (height * height) )
        setBmi(bmi.toFixed(1))
   
        // Logic for message
   
        if (bmi < 25) {
          setMessage('You are underweight')
        } else if (bmi >= 25 && bmi < 30) {
          setMessage('You are a healthy weight')
        } else {
          setMessage('You are overweight')
        }
      }
    }
   
   
    let reload = () => {
      setWeight('');
      setHeight(' ')
    
    
    
     
    }
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Weight (kgs)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height (cms)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
    </div>
  )
}

export default Bmi
