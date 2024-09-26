const quizData = [
    {
        question: " the legendary sanin who become the 5th Hokage?",
        a: "Kakkashi",
        b: "Tsunade",
        c: "Tobirma",
        d: "Hiruzen Sarutobi",
        correct: "b",
    },
    {
        question: "Who is the new member of team 7?",
        a: "Rock Lee",
        b: "Shikamaru",
        c: "Hinata",
        d: "sai",
        correct: "d",
    },
    {
        question: "who was naruto's first kiss?",
        a: "Hinata",
        b: "Sakura",
        c: "Sasuke",
        d: "Ino",
        correct: "b",
    },
    {
        question: "Who was itachi's partner in akatsuki?",
        a: "Kisame",
        b: "Deidara",
        c: "Nagato",
        d: "none of the above",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})