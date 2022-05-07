import React from 'react';
import '../FinAssQs/Questions.css';
import QuestionList from './QuestionList.js';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import IconButton from '@material-ui/core/IconButton';
import {Grid, Button }from '@material-ui/core/';
import {Box} from "@mui/system";
import {Link } from 'react-router-dom';
import HorizontalLinearStepper from '../FinAssQs/PiggyIconStepper.js';
function BudgetingQ1(){
    return(
<div> 
<div className="Logout"> <h1> LOGOUT </h1>
    <nav>
    <Link to="/"> <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left"/> </Link></nav>


<div> <HorizontalLinearStepper/> </div>

<div className="Spacing"> 

<Link to="/Q2"> NEXT 
<Button color="primary" size="large"> 
<IconButton color="primary" size="large"> 
<ChevronRightSharpIcon fontSize="large" />
</IconButton>
</Button> </Link> 

<div className="BudgetingQuestions">  
    <h2>Budgeting Question 1 : </h2>
    <QuestionList/>
<Grid container = "">    
<Box mt={2}>
    <Button size="large" color ="primary" variant="contained">
        A
    </Button>
</Box>

<Box mt={2}>
    <Button size="large" color ="primary" variant="contained">
        B
    </Button>
</Box>

<Box mt={2}>
    <Button size="large" color ="primary" variant="contained">
        C
    </Button>
</Box>
</Grid> 
</div> 
</div>
</div>
</div>
    )
}
export default BudgetingQ1;