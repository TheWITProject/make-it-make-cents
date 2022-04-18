import '../App.css';
import logo from '../horizontallogo.png';
import image from '../piggy for tabs temporary.png';
import img from '../start piggy.png';
import { Link } from 'react-router-dom';

export default function FinAssess() {
    return (
      <div className="financialStart">
      <div className="logout">
        <h1>LOGOUT</h1>
        <h1><div className="tabs">
        <img src={logo} alt className="mmclogo"/>
      <nav>
          <Link to="/financial-assessment"><div>Financial Assessment</div></Link></nav>
        <div><Link to="/budget-calculator">Budget Calculator</Link></div></div></h1> 
        </div>
      <div className="middletext">
      <div>Put Your Financial Knowledge to the Test</div></div>  
      <div className="startpiggy">
      <img src={img} alt className="startpiggy"/>
      </div>
      <div className="getstarted">
      <div>Get Started</div></div> 
      </div>
    );
  }