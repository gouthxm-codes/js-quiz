const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false },
        ],
    },
    {
        id: 1,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false },
        ],
    },
];




const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0;
let correct = 0;
let wrong = 0
let total = 0;
let selected;



const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
    resultScreen.querySelector(".correct").textContent =
        `Correct Answers: ${correct}`
    resultScreen.querySelector(".wrong").textContent =
        `Wrong Answers: ${wrong}`
    resultScreen.querySelector(".score").textContent =
        `Score: ${(correct - wrong) * 10}`
}

const showQn = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selected = null
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `
    <div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
    </div>
        `
    ).join(" ")

    selectAnswer()
}




const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selected = e.target.value;
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selected !== null) {
            selected === "true" ? correct++ : wrong++
            qIndex++
            showQn(qIndex)

        } else alert("Must Select An Answer")
    })

}

const playAgain = () => {
    qIndex = 0;
    correct = 0;
    wrong = 0
    total = 0;
    showQn(qIndex)
}


play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
})


showQn(qIndex)
submitAnswer()