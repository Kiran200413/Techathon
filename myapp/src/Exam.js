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
        {
          question: 'Which JavaScript method is used to add a new item to the end of an array?',
          options: ['push()', 'add()', 'append()', 'insert()'],
          correctAnswer: 'push()'
        },
        {
          question: 'Which CSS property is used to make text italic?',
          options: ['font-style', 'text-decoration', 'italicize', 'italic'],
          correctAnswer: 'font-style'
        },
        {
          question: 'Which HTML tag is used to define a table row?',
          options: ['<tr>', '<table>', '<td>', '<th>'],
          correctAnswer: '<tr>'
        },
        {
          question: 'Which JavaScript operator is used to compare the equality of two values?',
          options: ['==', '===', '!=', '!=='],
          correctAnswer: '==='
        },
        {
          question: 'Which CSS property is used to create rounded corners on elements?',
          options: ['border-radius', 'round-corners', 'corner-radius', 'border-style'],
          correctAnswer: 'border-radius'
        },
        {
          question: 'Which HTML tag is used to define emphasized text?',
          options: ['<em>', '<strong>', '<i>', '<b>'],
          correctAnswer: '<em>'
        },
        {
          question: 'Which JavaScript method is used to remove the last item from an array?',
          options: ['pop()', 'remove()', 'delete()', 'slice()'],
          correctAnswer: 'pop()'
        },
        {
          question: 'Which CSS property is used to set the font size?',
          options: ['font-size', 'text-size', 'size', 'font-style'],
          correctAnswer: 'font-size'
        },
        {
          question: 'Which HTML tag is used to define a division or a section in an HTML document?',
          options: ['<div>', '<section>', '<span>', '<article>'],
          correctAnswer: '<div>'
        },
        {
          question: 'Which JavaScript method is used to concatenate two or more strings?',
          options: ['concat()', 'join()', 'merge()', 'combine()'],
          correctAnswer: 'concat()'
        },
        {
            question: 'What does the "C" stand for in CSS?',
            options: ['Cascading', 'Creative', 'Catching', 'Coding'],
            correctAnswer: 'Cascading'
          },
          {
            question: 'Which CSS property is used to set the background color of an element?',
            options: ['background-color', 'color', 'bgcolor', 'background'],
            correctAnswer: 'background-color'
          },
          {
            question: 'Which JavaScript method is used to round a number to the nearest integer?',
            options: ['Math.round()', 'Math.floor()', 'Math.ceil()', 'Math.random()'],
            correctAnswer: 'Math.round()'
          },
          {
            question: 'Which HTML tag is used to define a list item in an ordered list?',
            options: ['<li>', '<ol>', '<ul>', '<dl>'],
            correctAnswer: '<li>'
          },
          {
            question: 'What is the purpose of the HTML <header> tag?',
            options: ['To define a paragraph', 'To define a navigation section', 'To define introductory content', 'To define a page header'],
            correctAnswer: 'To define a page header'
          },
          {
            question: 'Which JavaScript keyword is used to declare a variable that cannot be reassigned?',
            options: ['let', 'const', 'var', 'static'],
            correctAnswer: 'const'
          },
          {
            question: 'Which CSS property is used to control the alignment of text?',
            options: ['text-align', 'align', 'text-position', 'text-style'],
            correctAnswer: 'text-align'
          },
          {
            question: 'What does "HTTP" stand for?',
            options: ['Hyper Text Transfer Protocol', 'Hyper Transfer Text Protocol', 'High Transfer Text Protocol', 'High Text Transfer Protocol'],
            correctAnswer: 'Hyper Text Transfer Protocol'
          },
          {
            question: 'Which HTML tag is used to create a clickable button?',
            options: ['<button>', '<a>', '<input>', '<div>'],
            correctAnswer: '<button>'
          },
          {
            question: 'What does the CSS property "display: none;" do?',
            options: ['Hides the element', 'Shows the element as a block', 'Aligns the element to the right', 'Makes the element transparent'],
            correctAnswer: 'Hides the element'
          },
          {
            question: 'Which CSS property is used to change the font of an element?',
            options: ['font-family', 'text-style', 'font-style', 'typeface'],
            correctAnswer: 'font-family'
          },
          {
            question: 'What is the purpose of the CSS property "margin"?',
            options: ['To control the space between elements', 'To add color to text', 'To set the background color', 'To change the font size'],
            correctAnswer: 'To control the space between elements'
          },
          {
            question: 'Which HTML tag is used to define a hyperlink?',
            options: ['<a>', '<link>', '<href>', '<url>'],
            correctAnswer: '<a>'
          },
          {
            question: 'What does the "H" stand for in HTML?',
            options: ['Hypertext', 'Hyperlink', 'Header', 'Hypertag'],
            correctAnswer: 'Hypertext'
          },
          {
            question: 'Which CSS property is used to add shadows to text?',
            options: ['text-shadow', 'font-shadow', 'shadow-text', 'text-effect'],
            correctAnswer: 'text-shadow'
          },
          {
            question: 'What is the purpose of the HTML <footer> tag?',
            options: ['To define a paragraph', 'To define a navigation section', 'To define the footer of a document', 'To define a page header'],
            correctAnswer: 'To define the footer of a document'
          },
          {
            question: 'Which JavaScript method is used to add new elements to an array?',
            options: ['push()', 'add()', 'insert()', 'append()'],
            correctAnswer: 'push()'
          },
          {
            question: 'What is the purpose of the CSS property "padding"?',
            options: ['To add space inside an element', 'To set the background color', 'To control the space between elements', 'To change the font size'],
            correctAnswer: 'To add space inside an element'
          },
          {
            question: 'Which HTML tag is used to define a table?',
            options: ['<table>', '<tr>', '<td>', '<th>'],
            correctAnswer: '<table>'
          },
          {
            question: 'What is the purpose of the HTML <nav> tag?',
            options: ['To define a paragraph', 'To define a navigation section', 'To define the footer of a document', 'To define a page header'],
            correctAnswer: 'To define a navigation section'
          },
          {
            question: 'Which JavaScript method is used to remove the first item from an array?',
            options: ['shift()', 'remove()', 'delete()', 'slice()'],
            correctAnswer: 'shift()'
          },
          {
            question: 'What does the CSS property "float" do?',
            options: ['Allows an element to be positioned to the left or right of its container', 'Adds color to text', 'Sets the background color of an element', 'Changes the font size'],
            correctAnswer: 'Allows an element to be positioned to the left or right of its container'
          },
          {
            question: 'Which HTML tag is used to define a list item in an unordered list?',
            options: ['<li>', '<ol>', '<ul>', '<dl>'],
            correctAnswer: '<li>'
          },
          {
            question: 'What does the JavaScript method "parseInt()" do?',
            options: ['Parses a string and returns an integer', 'Rounds a number to the nearest integer', 'Returns a random integer', 'Converts a number to a string'],
            correctAnswer: 'Parses a string and returns an integer'
          },
          {
            question: 'Which CSS property is used to control the size of an element\'s font?',
            options: ['font-size', 'text-size', 'size', 'font-style'],
            correctAnswer: 'font-size'
          },
          {
            question: 'What is the purpose of the HTML <aside> tag?',
            options: ['To define a paragraph', 'To define a navigation section', 'To define content aside from the content it is placed in', 'To define a page header'],
            correctAnswer: 'To define content aside from the content it is placed in'
          },
          {
            question: 'Which JavaScript method is used to concatenate two or more strings?',
            options: ['concat()', 'join()', 'merge()', 'combine()'],
            correctAnswer: 'concat()'
          },
          {
            question: 'What is the purpose of the CSS property "border"',
            options: ['To add a border around an element', 'To change the background color', 'To add padding inside an element', 'To change the font size'],
            correctAnswer: 'To add a border around an element'
          },
          {
            question: 'Which HTML tag is used to define a division or section in an HTML document?',
            options: ['<div>', '<section>', '<span>', '<article>'],
            correctAnswer: '<div>'
          },
          {
            question: 'What is the purpose of the CSS property "background-image"?',
            options: ['To set the background color of an element', 'To add a background image to an element', 'To change the font of an element', 'To control the size of an element'],
            correctAnswer: 'To add a background image to an element'
          },
          
         
       
      ];
      

  
  

