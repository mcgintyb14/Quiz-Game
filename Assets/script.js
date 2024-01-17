// Setting variables to store the number of correct and incorrect answers
let messageElement;
var CorrectAnswers = 0;


// Questions array with objects containing question, choices, and answer
// The third line is the Index of the correct answer in the choices array
const questions = [
  {
    question: 'What is the language used to structure a webpage?',
    choices: ['1. CSS', '2. HMTL', '3. Javascript', '4. Python'],
    answer: 1
  },
  {
    question: 'What keyword is used to declare variables in JavaScript?',
    choices: ['1. var', '2. declare', '3. int', '4. string'],
    answer: 0
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    choices: ['1. William Shakespeare', '2. Jane Austen', '3. Charles Dickens', '4. Mark Twain'],
    answer: 0
  },
  {
    question: 'Which tag is used to define an unordered list in HTML?',
    choices: ['1. ul', '2. ol', '3. li', '4. list'],
    answer: 0
  },
  {
    question: 'In which year did the Titanic sink?',
    choices: ['1. 1905', '2. 1931', '3. 1920', '4. 1912'],
    answer: 3
  },
  {
    question: 'What Git command is used to create a new branch?',
    choices: ['1. git push', '2. git branch', '3. git commit', '4. git merge'],
    answer: 1
  },
  {
    question: 'What is the largest planet in our solar system?',
    choices: ['1. Earth', '2. Jupiter', '3. Mars', '4. Venus'],
    answer: 1
  },
  {
    question: 'Which of the following is not a primitive data type in Java?',
    choices: ['1. double', '2. string', '3. boolean', '4. int'],
    answer: 3
  },
  {
    question: 'Which element has the chemical symbol "H"?',
    choices: ['1. Helium', '2. Nitrogen', '3. Hydrogen', '4. Carbon'],
    answer: 2
  },
  {
    question: 'Which keyword is used to declare a constant in Java?',
    choices: ['1. final', '2. static', '3. const', '4. var'],
    answer: 2
  },
  {
    question: 'What is the capital of Japan?',
    choices: ['1. Beijing', '2. Seoul', '3. Tokyo', '4. Bangkok'],
    answer: 2
  },
  {
    question: 'Which CSS property is used to create rounded corners on an element?',
    choices: ['1. border-radius', '2. corner-radius', '3. round-corner', '4. curve'],
    answer: 0
  },
  {
    question: 'Who was the first woman to win a Nobel Prize?',
    choices: ['1. Marie Curie', '2. Rosa Parks', '3. Amelia Earhart', '4. Mother Teresa'],
    answer: 0
  },
  {
    question: 'Which CSS pseudo-class is used to select an element when it is being hovered over by the mouse pointer?',
    choices: ['1. :active', '2. :hover', '3. :focus', '4. :target'],
    answer: 1
  },
  {
    question: 'What is the largest ocean on Earth?',
    choices: ['1. Atlantic Ocean', '2. Indian Ocean', '3. Arctic Ocean', '4. Pacific Ocean'],
    answer: 3
  },
  {
    question: 'What is the capital city of France?',
    choices: ['1. London', '2. Paris', '3. Berlin', '4. Rome'],
    answer: 1
  },
  
];

//   The below lines of code set two new variables: it sets the "current" index to 0 which means to start with the first element of the questions array
//   The second varaible sets up an undefined variable to set a countdown interval for the clock

let currentQuestionIndex = 0;
let countdownInterval;

const quizDisplay = document.getElementById('quiz-container');
quizDisplay.style.display = 'none';
const timer = document.getElementById('time-container');
timer.style.display = 'none'

// Function to start the quiz starting with the first index of the questions array
function startQuiz() {
  currentQuestionIndex = 0;
  displayQuestion();
  countdown();
}

function showQuiz() {
  const headerElement = document.getElementById('homepage');
  const startButton = document.getElementById('startButton');
  const timeContainer = document.getElementById('time-container'); // Get the time container element
  const bodyText = document.getElementById('body-text');
  const results = document.getElementById('result');

  headerElement.style.display = 'none';
  startButton.style.display = 'none';
  quizDisplay.style.display = 'flex';
  quizDisplay.style.flexDirection = 'column';
  timeContainer.style.display = 'flex'; // Set the display property for the time container
  bodyText.style.display = 'none'
  results.style.cssText = 'display: flex; flex-direction: row; justify-content: center; padding-top: 10px; font-size: 30px; border-top: solid grey 2px; width: 50%; color: grey;';



  startQuiz();
}

// Event listener for the "Start Quiz" button
document.getElementById('startButton').addEventListener('click', showQuiz);

// Function to display the current question and choices
// Function sets two different variables: one sets the current quetion variable to equal the current index of the 'questions' key from the questions array; the other defines a new element that targets the 'question' ID from the HTML code
// Lastly, it adds text to the question element which pulls the appropriate index from the questions array to be displayed as text in the element
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  questionElement.textContent = currentQuestion.question;


  // Defines a new element for the choices of answers which targets the 'choices' ID from the HTML code
  // It then adds text to the targeted element  
  const choicesElement = document.getElementById('choices');
  choicesElement.innerHTML = '';

  currentQuestion.choices.forEach(function (choice, index) {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    choiceButton.onclick = function () {
      checkAnswer(index);
    };
    choicesElement.appendChild(choiceButton);
  });
}

