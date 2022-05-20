import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './horizontallogo.png';

console.log(logo);

function App() {
  return (
    <div className="container">
      <div className="welcome">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div className="welcome">
            <p>Welcome</p>
          </div>
        </div>
        <div className="returningusers">
          <p>Returning Users</p>
        </div>
        <div className="username">
          <p>Username</p>
        </div>
        <div className="password">
          <p>Password</p>
        </div>
        <div>
          <img src={require('./welcomepage.png')} className="position" />
        </div>
        <nav>
          <Link to="/Home">
            <div className="signin">
              <p>SIGN IN</p>
            </div>
          </Link>
        </nav>
        <div className="line">
          <hr></hr>
        </div>
        <div className="newusers">
          <p>New Users</p>
        </div>
        <div className="name">
          <p>First Name</p>
        </div>
        <div className="username">
          <p>Username</p>
        </div>
        <div className="email">
          <p>Email Address</p>
        </div>
        <div className="password">
          <p>Create Password</p>
        </div>
        <div className="password">
          <p>Confirm Password</p>
        </div>
        <div className="register">
          <p>REGISTER</p>
        </div>
      </div>
    </div>
  );
}

export default App;
