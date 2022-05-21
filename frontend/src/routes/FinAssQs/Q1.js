import React, {Component} from 'react';
import { render } from 'react-dom';
import '../FinAssQs/Questions.css';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import IconButton from '@material-ui/core/IconButton';
import { Button }from '@material-ui/core/';
import {Box} from "@mui/system";
import {Link} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { MMC } from '../Theme.js';


class Ely extends React.Component {
  constructor() {
    super();
    this.state = {
      Question: [],
    };
  }

  componentDidMount() {
    this.getQuestion1();
  }
  getQuestion1() {
    fetch('http://127.0.0.1:8000/api/Question/?question_number=1')
      .then((results) => results.json())
      .then((results) => this.setState({ Question: results }));
  }
  render() {
    return (
      <ul>
        {this.state.Question.map(function (index) {
          return <h3> {index.question_text}</h3>;
        })}
      </ul>
    );
  }
}


class Rachael extends React.Component{
  constructor(props){
      super(props)
      this.state= {
        Choice: [],
        Count: 0,
      }
    }

    incrementAlexis = ()=> {
      this.setState({ count: this.state.count +1});
  }

  incrementPerl = ()=> {
    this.setState({ count: this.state.count +2});
}

incrementKimShego = ()=> {
    this.setState({ count: this.state.count +3});
}

    componentDidMount() {
      this.getChoice1();
      this.incrementAlexis();
    }
      getChoice1(){
          fetch('http://127.0.0.1:8000/api/Choice/?question=1')
            .then(results => (results.json()))
            .then(results => this.setState({'Choice': results}))
        }
        
render(props) {
  return (
    <ul >
      {this.state.Choice.map(function(index) {
        return <p> 
          <ThemeProvider theme={MMC}>
          <Box size="large" mt={2} style={{ flexDirection: "row" }}>

          <Button 
            color="primary"
            size="large"
            variant ="text"
            
          >
          {index.A}
          </Button>
      </Box>
     

      <Box size="large" mt={2} style={{ flexDirection: "row" }}>
        <Button size="large" color="primary" variant ="text">
        {index.B}
        </Button>
      </Box>

      <Box  size="large" mt={2} style={{ flexDirection: "row" }}>
        <Button size="large"  color="primary" variant ="text" >
        {index.C} 
        </Button>
        
        </Box> 
        </ThemeProvider> </p>
      }
      )}
    </ul>
  );
}
}

function BudgetingQ1(props) {
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


<ThemeProvider theme={MMC}>
<Link to="/Q2"> 
<Button color="primary" size="large"> NEXT 
<IconButton color="primary" size="large"> 
<ChevronRightSharpIcon fontSize="large" />
</IconButton>
</Button> </Link> 
</ThemeProvider>

<div className="BudgetingQuestions">  

        <Ely/>
        <Rachael/>

          </div>
        </div>
      </div>
    </div>
  );
}
export default BudgetingQ1;
