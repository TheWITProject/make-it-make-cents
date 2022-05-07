import React from 'react';
import '../FinAssQs/Questions.css';
import {Link} from 'react-router-dom';

function AlexisPage(){
    return(
    <div className="start"> 
    <div className="tabs">
    <nav>
    <Link to="/">
    <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left"/> </Link></nav>
    
    <div className="Logout"> <h1 classname = "Logout"> LOGOUT </h1>
    <div className="finassesslink">
    <nav>
        <Link to="/financial-assessment">Financial Assessment</Link></nav>
    
    <div className="budgetcallink">
    <nav>
        <Link to="/budget-calculator">Budget Calculator</Link></nav>
    </div>    
    </div>
    </div>
    </div>
    <div>
     <h1 className = "According"> According to your results you fit our profile for ...</h1>
    <div className ="Alexis"> <h1>ALEXIS</h1> 
    <div className="Box" > <h1> You tend to overspend and you have a hard time sticking to a budget.</h1> </div>
    
    <h1 className="Advice"> Our advice: </h1>
    <h2 className="Recommendation"> We need to work on our spending habits and create a budgeting plan to accumulate an emergency fund or savings account. Here’s some resources that explain the importance of budgeting, savings and emergency funds. We recommend reading up on these articles to instill better budgeting habits. </h2>
    
    <div className='Links'> <p>Link 1 </p>      <p>Link 2</p>            Link 3</div> 
    </div>
    </div>

    </div>
    )


}
export default AlexisPage;