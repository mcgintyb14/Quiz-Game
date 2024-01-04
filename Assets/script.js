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

  let currentQuestionIndex = 0;
  let countdownInterval;
  
  // Function to start the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    displayQuestion();
    countdown();
  }
  
  // Function to display the current question and choices
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    questionElement.textContent = currentQuestion.question;
  
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
  

  
  