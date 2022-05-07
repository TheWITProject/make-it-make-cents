import '../App.css';
import img from '../start piggy.png';
import { Link } from 'react-router-dom';

export default function FinAssess() {
    return (
      <div className="financialStart">
        <div className="tabs">
        <div classname="mmclogo">
        <nav>
      <Link to="/"> <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left"/> </Link></nav>
        </div>
        <div className="finassesslink">
        <nav>
          <Link to="/financial-assessment">Financial Assessment</Link></nav>
        </div> 
        <div>
        <img src={require('../transparent icon piggy.png')} className="pigicon"/>
        </div>
        <div className="budgetcallink">
        <nav>
          <Link to="/budget-calculator">Budget Calculator</Link></nav>
        </div>
        <div className="logout">LOGOUT</div>
        </div>
        <div className="middletext">Put Your Financial Knowledge to the Test</div>
        <div className="startpiggy">
         <Link to="/Q1"> <img src={img} className="startpiggy"/> </Link>
        </div>

        <nav className="getstarted"> <Link to = "/Q1" > Get Started </Link> </nav>
        </div>
    );
  }