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
