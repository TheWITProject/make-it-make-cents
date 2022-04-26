import React from 'react';
import '../FinAssQs/Questions.css';
import QuestionList from './QuestionList.js';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom';
function BudgetingQ1(){
    return(
<div> 
<div className="Logout">
    <h1> LOGOUT </h1>
<img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left"/>


<div className="Spacing"> 

<Button color="primary" size="large"> <Link to="/Q2"> NEXT </Link> 
<IconButton color="primary" size="large"> 
<ChevronRightSharpIcon fontSize="large" />
</IconButton>
</Button> 

<div className="BudgetingQuestions">  
    <h2>Budgeting Question 1 : </h2>
    <QuestionList/>



</div> 
</div>
</div>
</div>
    )
}
export default BudgetingQ1;