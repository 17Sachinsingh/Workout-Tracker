import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import SuccessCard from "./SuccessCard";

 

const Signin = ({setIsLoggedIn2 }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); 
 


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        setUserName(data.name); 
        setIsLoggedIn(true); 
        setIsLoggedIn2(true);
       
        
      } else {
        console.error("Login failed");
        alert("Wrong credentials. Please try again.");
        setEmail(""); 
        setPassword(""); 
        setIsLoggedIn(false);
        setIsLoggedIn2(false);

        setUserName(""); 
      }
    } catch (error) {
      console.error("Login failed:", error);
      
    }
  };

  return (
    <div className="form">
      {isLoggedIn ? (
        
        <SuccessCard userName={userName} />
      ) : (
        <div>
          <div className="form-body">
            <div className="email">
              <label className="form__label" htmlFor="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <label className="form__label" htmlFor="password">
                Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="footer-form">
            <button type="submit" className="btn" onClick={handleSubmit} style={{padding:'10px', fontSize:'medium'}}>
              SIGN IN
            </button>
            <h4 style={{ marginTop: "10px", marginBottom: "10px", textAlign: "center" }}>
              Don't have an account yet?
            </h4>
            <Link to={"/signup"}>
              <Button variant='contained' sx={{ marginLeft: '10px' }}>Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
