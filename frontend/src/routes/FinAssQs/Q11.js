import React from 'react';
import '../FinAssQs/Questions.css';
import QuestionList from './QuestionList.js';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom';
import {Box} from "@mui/system";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = ['', '', '','','','','','','','',''];
function BudgetingQ11(){
    return(
<div> 
<div className="Logout">
    <h1> LOGOUT </h1>
<nav>
    <Link to="/"> <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left"/> </Link></nav>


<div className="Spacing"> 

<Stepper alternativeLabel activeStep={10} connector={null}>
          {steps.map((label) => (
            <Step key={label}> <img src = "./Images/questionspiggy.png" alt ="Stepper" className="PiggyStepper"/> 
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
</Stepper> 

<Link to="/Q10">
<Button color="primary" size="large" > 
<IconButton color="primary" size="large"> 
<ChevronLeftSharpIcon fontSize="large" />
</IconButton>  BACK 
</Button>
</Link>  

<div className="BudgetingQuestions">  
    <h3>Budgeting Question 11 : </h3>
    <QuestionList/>

<Box mt={2} style={{ flexDirection: "row" }}>
<Box mt={2} style={{ flexDirection: "row" }}>
    <Button size="large" color ="primary" variant="contained"> A </Button> 


<Button size="large" color ="primary" variant="contained"> B </Button>
<Box mt={2}>
    <Button size="large" color ="primary" variant="contained"> C </Button>      
</Box>
</Box>
</Box>

<div> <Button color = "navy" size ="larger">
<Link to="/ResultsPage"> SUBMIT </Link>
</Button></div>

</div> 
</div>
</div>
</div>
    )
}
export default BudgetingQ11;