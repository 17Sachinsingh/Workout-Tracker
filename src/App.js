import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Exercises from './components/Exercises';
import Bmi from './components/Bmi';
import Dashboard from './components/Dashboard';
import Createexercise from './components/Createexercise';
import Usercreate from './components/Usercreate';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
function App() {
  const [isLoggedIn2, setIsLoggedIn2] = useState(false);
  const handleLogout = () => {
  
    setIsLoggedIn2(false);
  };
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar isLoggedIn2={isLoggedIn2}  onLogout={handleLogout} />
     <Routes>
        <Route exact path='/'element={<Home/>}/>
        <Route exact path='/exercises' element={<Exercises/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route  exact path='/bmi' element={<Bmi/>}/>
        <Route  exact path='/create-exercise' element={<Createexercise/>}/>
        <Route  exact path='/user' element={<Usercreate/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route path="/signin" element={<Signin setIsLoggedIn2={setIsLoggedIn2} />} />
     </Routes>
    <Footer/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
