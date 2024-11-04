const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
        answer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById("submit-btn").addEventListener("click", checkAnswer);

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>${questions[currentQuestion].question}</h2>
        <ul>
            ${questions[currentQuestion].options.map((option, index) => `<li><input type="radio" name="answer" value="${index}">${option}</li>`).join("")}
        </ul>
    `;
}

function checkAnswer() {
    const answerRadios = document.getElementsByName("answer");
    const userAnswer = Array.from(answerRadios).findIndex(radio => radio.checked);
    
    if (userAnswer === questions[currentQuestion].answer) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `
        <h2>Quiz Result</h2>
        <p>Your score is ${score} out of ${questions.length}</p>
    `;
}

displayQuestion();
