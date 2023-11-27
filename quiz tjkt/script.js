const quizData = [
    {
        question: "Skema desain pembangunan sebuah jaringan komputer dikenal dengan istilah...",
        a: "Jaringan tipe",
        b: "Topologi",
        c: "Desain Jaringan",
        d: "Media Transmisi",
        correct: "b"
    },
    {
        question: "Bagian komputer terbagi menjadi 3 yaitu...",
        a: "Software -  Hardware - Output",
        b: "Hardware - Software - Brainware", 
        c: "Harddisk - Monitor - VGA",
        d: "Input - Proses - Output",
        correct: "b"
    },
    {
        question: "Berikut yang bukan merupakan jenis kabel untuk jaringan komputer adalah. . . . . ?",
        a: "BNC",
        b: "coaxial cable",
        c: "UTP/STP",
        d: "fiber optic",
        correct: "a"
    },
    {
        question: "Jika nomor IP tidak dikenal dalam jaringan, maka akan muncul pesan. . . . . ?",
        a: "Data Pending",
        b: "Request Time Out",
        c: "Time to Leave",
        d: "Repply for all",
        correct: "b"
    },
    {
        question: "Perangkat yang digunakan untuk mengubah sinyal digital menjadi sinyal analog adalah...",
        a: "Modulator",
        b: "Demodulator",
        c: "Multiplexer",
        d: "Demultiplexer",
        correct: "a"
    },
    {
        question: "Kata lain dari otak computer adalah…",
        a: "Motherboard",
        b: "Power Supply",
        c: "Processor",
        d: "Chipset",
        correct: "c"
    },
    {
        question: "Perangkat keras komputer yang termasuk sebagai alat keluaran antara lain...",
        a: "Keyboard dan Mouse",
        b: "CPU dan Keyboard",
        c: "Monitor dan Printer",
        d: "CPU dan Printer",
        correct: "c"
    },
    {
        question: "Untuk menjadi user root dan bisa mengatur Ubuntu, kita perlu menjalankan perintah di terminal...",
        a: "Sudo su",
        b: "User root",
        c: "Root user",
        d: "Super admin",
        correct: "a"
    },
    {
        question: "Software Virtualisasi dibawah ini adalah...",
        a: "VirtualBox",
        b: "Winbox",
        c: "Rufus",
        d: "SMADAV",
        correct: "a"
    },
    {
        question: "Apakah kepanjangan dari WAN?",
        a: "Wireless Areas Networking",
        b: "Wide Area Network",
        c: "Wireless Area Network",
        d: "Wide Area Networking",
        correct: "b"
    },
    {
        question: "Kepanjangan dari TCP/IP adalah...",
        a: "Transmision Control Protocol / Internet Protocol",
        b: "Transport Center Protocol/ Insert Protocol",
        c: "Thunder Core Panther/Iinternet Protocol",
        d: "Technic Control Product/International Protocol",
        correct: "a"
    },
    {
        question: "Kepanjangan dari OSI...",
        a: "Organisation Standards International",
        b: "Operating System Interconnection",
        c: "Open System Interconection",
        d: "Oaja Si Iki",
        correct: "b"
    },
    {
        question: "Di bawah ini merupakan jenis-jenis topologi, kecuali...",
        a: "Topologi bus",
        b: "Topologi ring",
        c: "Topologi mesh",
        d: "Topologi transmisi",
        correct: "d"
    },
    {
        question: "Pengertian topologi jaringan komputer adalah...",
        a: "Suatu cara menghubungkan komputer yang satu dengan komputer lainnya sehingga membentuk jaringan.",
        b: "Node – node dihubungkan secara serial sepanjang kabel, dan pada kedua ujung kabel ditutup dengan terminator.",
        c: "Setiap node berkomunikasi langsung dengan konsentrator.",
        d: "Node-node dihubungkan secara serial di sepanjang kabel, dengan bentuk jaringan seperti lingkaran",
        correct: "a"
    },
    {
        question: "Topologi LAN yang paling sedikit menggunakan kabel penghubung...",
        a: "Ring",
        b: "Tree",
        c: "Star",
        d: "Hybrid",
        correct: "a"
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