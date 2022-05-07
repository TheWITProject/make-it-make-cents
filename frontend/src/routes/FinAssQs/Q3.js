import React from 'react';
import '../FinAssQs/Questions.css';
import QuestionList from './QuestionList.js';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Box} from "@mui/system";
import {Link } from 'react-router-dom';
function BudgetingQ3(){
    return(
<div> 
<div className="Logout">
    <h1> LOGOUT </h1>
    <nav>
    <Link to="/"> <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left"/> </Link></nav>

<div className="Spacing"> 

<Link to="/Q2"> 
<Button color="primary" size="large" > 
<IconButton color="primary" size="large"> 
<ChevronLeftSharpIcon fontSize="large" />
</IconButton>  BACK
</Button>  
</Link>  

<Link to="/Q4"> 
<Button color="primary" size="large"> NEXT
<IconButton color="primary" size="large"> 
<ChevronRightSharpIcon fontSize="large" />
</IconButton> 
</Button> 
 </Link> 

<div className="BudgetingQuestions">  
    <h2>Budgeting Question 3 : </h2>
    <QuestionList/>
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


</div> 
</div>
</div>
</div>
    )
}
export default BudgetingQ3;