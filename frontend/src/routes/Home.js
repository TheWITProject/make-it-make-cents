import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="home" >
        <h1 className="Logout"> <Link to="/"> LOGOUT </Link></h1>


       <img src="./Images/HorizontalMMCLogo.jpg" alt="MMC" className="Left" />
        <div>
        <div >
          <h1 className="WelcomeUser"> Hello, (User's Name) ! What would you like to do today? </h1>
          <div className="Button1">
            {" "}
            <h1>
              <nav>
                <Link to="/financial-assessment">
                  Test Your Financial Knowledge
                </Link>
              </nav>{" "}
            </h1>{" "}
          </div>
          <div className="Button2">
            {" "}
            <h1>
              {" "}
              <nav>
                <Link to="/budget-calculator"> Create A Budget </Link>
              </nav>
            </h1>{" "}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
