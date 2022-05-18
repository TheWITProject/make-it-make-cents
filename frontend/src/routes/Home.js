import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <div> 
      <div className="Logout">
        <h1> LOGOUT </h1>
        <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC"/> 
      <div className="WelcomeUser"> 
        <p>Hello, (User's Name) ! What would you like to do today? </p>
      <div className="Button1"> <h1 ><nav><Link to="/financial-assessment">Test Your Financial Knowledge</Link></nav>  </h1> </div>
      <div className="Button2"> <h1 > <nav>
          <Link to="/budget-calculator"> Create A Budget </Link>
        </nav></h1> </div>
      </div>
      </div>
      </div>
    );
  }