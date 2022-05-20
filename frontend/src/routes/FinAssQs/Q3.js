import React from 'react';
import ReactDom from 'react-dom';
import '../FinAssQs/Questions.css';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Box} from "@mui/system";
import {Link } from 'react-router-dom';
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
        this.getQuestion3();
      }
        getQuestion3(){
            fetch('http://127.0.0.1:8000/api/Question/?question_number=3')
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
      this.getChoice3();
    }
      getChoice3(){
          fetch('http://127.0.0.1:8000/api/Choice/?question=3')
            .then(results => (results.json()))
            .then(results => this.setState({'Choice': results}))
        }
render() {
  return (
    <ul>
      {this.state.Choice.map(function(index) {
        return <p><Box size="large" mt={2} style={{ flexDirection: "row" }}>
        <Button color="primary" size="large" variant="text">
          {index.A}
        </Button>
      </Box>
      
      <Box size="large" mt={2} style={{ flexDirection: "row" }}>
        <Button color="primary" size="large"  variant="text">
        {index.B}
        </Button>
      </Box>

      <Box size="large" mt={2} style={{ flexDirection: "row" }}>
        <Button color="primary" size="large"  variant="text">
        {index.C}
        </Button>
        </Box> </p>
      }
      )}
    </ul>
  );
}
}
function BudgetingQ3(){
    return(
<div> 
<div className="Logout">
    <h1> LOGOUT </h1>
    <nav>
    <Link to="/"> <img src = "./Images/HorizontalMMCLogo.jpg" alt ="MMC" className="Left"/> </Link></nav>

<div className="Spacing"> 

<Stepper alternativeLabel activeStep={2} connector={null}>
          {steps.map((label) => (
            <Step key={label}> <img src = "./Images/questionspiggy.png" alt ="Stepper" className="PiggyStepper"/> 
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
</Stepper> 

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
    <h3> <Ely /> </h3>

    <Rachael/>



</div> 
</div>
</div>
</div>
    )
}
export default BudgetingQ3;