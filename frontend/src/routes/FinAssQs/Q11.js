import React from 'react';
import '../FinAssQs/Questions.css';
import QuestionList from './QuestionList.js';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom';
import {Box} from "@mui/system";
function BudgetingQ11(){
    return(
<div> 
<div className="Logout">
    <h1> LOGOUT </h1>
<nav>
    <Link to="/"> <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left"/> </Link></nav>


<div className="Spacing"> 
<Button color="primary" size="large" > 
<IconButton color="primary" size="large"> 
<ChevronLeftSharpIcon fontSize="large" />
</IconButton> <Link to="/Q10"> BACK</Link>   
</Button>


<div className="BudgetingQuestions">  
    <h2>Budgeting Question 11 : </h2>
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