// Function to check the selected answer and whether it matches the index of the answer defined in the questions array
function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.answer) {
    CorrectAnswers++;
    displayMessage(true); // Correct answer
  } else {
    displayMessage(false); // Incorrect answer
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz(); // Call endQuiz when there are no more questions
  }
}

// Function to handle the countdown timer
function countdown() {
  let secondsRemaining = 60; // Timer is set to 60 seconds

  function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = secondsRemaining + 's';

    if (secondsRemaining === 0) {
      checkAnswer(-1); // If no answer is selected, it will timeout
      endQuiz();
    }

    secondsRemaining--;
  }

  countdownInterval = setInterval(updateTimer, 1000);
}

// Function to handle the end of the quiz
function endQuiz() {
  clearInterval(countdownInterval); // Stop the countdown timer

  quizDisplay.style.display = 'block';

  const quizElement = document.getElementById('quiz-container');
  quizElement.innerHTML = ''; // Clear the quiz content


  const endMessageHeader = document.createElement('h2');
  endMessageHeader.textContent = 'All done!';
  endMessageHeader.style.fontSize = '45px';
  const endMessage = document.createElement('p');
  endMessage.textContent = `You got ${CorrectAnswers} correct.`;
  endMessage.style.fontSize = '40px';

  const scoreForm = document.createElement('form');
  scoreForm.innerHTML = `
      <label id="initials-label" for="initials">Enter Initials:</label>
      <input type="text" id="initials" name="initials" required>
      <button id="submit-button" type="submit">Submit</button>`;

  scoreForm.addEventListener('submit', function (event) {
    event.preventDefault();
    showHighScores();
    const initials = document.getElementById('initials').value;
    const scoreList = document.getElementById('highScoresList');

    const scoreItem = document.createElement('li');
    scoreItem.textContent = `${initials}: ${CorrectAnswers} correct`;

    scoreList.appendChild(scoreItem);

    sortScores(scoreList);

    // Store submission in local storage
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push({ initials, score: CorrectAnswers });
    localStorage.setItem('submissions', JSON.stringify(submissions));

    // Reset variables and display the first question for a new quiz
    CorrectAnswers = 0;
    currentQuestionIndex = 0;
    displayQuestion();
  });

  quizElement.appendChild(endMessageHeader);
  quizElement.appendChild(endMessage);
  quizElement.appendChild(scoreForm);
  messageElement.remove();
}


function displayMessage(isCorrect) {
  const messageContainer = document.getElementById('result');
  // Create a new element (span) for the message
  messageElement = document.createElement('span');

  messageElement.textContent = isCorrect ? 'Correct!' : 'Wrong!';
  messageContainer.innerHTML = '';
  // Append the new message element to the container
  messageContainer.appendChild(messageElement);
}

function hideQuizElements() {
  const mainContainer = document.getElementById('main-container');
  const timerContainer = document.getElementById('time-container');
  const highScoresContainer = document.getElementById('highScoresContainer');
  const resultsContainer = document.getElementById('results-container');
  const homepage = document.getElementById('homepage');

  console.log(homepage);

  mainContainer.style.display = 'none';
  timerContainer.style.display = 'none';
  resultsContainer.style.display = 'none';
  homepage.style.display = 'none'; // Hide homepage
  // highScoresContainer.style.display = 'flex';
  // Hide other elements
}

function showHighScores() {
  hideQuizElements();

  const highScoresContainer = document.getElementById('highScoresContainer');
  highScoresContainer.style.display = 'block';
  highScoreButton.style.display = 'none'

  const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
  const sortedSubmissions = submissions.sort((a, b) => b.score - a.score);

  highScoresList = document.getElementById('highScoresList');
  highScoresList.innerHTML = ''; // Clear previous entries

  sortedSubmissions.forEach((submission) => {
    const scoreItem = document.createElement('li');
    scoreItem.textContent = `${submission.initials}: ${submission.score} correct`;
    highScoresList.appendChild(scoreItem);
  });

  // Show or hide the clearLocalStorage button based on highScoresContainer visibility
  const clearLocalStorageButton = document.getElementById('clearLocalStorage');
  clearLocalStorageButton.style.display = 'block'; // Assuming you always want to display the clearLocalStorage button

}


const highScoreButton = document.getElementById('high-scores');
highScoreButton.addEventListener('click', showHighScores);



function sortScores(scoreList) {
  const scores = Array.from(scoreList.children);
  scores.sort((a, b) => {
    const scoreA = parseInt(a.textContent.split(':')[1]);
    const scoreB = parseInt(b.textContent.split(':')[1]);
    return scoreB - scoreA;
  });

  scoreList.Content = '';
  scores.forEach((score) => {
    scoreList.appendChild(score);
  });
}

// Function to clear local storage
function clearLocalStorage() {
  localStorage.removeItem('submissions');
  console.log('Local storage cleared');
  const highScoresList = document.getElementById('highScoresList');
  highScoresList.innerHTML = '';
}

// Get the button element
const clearLocalStorageButton = document.getElementById('clearLocalStorage');

// click event listener to the button
clearLocalStorageButton.addEventListener('click', clearLocalStorage);

const returnHomeButton = document.getElementById('returnHomeButton');

returnHomeButton.addEventListener('click', function () {
  // Redirect to the homepage
  window.location.href = 'index.html';
});






