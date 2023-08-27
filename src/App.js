import './App.css';
import Home from './components/Home';
import Exercises from './components/Exercises';
import Bmi from './components/Bmi';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Navbar from './components/navbar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Routes>
        <Route exact path='/'element={<Home/>}/>
        <Route exact path='/exercises' element={<Exercises/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route  exact path='/bmi' element={<Bmi/>}/>

     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
