import React from 'react';
import ReactDom from 'react-dom';
import '../FinAssQs/Questions.css';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

class Ely extends React.Component {
  constructor() {
    super();
    this.state = {
      Question: [],
    };
  }

  componentDidMount() {
    this.getQuestion6();
  }
  getQuestion6() {
    fetch('http://127.0.0.1:8000/api/Question/?question_number=6')
      .then((results) => results.json())
      .then((results) => this.setState({ Question: results }));
  }
  render() {
    return (
      <ul>
        {this.state.Question.map(function (index) {
          return <p> {index.question_text}</p>;
        })}
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
      this.getChoice6();
    }
      getChoice6(){
          fetch('http://127.0.0.1:8000/api/Choice/?question=6')
            .then(results => (results.json()))
            .then(results => this.setState({'Choice': results}))
        }
render() {
  return (
    <ul>
      {this.state.Choice.map(function(index) {
        return <p> <Box size="large" mt={2} style={{ flexDirection: "row" }}>
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
function BudgetingQ6() {
  return (
    <div>
      <div className="Logout">
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
                <img src="./Images/transparent icon piggy.png" alt="MMC" className="AlignIcon" />
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
                <img
                  src="./Images/selected transparent icon piggy.png"
                  alt="MMC"
                  className="AlignIcon"
                />
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

          <Link to="/Q5">
            <Button color="primary" size="large">
              <IconButton color="primary" size="large">
                <ChevronLeftSharpIcon fontSize="large" />
              </IconButton>{' '}
              BACK
            </Button>
          </Link>

          <Link to="/Q7">
            <Button color="primary" size="large">
              {' '}
              NEXT
              <IconButton color="primary" size="large">
                <ChevronRightSharpIcon fontSize="large" />
              </IconButton>
            </Button>
          </Link>

          <div className="BudgetingQuestions">
            <h3>
              <Ely />{' '}
            </h3>
            <Rachael />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BudgetingQ6;
