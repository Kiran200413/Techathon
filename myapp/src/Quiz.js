import React, { useState,useEffect } from 'react';
import './quiz.css'
import Button from 'react-bootstrap/Button';
import Navbar1 from './Navbar1';
import axios from 'axios';

const questionsData = [
    {
      question: 'Which programming language is used for styling web pages?',
      options: ['CSS', 'HTML', 'JavaScript', 'Python'],
      correctAnswer: 'CSS'
    },
    {
      question: 'Which JavaScript framework is developed by Facebook?',
      options: ['React', 'Angular', 'Vue', 'Ember'],
      correctAnswer: 'React'
    },
    {
      question: 'Which tool is used for managing state in React applications?',
      options: ['Redux', 'Webpack', 'Babel', 'Jest'],
      correctAnswer: 'Redux'
    },
    {
      question: 'Which CSS preprocessor language adds features like variables and mixins to CSS?',
      options: ['Sass', 'Less', 'Stylus', 'PostCSS'],
      correctAnswer: 'Sass'
    },
    {
      question: 'Which method in JavaScript is used to schedule a function to be executed after a given delay?',
      options: ['setTimeout', 'setInterval', 'setDelay', 'setTime'],
      correctAnswer: 'setTimeout'
    },
    
        {
          question: 'Which CSS property is used to control the spacing between elements?',
          options: ['margin', 'padding', 'border', 'spacing'],
          correctAnswer: 'margin'
        },
        {
          question: 'Which HTML tag is used to define an unordered list?',
          options: ['<ul>', '<ol>', '<li>', '<dl>'],
          correctAnswer: '<ul>'
        },
        {
          question: 'Which event is triggered when the user clicks on an HTML element?',
          options: ['click', 'hover', 'submit', 'keydown'],
          correctAnswer: 'click'
        },
        {
          question: 'Which CSS property is used to change the color of text?',
          options: ['color', 'background-color', 'text-color', 'font-color'],
          correctAnswer: 'color'
        },
        {
          question: 'Which HTML tag is used to define a hyperlink?',
          options: ['<a>', '<link>', '<href>', '<url>'],
          correctAnswer: '<a>'
        },
        
       
      ];
      

  
  

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState(new Array(questionsData.length).fill(''));
  const [showScore, setShowScore] = useState(false);
  const [userScore, setuserScore] = useState(0);

let score = 0;

 

  const handleAnswerOptionClick = (index, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  

  const handleSubmit = () => {
    setShowScore(true);
    
    userAnswers.forEach((userAnswer, index) => {
      if (questionsData[index].correctAnswer === userAnswer) {
        score++;
      }
      setuserScore(score);
    });
  };
  


  return (
    <div className='quiz'>
      
      {showScore ? (
        <div className='quiz__score'>
         
          <h3 align="center">Quiz Result</h3>
          <h2>Your Score: {userScore} out of {questionsData.length}</h2>
        </div>
      ) : (
        <div className='content'>
          <h3 align="center">Quiz</h3>
          
          {questionsData.map((question, index) => (
            <div key={index} className='quiz__question'>
              <h6>{index + 1}.&nbsp;&nbsp;{question.question}</h6>
              <div className='quiz__options'>
                {question.options.map((option) => (
                  <label key={option}>
                    <input
                      type='radio'
                      name={`question_${index}`}
                      value={option}
                      onChange={() => handleAnswerOptionClick(index, option)}
                    />
                    {option}&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                ))}
              </div><br />
            </div>
          ))}
          <br />
          <Button variant="success" onClick={() => { handleSubmit() }}>Submit</Button>
        </div>
      )}
      
    </div>
    
  )
  
}

export default Quiz;