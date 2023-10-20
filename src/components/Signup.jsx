import React, { useState } from "react";
import "../styles/signup.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name ,setName]=useState()
    const [email ,setEmail]=useState()
    const [password ,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const credential={name,email,password}
        const response = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify(credential),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        navigate('/signin')
    }
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="Name">
            {" "}
            Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="Name"
            placeholder=" Name"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="email">
          <label className="form__label" htmlFor="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="footer-form">
        <button type="submit" className="btn" onClick={handleSubmit} style={{fontSize:'medium',padding:'10px'}}>
          SIGN UP
        </button>
        <h4 style={{marginTop:'10px' , marginBottom:'10px', textAlign:'center'}}>Already have an account </h4>
        <Link to={"/signin"}>
          <Button variant="contained" sx={{marginLeft:'10px'}}>Sign In</Button>
        </Link>
      </div>
     
    </div>
  );
};

export default Signup;
