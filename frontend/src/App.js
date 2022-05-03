import React from 'react';
import './App.css';
import {Link } from 'react-router-dom';
import logo from './horizontallogo.png';


console.log(logo); 

function App() {
  return (
    <div className="welcome">
      <div className="logo">
      <img src={logo} alt="Logo"/>
      </div>
      <div className="welcome">Welcome</div>
      <div className="returningusers">Returning Users</div>
      <div className="username">Username</div>
      <div className="password">Password</div>
      <div className="signin">SIGN IN</div>
      <div className="newusers">New Users</div>
      <div className="username">Username</div>
      <div className="email">Email Address</div>
      <div className="password">Create Password</div>
      <div className="password">Confirm Password</div>
      <div className="name">First Name</div>
      <div className="register">REGISTER</div>
    </div>
  );
}

export default App;
