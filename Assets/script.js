  // Questions array with objects containing question, choices, and answer
  // The third line is the Index of the correct answer in the choices array
  const questions = [
    {
      question: 'What is the capital of France?',
      choices: ['London', 'Paris', 'Rome', 'Madrid'],
      answer: 1 
    },
    {
      question: 'Which planet is known as the Red Planet?',
      choices: ['Mars', 'Jupiter', 'Saturn', 'Uranus'],
      answer: 0
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Mars', 'Jupiter', 'Saturn', 'Uranus'],
        answer: 0
      },
      {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Mars', 'Jupiter', 'Saturn', 'Uranus'],
        answer: 0
      },
      {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Mars', 'Jupiter', 'Saturn', 'Uranus'],
        answer: 0
      },
  ];

//   The below lines of code set two new variables: it sets the "current" index to 0 which means to start with the first element of the questions array
//   The second varaible sets up an undefined variable to set a countdown interval for the clock

  let currentQuestionIndex = 0;
  let countdownInterval;
  
  // Function to start the quiz starting with the first index of the questions array
  function startQuiz() {
    currentQuestionIndex = 0;
    displayQuestion();
    countdown();
  }
  
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
    choicesElement.textcontent = '';
  
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
          alert('Correct answer!');
        } else {
          alert('Incorrect answer!');
        }
      
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
        } else {
          currentQuestionIndex = 0; // Reset to the first question
          displayQuestion();
        }
      }

    // Function to handle the countdown timer
  function countdown() {
    let secondsRemaining = 60; // Timer is set to 60 seconds
  
    function updateTimer() {
      const timerElement = document.getElementById('timer');
      timerElement.textContent = 'Time Remaining: ' + secondsRemaining + 's';
  
      if (secondsRemaining === 0) {
        checkAnswer(-1); // If no answer is selected, it will timeout
      }
  
      secondsRemaining--;
    }
  
    countdownInterval = setInterval(updateTimer, 1000);
  }
  
  // Start the quiz when the page loads
  startQuiz();

  

  
  