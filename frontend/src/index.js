import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FinAssess from "./routes/financial-assessment";
import About from "./routes/about-us";
import Budget from "./routes/budget-calculator";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="financial-assessment" element={<FinAssess />} />
      <Route path="about-us" element={<About />} />
      <Route path="budget-calculator" element={<Budget />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
