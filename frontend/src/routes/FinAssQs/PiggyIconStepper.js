import * as React from 'react';
import '../FinAssQs/Questions.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link } from 'react-router-dom';


const steps = ['', '', '', '','', '',];

const getQuestionPages =(steps)=>{
        if (steps===1) {
           return <Link to="/Q1"> </Link> 
        }
        else if (steps ===2){
            return <Link to="/Q2"> </Link> 
        }
        else if (steps ===3){
            return <Link to="/Q3"> </Link> 
        }    
        else if (steps ===4){
            return <Link to="/Q4"> </Link>     
        }   
}
export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0) ;
  const [skipped, setSkipped] = React.useState(new Set());
 
 
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    
    <Box sx={{ width: '100%' }} sx={{ color: 'primary'}} > 
      <Stepper activeStep={activeStep} connector={null} alternativeLabel > 
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption" >Optional</Typography> 
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} >  <img src = "./Images/questionspiggy.png" alt ="Stepper" className="PiggyStepper"/>
              <StepLabel  {...labelProps} >{label} 
                </StepLabel > 
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }} >
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 3 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            
            <Button
              color="primary"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              BACK
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext} >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            {getQuestionPages}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}