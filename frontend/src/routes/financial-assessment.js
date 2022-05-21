import '../App.css';
import logo from '../horizontallogo.png';
import img from '../start piggy.png';
import { Link } from 'react-router-dom';

export default function FinAssess() {
  return (
    <div className="financialStart">
      <div className="tabs">
        <div classname="mmclogo">
          <nav>
            <Link to="/Home">
              <img src={logo} className="mmclogo" />
            </Link>
          </nav>
        </div>
        <div className="finassesslink">
          <nav>
            <Link to="/financial-assessment">
              <img src={require('../Asset 6.png')} className="finassesslink" />
            </Link>
          </nav>
        </div>
        <div className="budgetcallink">
          <nav>
            <Link to="/budget-calculator">
              <img src={require('../Asset 7.png')} className="budgetcallink" />
            </Link>
          </nav>
        </div>
        <div className="logout">
          <nav>
            <Link to="/">LOGOUT</Link>
          </nav>
        </div>
      </div>
      <div className="middletext">Put Your Financial Knowledge to the Test</div>
      <div className="startpiggy">
        <nav>
          <Link to="/Q1">
            <img src={img} className="startpiggy" />
          </Link>
        </nav>
      </div>
      <div className="getstarted">Click the piggy to get started!</div>
    </div>
  );
}
