// Setting variables to store the number of correct and incorrect answers
let messageElement;
var CorrectAnswers = 0;


// Questions array with objects containing question, choices, and answer
// The third line is the Index of the correct answer in the choices array
const questions = [
  {
    question: 'Who developed the theory of relativity?',
    choices: ['1. Isaac Newton', '2. Albert Einstein', '3. Galileo Galilei', '4. Stephen Hawking'],
    answer: 1
  },
  {
    question: 'What is the capital of Australia?',
    choices: ['1. Sydney', '2. Melbourne', '3. Canberra', '4. Brisbane'],
    answer: 2
  },
  {
    question: 'In which year did the World War II end?',
    choices: ['1. 1943', '2. 1945', '3. 1950', '4. 1939'],
    answer: 1
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    choices: ['1. Mars', '2. Jupiter', '3. Venus', '4. Saturn'],
    answer: 0
  },
  {
    question: 'Who is the author of the Harry Potter book series?',
    choices: ['1. J.K. Rowling', '2. George R.R. Martin', '3. Stephen King', '4. Suzanne Collins'],
    answer: 0
  },
  {
    question: 'What is the currency of Japan?',
    choices: ['1. Yen', '2. Won', '3. Yuan', '4. Baht'],
    answer: 0
  },
  {
    question: 'Which famous scientist developed the laws of motion and gravity?',
    choices: ['1. Nikola Tesla', '2. Albert Einstein', '3. Isaac Newton', '4. Marie Curie'],
    answer: 2
  },
  {
    question: 'In computer science, what does HTML stand for?',
    choices: ['1. Hyperlink and Text Markup Language', '2. Hyper Text Markup Language', '3. Hyper Transfer Markup Language', '4. High-level Text Markup Language'],
    answer: 1
  },
  {
    question: 'Who painted the Mona Lisa?',
    choices: ['1. Vincent van Gogh', '2. Leonardo da Vinci', '3. Pablo Picasso', '4. Michelangelo'],
    answer: 1
  },
  {
    question: 'Which gas makes up the majority of Earth\'s atmosphere?',
    choices: ['1. Nitrogen', '2. Oxygen', '3. Carbon Dioxide', '4. Hydrogen'],
    answer: 0
  },
  {
    question: 'What is the largest mammal on Earth?',
    choices: ['1. Elephant', '2. Blue Whale', '3. Giraffe', '4. Lion'],
    answer: 1
  },
  {
    question: 'Who is known as the "Father of Computer Science"?',
    choices: ['1. Alan Turing', '2. Bill Gates', '3. Steve Jobs', '4. Mark Zuckerberg'],
    answer: 0
  },
  {
    question: 'Which continent is the least populous?',
    choices: ['1. Asia', '2. Africa', '3. Australia', '4. Antarctica'],
    answer: 3
  },
  {
    question: 'What is the chemical symbol for gold?',
    choices: ['1. Au', '2. Ag', '3. Fe', '4. Hg'],
    answer: 0
  },
  {
    question: 'Who wrote the famous play "Hamlet"?',
    choices: ['1. William Shakespeare', '2. Charles Dickens', '3. Jane Austen', '4. F. Scott Fitzgerald'],
    answer: 0
  },
  {
    question: 'What is the speed of light in a vacuum?',
    choices: ['1. 300,000 km/s', '2. 150,000 km/s', '3. 500,000 km/s', '4. 200,000 km/s'],
    answer: 0
  },
  {
    question: 'Which element is essential for human life and makes up the majority of the human body?',
    choices: ['1. Carbon', '2. Oxygen', '3. Hydrogen', '4. Nitrogen'],
    answer: 1
  },
  {
    question: 'In which year did the Berlin Wall fall, marking the end of the Cold War?',
    choices: ['1. 1985', '2. 1990', '3. 1989', '4. 1995'],
    answer: 2
  },
  {
    question: 'What is the capital of Brazil?',
    choices: ['1. Rio de Janeiro', '2. Brasília', '3. São Paulo', '4. Buenos Aires'],
    answer: 1
  },
  {
    question: 'Which country is known as the "Land of the Rising Sun"?',
    choices: ['1. China', '2. Japan', '3. South Korea', '4. Vietnam'],
    answer: 2
  },
  {
    question: 'What is the square root of 144?',
    choices: ['1. 11', '2. 12'],
    answer: 3
  }
]

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

// function to prompt the quiz to prompt the quiz to start and display the elements that are included in the quiz
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

// code to create new elements to be displayed on the page when the quiz ends, as well as code to style the text in javascript
  const endMessageHeader = document.createElement('h2');
  endMessageHeader.textContent = 'All done!';
  endMessageHeader.style.fontSize = '45px';
  const endMessage = document.createElement('p');
  endMessage.textContent = `You got ${CorrectAnswers} correct.`;
  endMessage.style.fontSize = '40px';

  // code to create a form to input initals and score
  const scoreForm = document.createElement('form');
  scoreForm.innerHTML = `
      <label id="initials-label" for="initials">Enter Initials:</label>
      <input type="text" id="initials" name="initials" required>
      <button id="submit-button" type="submit">Submit</button>`;

  // event listener for when the form is suvbmitted, stores the scores in local storage below as well as redirects the user to the high scores page by calling the showHighScores function 
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

  // adding elements to the page when the quiz ends; includes the score messages as well as the form to input initials
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

// function to hide all main quiz elements from the page; this is meant to be called when the high scores page is displayed
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

  // function to pull submissions from local storage and sort them from highest to lowest number of correct
  const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
  const sortedSubmissions = submissions.sort((a, b) => b.score - a.score);

  highScoresList = document.getElementById('highScoresList');
  highScoresList.innerHTML = ''; // Clear previous entries

  // function to add the submissions as new list items in the high scores page
  sortedSubmissions.forEach((submission) => {
    const scoreItem = document.createElement('li');
    scoreItem.textContent = `${submission.initials}: ${submission.score} correct`;
    highScoresList.appendChild(scoreItem);
  });

  // Show or hide the clearLocalStorage button based on highScoresContainer visibility
  const clearLocalStorageButton = document.getElementById('clearLocalStorage');
  clearLocalStorageButton.style.display = 'block'; // Assuming you always want to display the clearLocalStorage button

}

// event listener for the high scores button in the top left which calls the showHighScores function
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






