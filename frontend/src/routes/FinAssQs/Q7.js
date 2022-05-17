import React from 'react';
import ReactDom from 'react-dom';
import '../FinAssQs/Questions.css';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom';
import {Box} from "@mui/system";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = ['', '', '','','','','','','','',''];

class Ely extends React.Component{
    constructor(){
        super()
        this.state= {
          Question: []
        }
      }
    
      componentDidMount() {
        this.getQuestion7();
      }
        getQuestion7(){
            fetch('http://127.0.0.1:8000/api/Question/?question_number=7')
              .then(results => (results.json()))
              .then(results => this.setState({'Question': results}))
          }
render() {
    return (
      <ul>
        {this.state.Question.map(function(index) {
          return <p> {index.question_text}</p>
        }
        )}
      </ul>
    );
  }
}

class Rachael extends React.Component{
  constructor(){
      super()
      this.state= {
        Choice: []
      }
    }
  
    componentDidMount() {
      this.getChoice7();
    }
      getChoice7(){
          fetch('http://127.0.0.1:8000/api/Choice/?question=7')
            .then(results => (results.json()))
            .then(results => this.setState({'Choice': results}))
        }
render() {
  return (
    <ul>
      {this.state.Choice.map(function(index) {
        return <p> <Box size="large" mt={2} style={{ flexDirection: "row" }}>
        <Button color="neutral" size="large" variant="contained">
          {index.A}
        </Button>
      </Box>
      
      <Box size="large" mt={2} style={{ flexDirection: "row" }}>
        <Button size="large"  variant="contained">
        {index.B}
        </Button>
      </Box>

      <Box size="large" mt={2} style={{ flexDirection: "row" }}>
        <Button size="large"  variant="contained">
        {index.C}
        </Button>
        </Box> </p>
      }
      )}
    </ul>
  );
}
}
  
function BudgetingQ7(){
    return(
<div> 
<div className="Logout">
    <h1> LOGOUT </h1>
    <nav>
    <Link to="/"> <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left"/> </Link></nav>


<div className="Spacing"> 
<Stepper alternativeLabel activeStep={6} connector={null}>
          {steps.map((label) => (
            <Step key={label}> <img src = "./Images/questionspiggy.png" alt ="Stepper" className="PiggyStepper"/> 
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
</Stepper> 

<Link to="/Q6">
<Button color="primary" size="large" > 
<IconButton color="primary" size="large"> 
<ChevronLeftSharpIcon fontSize="large" />
</IconButton>  BACK  
</Button>
</Link> 

<Link to="/Q8">
<Button color="primary" size="large">  NEXT 
<IconButton color="primary" size="large"> 
<ChevronRightSharpIcon fontSize="large" />
</IconButton>
</Button> 
</Link> 

<div className="BudgetingQuestions">  
    <h3> <Ely/></h3>
    <Rachael/>



</div> 
</div>
</div>
</div>
    )
}
export default BudgetingQ7;