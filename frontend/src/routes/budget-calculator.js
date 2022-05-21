import React from "react";
import {Link} from 'react-router-dom';
import "./BugdetCal.css";
export default function Budget() {
    return (
      <div>
       {/* 
         <div className="finassesslink">
          <nav>
            <Link to="/financial-assessment">Financial Assessment</Link>
          </nav>
        </div>
        <div>
          <img src={require('../transparent icon piggy.png')} className="pigicon" />
        </div>
        <div className="budgetcallink">
          <nav>
            <Link to="/budget-calculator">Budget Calculator</Link>
          </nav>
        </div>
        <div className="logout">
          <nav>
            <Link to="/">LOGOUT</Link>
          </nav> */}
        {/* </div> */}

        <nav>
          <Link to="/">
            <img src="./Images/HorizontalMMCLogo.jpg" alt="MMC" className="Left" />{' '}
          </Link>
         </nav>
         <img src="./Images/Coin.gif" alt="Coin" className="Coin" />
        <h1 className="Words"> COMING SOON </h1>

        <h3 className="Tab"> Budget Calculator</h3>
        </div>
    );
  }