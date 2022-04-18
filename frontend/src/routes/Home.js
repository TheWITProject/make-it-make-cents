import React from 'react';
import '../App.css';

export default function Home() {
    return (
      <div> 
      <div className="Logout">
        <h1> LOGOUT </h1>
        <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left" /> 
      <div className="WelcomeUser">
        <h2>Hello, (User's Name) ! What would you like to do today? </h2>
      <div className="Button1"> <h1 > Test Your Financial Knowledge  </h1><button> Click here </button> </div>
      <div className="Button2"> <h1 >  Create A Budget </h1><button> Click here </button> </div>
      </div>
      </div>
      </div>
    );
  }