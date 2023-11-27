const quizData = [
    {
        question: "Complete the following dialogue Sarah: …, I'm your new friend. My name is Sarah…? Tessy: Hi Sarah, how do you do, pleased to meet you.",
        a: "Hi - how are you",
        b: "Hi - nice to meet you",
        c: "Hi - how do you do",
        d: "Hi - what's your name",
        correct: "c"
    },
    {
        question: "Let…introduce myself, I am Alfa. I'm from Pekanbaru.",
        a: "me",
        b: "I", 
        c: "my",
        d: "mine",
        correct: "a"
    },
    {
        question: "…home address is P Sherman, 42 Wallaby Way, Sydney.",
        a: "my",
        b: "I",
        c: "mine",
        d: "me",
        correct: "a"
    },
    {
        question: "Complete the following dialogue Judge: …? Me: Of course. I'm Nathan, I'm 17 years old. I'm a skateboarder, I've been skating since I was ten.",
        a: "What's your name",
        b: "How are you",
        c: "Can you tell me about yourself",
        d: "Are you a skateboarder",
        correct: "c"
    },
    {
        question: "This is my friend, …name is Alita. …. is from Philippine, We can call …Lita.",
        a: "she - her - her",
        b: "her - she - her",
        c: "her - her - she",
        d: "she - she - her",
        correct: "b"
    },
    {
        question: "You and …brother can join the party.",
        a: "you're",
        b: "you",
        c: "your",
        d: "yours",
        correct: "c"
    },
    {
        question: "Faiz has a motorcycle. He usually parks …motorcycle near Mesjid.",
        a: "he",
        b: "him",
        c: "his",
        d: "he's",
        correct: "c"
    },
    {
        question: "We are from Indonesia. One of traditional music of …country is Angklung.",
        a: "our",
        b: "us",
        c: "ours",
        d: "we",
        correct: "a"
    },
    {
        question: "Complete the following dialogue Bob: … with that sun glasses. Patrick: But it doesn't belong to me. Bob: It's okay, it doesn't change the way I think about you. Patrick: You're a true friend.",
        a: "Do you have",
        b: "You look so cool",
        c: "Do you belong",
        d: "You look happy",
        correct: "b"
    },
    {
        question: "Two tents for our camping would ........ by my mother.",
        a: "Being bought",
        b: "Been bought",
        c: "Bought",
        d: "Be bought",
        correct: "d"
    },
    {
        question: "Do you often go to restaurants? No, it .... quite a long time since I went to a restaurant with my friends.",
        a: "Has been",
        b: "Would be",
        c: "Is being",
        d: "Was",
        correct: "a"
    },
    {
        question: " I started school when I was five years old. I ..... a student for seventeen years now.",
        a: "Have been",
        b: "Am to be",
        c: "Am",
        d: "Am being",
        correct: "a"
    },
    {
        question: "She .... a book right now.",
        a: "Readed",
        b: "Read",
        c: "Is reading",
        d: "Reads",
        correct: "c"
    },
    {
        question: "Whose pencils are these? ... or ...?",
        a: "You or mine",
        b: "Your or my",
        c: "Yours or my",
        d: "Yours or mine",
        correct: "d"
    },
    {
        question: "That is their problem, not ...",
        a: "Our",
        b: "Their problem ",
        c: "Ours",
        d: "Theirs",
        correct: "c"
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
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