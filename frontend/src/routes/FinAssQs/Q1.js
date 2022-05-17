import React from 'react';
import '../FinAssQs/Questions.css';
import QuestionList from './QuestionList.js';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Button } from '@material-ui/core/';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function BudgetingQ1() {
  return (
    <div>
      <div className="Logout">
        {' '}
        <h1> LOGOUT </h1>
        <nav>
          <Link to="/">
            {' '}
            <img src="./Images/HorizontalMMCLogo.jpg" alt="MMC" className="Left" />{' '}
          </Link>
        </nav>
        <div className="Spacing">
          <div className="AlignIcon">
            <nav>
              <Link to="/Q1">
                <img
                  src="./Images/selected transparent icon piggy.png"
                  alt="MMC"
                  className="AlignIcon"
                />
              </Link>
            </nav>
            <nav>
              <Link to="/Q2">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
            <nav>
              <Link to="/Q3">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
            <nav>
              <Link to="/Q4">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
            <nav>
              <Link to="/Q5">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
            <nav>
              <Link to="/Q6">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
            <nav>
              <Link to="/Q7">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
            <nav>
              <Link to="/Q8">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
            <nav>
              <Link to="/Q9">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
            <nav>
              <Link to="/Q10">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
            <nav>
              <Link to="/Q11">
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
              </Link>
            </nav>
          </div>

          <Link to="/Q2">
            {' '}
            NEXT
            <Button color="primary" size="large">
              <IconButton color="primary" size="large">
                <ChevronRightSharpIcon fontSize="large" />
              </IconButton>
            </Button>{' '}
          </Link>

          <div className="BudgetingQuestions">
            <h3>Budgeting Question 1 : </h3>
            <QuestionList />
            <Grid container="">
              <Box mt={2}>
                <Button size="large" color="primary" variant="contained">
                  A
                </Button>
              </Box>

              <Box mt={2}>
                <Button size="large" color="primary" variant="contained">
                  B
                </Button>
              </Box>

              <Box mt={2}>
                <Button size="large" color="primary" variant="contained">
                  C
                </Button>
              </Box>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BudgetingQ1;
