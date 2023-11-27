const quizData = [
    {
        question: "Dikisahkan hiduplah sekelompok binatang di sebuah kampung. Pernyataan tersebut merupakan bagian struktur isi fabel yaitu .....",
        a: "orientasi",
        b: "konflik",
        c: "klimaks",
        d: "resolusi",
        correct: "a"
    },
    {
        question: "Anekdot merupakan sebuah cerita singkat yang lucu dan menghibur yang mungkin merupakan…. ",
        a: "Kehidupan pribadi",
        b: "Kisah manusia dan kehidupannya", 
        c: "Manusia dan realitanya",
        d: "Pengalaman seseorang",
        correct: "d"
    },
    {
        question: "Salah satu tujuan dari dibuatnya teks anekdot adalah untuk…",
        a: "Mengetahui kemampuan seseorang dalam berkarya",
        b: "Menghibur pembacanya",
        c: "Menghilangkan stress",
        d: "Refreshing dari berbagai aktivitas",
        correct: "b"
    },
    {
        question: "Berikut ini termasuk ciri-ciri teks anekdot, kecuali…",
        a: "Bersifat menghibur",
        b: "Mengungkapkan kebenaran yang lebih umum",
        c: "Bersifat mengejek seseorang",
        d: "Terilhami dari kejadian nyata",
        correct: "c"
    },
    {
        question: "Membandingkan antara dua kriteria dengan kenyataan baik dari segi struktur ini maupun bahasa (kosakata, ejaan, dan struktur kalimat). Pernyataan tersebut merupakan pengertian dari…",
        a: "Mengidentifikasi",
        b: "Menelaah",
        c: "Menganalisis",
        d: "Mengabstraksi",
        correct: "c"
    },
    {
        question: "Berikut ini termasuk struktur teks anekdot, kecuali…",
        a: "Abstraksi",
        b: "Orientasi",
        c: "Puncak pertikaian",
        d: "Koda",
        correct: "d"
    },
    {
        question: "Salah satu bentuk karya sastra prosa lama yang isinya berupa cerita, kisah, dongeng maupun sejarah. Pernyataan tersebut merupakan pengertian dari…",
        a: "Dongeng",
        b: "Cerita",
        c: "Cerita rakyat",
        d: "Hikayat",
        correct: "c"
    },
    {
        question: "Tujuan dari menceritakan kembali isi hikayat adalah untuk…",
        a: "Menyimpulkan isi hikayat",
        b: "Menyimpulkan nilai-nilai dalam hikayat",
        c: "Menyimpulkan isi dan nilai-nilai dalam hikayat",
        d: "Mengetahui isi hikayat",
        correct: "b"
    },
    {
        question: "Manakah yang merupakan langkah pertama dalam menyusun sebuah prosedur?",
        a: "Mengevaluasi hasil",
        b: "Menyusun tujuan",
        c: "Menyusun alat dan bahan",
        d: "Melakukan analisis masalah",
        correct: "d"
    },
    {
        question: "Bagian mana dari prosedur yang biasanya berisi daftar peralatan dan material yang diperlukan?",
        a: "Tujuan",
        b: "Langkah-langkah",
        c: "Pengantar",
        d: "Alat dan bahan",
        correct: "b"
    },
    {
        question: "Untuk memastikan prosedur tetap relevan, perlu untuk?",
        a: "Tidak perlu revisi",
        b: "Merubahnya sesering mungkin",
        c: "Mengabaikan masukan dari personel",
        d: "Mengkonsolidasikan tujuan",
        correct: "b"
    },
    {
        question: "Apa yang dimaksud dengan langkah-langkah dalam prosedur?",
        a: "Penjelasan mengenai alat dan bahan",
        b: "Instruksi yang menggambarkan apa yang harus dilakukan",
        c: "Penjelasan mengenai mengapa prosedur diperlukan",
        d: "Daftar tujuan prosedur",
        correct: "c"
    },
    {
        question: "Apa yang dapat Anda simpulkan tentang teks eksplanasi?",
        a: "Tujuan utama teks eksplanasi adalah menghibur pembaca",
        b: "Teks eksplanasi berfokus pada proses kronologis",
        c: "Teks eksplanasi memberikan penjelasan tentang mengapa suatu fenomena terjadi",
        d: "Teks eksplanasi tidak memiliki bagian “Manfaat”",
        correct: "c"
    },
    {
        question: "Teks laporan hasil observasi adalah teks yang berisi penjelasan dan didasarkan pada...",
        a: "penulisan",
        b: "penilaian",
        c: "pengamatan",
        d: "peluang",
        correct: ""
    },
    {
        question: "Penulisan dalam teks laporan hasil observasi harus berdasarkan...",
        a: "penjelasan",
        b: "fakta",
        c: "opini",
        d: "argumen",
        correct: "b"
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