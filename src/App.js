import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    questions: [
      'How do you describe yourself as a developer?',
      'Select the JavaScript based technologies',
      'Introduce a Palindrome',
      'Write a sentence in the left box. Write the same sentence but reversed in the right box',
    ],
    answers: {
      'AngularJS': true,
      'Ember': true,
      'VueJS': true,
      'Java': false,
      'C#': false,
    },
    usersAnswers: [
      '',
      {
        'AngularJS': false,
        'Ember': false,
        'VueJS': false,
        'Java': false,
        'C#': false,
      },
      '',
      ['','']
    ]
  }


  return() {
    return (
      <div className="App">

      </div>
    )
  };
}

export default App;
