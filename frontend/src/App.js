import React from 'react';
import './App.css';
import {Link } from 'react-router-dom';
import Coins from "./video/trimmedCoinRain.mp4";

function App() {
  return (
    <div className="welcome">

      <div>
      <video autoPlay loop muted playsInline
      style={{
          position: "absolute",
          width :"100",
          Left: "100",
          Right:"100",
          height:"100",
          objectFit:"cover",
          zIndex: "-1",

        }}
      >
        <source src ={Coins} type ="video/mp4"/>
      </video>
      </div>
      <div>
      <img src="./Images/HorizontalMMCLogo.jpg" alt="MMC" className="First" />
      </div>
      <div className="welcome"><p>Welcome</p></div>
      <div className="returningusers"><p>Returning Users</p></div>
      <div className="username"><p>Username</p></div>
      <div className="password"><p>Password</p></div>
      <div className="signin"><p>SIGN IN</p></div>
      <div className="newusers"><p>New Users</p></div>
      <div className="username"><p>Username</p></div>
      <div className="email"><p>Email Address</p></div>
      <div className="password"><p>Create Password</p></div>
      <div className="password"><p>Confirm Password</p></div>
      <div className="name"><p>First Name</p></div>
      <div className="register"><p>REGISTER</p></div>
    </div>
  );
}

export default App;
