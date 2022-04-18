import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './horizontallogo.png';

console.log(logo); 

function App() {
  return (
    <div className="welcome">
      <div className="logo">
      <img src={logo} alt="Logo" className="center" />
      </div>
      <div className="login">Username:</div>
      <div className="login">Password:</div>
      <div className="signinbutton">
        <button> Sign in </button>
      </div>
      <div className="registerNewUser">
        <h3>New User? Register Below!</h3>
        <div className="username">Username:</div>
        <div className="email">e-mail:</div>
        <div className="password">Create Password:</div>
        <div className="password">Confirm Password:</div>
        <a className="completionButton" href="/">
          <strong>REGISTER</strong>
        </a>
      </div>
      <div className="links">
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <Link to="/Home">Home</Link> | <Link to="/financial-assessment">FinAssess</Link> |
          <Link to="/budget-calculator">Budget</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
