  // Setting variables to store the number of correct and incorrect answers
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
        question: 'Which tag is used to define an unordered list in HTML?',
        choices: ['1. ul', '2. ol', '3. li', '4. list'],
        answer: 0
      },
      {
        question: 'What Git command is used to create a new branch?',
        choices: ['1. git push', '2. git branch', '3. git commit', '4. git merge'],
        answer: 1
      },
      {
        question: 'Which of the following is not a primitive data type in Java?',
        choices: ['1. double', '2. string', '3. boolean', '4. int'],
        answer: 4
      },
      {
        question: 'Which keyword is used to declare a constant in Java?',
        choices: ['1. final', '2. static', '3. const', '4. var'],
        answer: 2
      },
      {
        question: 'Which CSS property is used to create rounded corners on an element?',
        choices: ['1. border-radius', '2. corner-radius', '3. round-corner', '4. curve'],
        answer: 0
      },
      {
        question: 'Which CSS pseudo-class is used to select an element when it is being hovered over by the mouse pointer?',
        choices: ['1. :active', '2. :hover', '3. :focus', '4. :target'],
        answer: 2
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
    
    headerElement.style.display = 'none';
    startButton.style.display = 'none';
    quizDisplay.style.display = 'flex';
    quizDisplay.style.flexDirection = 'column';
    timeContainer.style.display = 'flex'; // Set the display property for the time container
    bodyText.style.display = 'none'

    
  
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
    // Using an alert for now to ensure function works, will revert to storing the tally to an array
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

  const quizElement = document.getElementById('quiz');
  quizElement.innerHTML = ''; // Clear the quiz content

  const endMessage = document.createElement('p');
  endMessage.textContent = `Quiz over! You got ${CorrectAnswers} correct.`;

  const scoreForm = document.createElement('form');
  scoreForm.innerHTML = `
    <label for="initials">Enter Your Initials:</label>
    <input type="text" id="initials" name="initials" required>
    <button type="submit">Submit</button>`;

  scoreForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const initials = document.getElementById('initials').value;
    const scoreList = document.getElementById('scores');


    const scoreItem = document.createElement('li');
    scoreItem.textContent = `${initials}: ${CorrectAnswers} correct`

    scoreList.appendChild(scoreItem);

    sortScores(scoreList);

    // You can now record the score with the initials entered
    // For example, send it to a server or store it in localStorage

    // Here, let's just log the initials and reset the quiz
    CorrectAnswers = 0;
    startQuiz();
  });

  quizElement.appendChild(endMessage);
  quizElement.appendChild(scoreForm);

  // const returnHome = document.createElement('button')
  // returnHome.textContent = 'Return Home'
}

function displayMessage(isCorrect) {
  const messageContainer = document.getElementById('result');

  // Create a new element (span) for the message
  const messageElement = document.createElement('span');

  messageElement.textContent = isCorrect ? 'Correct!' : 'Wrong!';

  messageContainer.innerHTML = '';

  // Append the new message element to the container
  messageContainer.appendChild(messageElement);
}

function sortScores(scroeList) {
  const scores = Array.from(scoreList.children);
  scores.sort((a,b) => {
    const scoreA = parseInt(a.textContent.split(':')[1]);
    const scoreB = parseInt(b.textContent.split(':')[1]);
    return scoreB - scoreA;
  });

  scoreList.Content = '';
  scores.forEach((score) => {
    scoreList.appendChild(score);
  });
}

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz(); // Call endQuiz when there are no more questions
  }

  

  
  