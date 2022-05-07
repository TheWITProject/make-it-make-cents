import React from 'react';
import ReactDom from 'react-dom';

export default class QuestionList extends React.Component {
  
  constructor(){
    super()
    this.state= {
      Question: []
    }
  }

  componentDidMount() {
    this.getQuestion1();
    this.getQuestion2();
    this.getQuestion3();
    this.getQuestion4();
    this.getQuestion5();
    this.getQuestion6();
    this.getQuestion7();
    this.getQuestion8();
    this.getQuestion9();
    this.getQuestion10();
    this.getQuestion11();
  }
   getQuestion1(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=1')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion2(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=2')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion3(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=3')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion4(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=4')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion5(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=5')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion6(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=6')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion7(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=7')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion8(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=8')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion9(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=9')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion10(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=10')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }
  getQuestion11(){
    fetch('http://127.0.0.1:8000/api/Question/?question_number=11')
      .then(results => (results.json()))
      .then(results => this.setState({'Question': results}))
  }

  render() {
    return (
      <ul>
        {this.state.Question.map(function(Question, index) {
          return <p> {Question.question_text}</p>
        }
        )}
      </ul>
    );
  }

}

ReactDom.render(
  <QuestionList/>,
  document.getElementById('root')
)


