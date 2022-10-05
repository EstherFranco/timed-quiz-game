// data
let questions = [
    "What is a boolean?",
    "What is a string?",
    "What is a number?",
    "What is a array?",
];
let answers = [
    [
        "True and false statements.",
        "Depends.",
        "26.",
        "12."
    ],
    [
        "True and false statements.",
        "Depends.",
        "text",
        "12."
    ],
    [
        "True and false statements.",
        "Depends.",
        "numbers",
        "false"
    ],
    [
        "True and false statements.",
        "Depends.",
        "a list of stuff",
        "12."
    ],
];
let correctAnswers = [
    0,
    2,
    2,
    2,
]

let quiz = document.querySelector("#quiz");
let currentQuestion = 0

function uiTimerFun() {
    return setInterval(
        () => {
            let uiTimerElement = document.querySelector('#timer')
            let timer = Number(uiTimerElement.dataset.timer)
            timer += 1
            uiTimerElement.dataset.timer = timer
            uiTimerElement.innerText = timer + ' secs'
        },
        1_000
    )
}
let uiTimer = uiTimerFun()

function gameTimerFun() {
    return setTimeout(
        () => {
            clearInterval(uiTimer)
            alert("Game over!")
        },
        10_000
    );
}
let gameTimer = gameTimerFun()

function generateHTML() {
    quiz.innerHTML = ``
    quiz.innerHTML += `<p> Question </p>`
    quiz.innerHTML += '<question>'
        + questions[currentQuestion]
        + "</question>";

    quiz.innerHTML += `<p> Answers </p>`
    for (
        let answerIndex = 0;
        answerIndex < answers[currentQuestion].length;
        answerIndex++
    ) {
        quiz.innerHTML += '<answer>'
            + answerIndex
            + '>'
            + ' '
            + answers[currentQuestion][answerIndex];
        + '</answer>'
    }

    quiz.innerHTML += '---------------------'
}

function checkAnswer() {
    let userAnswerRaw = document.querySelector('#user-answer').value
    if (userAnswerRaw === '') {
        alert('Please enter an answer!')
    }
    
    let userAnswer = Number(userAnswerRaw)
    if (userAnswer === correctAnswers[currentQuestion]) {
        return true
    }

    return false
}

function nextQuestion() {
    let isCorrectAnswer = checkAnswer()
    if (!isCorrectAnswer) {
        alert('Wrong answer!')
        return
    }

    currentQuestion += 1
    
    let uiTimerElement = document.querySelector('#timer')
    uiTimerElement.dataset.timer = 0
    uiTimerElement.innerText = '0 secs'
    
    clearTimeout(gameTimer)
    if (currentQuestion > questions.length - 1) {
        clearInterval(uiTimer)
        alert("You won!")
    } else {
        gameTimer = gameTimerFun()
        generateHTML()
    }
    
}

generateHTML()

// let oneQ = document.querySelector('#oneQ')
// oneQ.innerText = '0>' + answers[0]
// let twoQ = document.querySelector('#twoQ')
// oneQ.innerText = '1>' + answers[1]
// let threeQ = document.querySelector('#threeQ')
// oneQ.innerText = '2>' + answers[2]
// let fourQ = document.querySelector('#fourQ')
// oneQ.innerText = '3>' + answers[3]
// /**
//  * IN THE HTML:
//  * <answer id="oneQ"></answer>
//  * <answer id="twoQ"></answer>
//  * <answer id="threeQ"></answer>
//  * <answer id="fourQ"></answer>
//  */
