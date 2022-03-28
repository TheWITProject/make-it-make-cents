import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="welcome">
      <div className="logo">Location for logo</div>
      <div className="about-us">
        <p>MAKE IT MAKE CENTS</p>
        <p>ABOUT US</p>
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
          <Link to="/about-us">About</Link> | <Link to="/financial-assessment">FinAssess</Link> |
          <Link to="/budget-calculator">Budget</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
