import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FinAssess from './routes/financial-assessment';
import Home from './routes/Home';
import Budget from './routes/budget-calculator';
import BudgetingQ1 from './routes/FinAssQs/Questions';
import BudgetingQ2 from './routes/FinAssQs/Q2';
import BudgetingQ3 from './routes/FinAssQs/Q3';
import BudgetingQ4 from './routes/FinAssQs/Q4';
import BudgetingQ5 from './routes/FinAssQs/Q5';
import BudgetingQ6 from './routes/FinAssQs/Q6';
import BudgetingQ7 from './routes/FinAssQs/Q7';
import BudgetingQ8 from './routes/FinAssQs/Q8';
import BudgetingQ9 from './routes/FinAssQs/Q9';
import BudgetingQ10 from './routes/FinAssQs/Q10';
import BudgetingQ11 from './routes/FinAssQs/Q11';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="financial-assessment" element={<FinAssess />} />
        <Route path="Home" element={<Home />} />
        <Route path="budget-calculator" element={<Budget />} />
        <Route path="Questions" element={<BudgetingQ1 />} />
        <Route path="Q2" element={<BudgetingQ2 />} />
        <Route path="Q3" element={<BudgetingQ3 />} />
        <Route path="Q4" element={<BudgetingQ4 />} />
        <Route path="Q5" element={<BudgetingQ5 />} />
        <Route path="Q6" element={<BudgetingQ6 />} />
        <Route path="Q7" element={<BudgetingQ7 />} />
        <Route path="Q8" element={<BudgetingQ8 />} />
        <Route path="Q9" element={<BudgetingQ9 />} />
        <Route path="Q10" element={<BudgetingQ10 />} />
        <Route path="Q11" element={<BudgetingQ11 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
