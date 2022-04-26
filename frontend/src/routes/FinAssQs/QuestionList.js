import React from 'react';
import axios from 'axios';

export default class QuestionList extends React.Component {
  state = {
    Question:[]
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/Question/')
      .then(response => {
        const Question = response.data;
        this.setState({Question});
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.Question.map(Question =>
            <li key={Question.question_number}>{Question.question_text}</li>
            )
        }
      </ul>
    )
  }
}