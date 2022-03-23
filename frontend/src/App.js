import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="registerNewUser">
        <h3>
          New User? Register Below!
        </h3>
        <p>
          Username:
        </p>
        <p>
          e-mail:
        </p>
        <p>
          Create Password:
        </p>
        <p>
          Confirm Password:
        </p>
        <a
          className="completionButton"
        >
         <strong>REGISTER</strong>
        </a>
    </div>
  );
}

export default App;