const Exam = () => {
  const [userAnswers, setUserAnswers] = useState(new Array(questionsData.length).fill(''));
  const [showScore, setShowScore] = useState(false);
  const [userScore, setuserScore] = useState(0);
  const [data, setData] = useState(null); 
let score = 0;
let percentage=0;


  useEffect(() => {
    // Check if user data exists in sessionStorage
    const userData = sessionStorage.getItem('userData');
    if (userData) {
      setData(JSON.parse(userData));
      
    }
  }, []);

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
       
        console.log(score)
      }
      setuserScore(score);
    });
    
  
  };
  
//update 
const updateData = (id) => {
    percentage=score*2;
  const Udata = {
       score:percentage
       
  }
  axios.put(`http://localhost:5000/update/${id}`, Udata)
      .then(res => {
          console.log("data updated:", res.data)
          console.log(score)
      })
      .catch(err => {
          console.log('Error', err)
      })
}

  return (
    <div className='quiz'>
      
      {showScore ? (
        <>
        <div className='quiz__score'>
         
          <h3 align="center">Exam Result</h3>
          <h2>Your Score: {userScore} out of {questionsData.length}</h2>
        </div>
        
        {userScore>25 && <Button variant="success" href='/certificate'>Get Certificate</Button>}
        </>
      ) : (
        <div className='content'>
          <h3 align="center">Exam</h3>
          
          {questionsData.map((question, index) => (
            <div key={index} className='quiz__question'>
              <h5>{index + 1}.&nbsp;&nbsp;{question.question}</h5>
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
          <Button variant="success" onClick={() => { handleSubmit(); updateData(data._id); }}>Submit</Button>
        </div>
      )}
      
    </div>
    
  )
  
}

export default Exam;