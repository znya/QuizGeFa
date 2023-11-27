const quizData = [
    {
        question: "Sejarah merupakan ilmu yang unik, karena...",
        a: "Sejarah bersifat umum di manapun manusia berada",
        b: "Sejarah tidak terbatas pada hal-hal yang besar",
        c: "Sejarah tidak jelas kapan dan dimana terjadinya",
        d: "Sejarah merupakan peristiwa yang hanya terjadi sekali",
        correct: "d"
    },
    {
        question: "Salah satu pengertian sejarah secara umum yang benar adalah...",
        a: " Peristiwa atau kejadian di masa lampau yang akan terulang kembali",
        b: "Berbagai peristiwa dan perubahan yang ada di sekitar kita",
        c: "Kisah dan cerita tentang kehidupan keluarga bangsawan di masa lalu",
        d: "Suatu ilmu yang mempelajari tentang berbagai peristiwa di masa lalu yang benar-benar terjadi",
        correct: "d"
    },
    {
        question: "Secara etimologis, sejarah berasal dari kata syajaratun yang berasal dari bahasa arab yang berarti...",
        a: "Pohon",
        b: "Dahan",
        c: "Cabang",
        d: "Ranting",
        correct: "a"
    },
    {
        question: "Kelompok orang-orang Yunnan yang pertama kali bermigrasi ke Nusantara disebut...",
        a: "Melanosoid",
        b: "Proto Melayu",
        c: "Deutero Melayu",
        d: "Bangsa Melayu",
        correct: "a"
    },
    {
        question: "Penyebaran Islam di daerah pesisir pertama kali melalui...",
        a: "Perdagangan",
        b: "Perkawinan",
        c: "Pendidikan",
        d: "Tasawuf",
        correct: "a"
    },
    {
        question: "Perselisihan Portugis dan Spanyol di Maluku diselesaikan melalui perjanjian....",
        a: "Saragosa",
        b: "Tordesilas",
        c: "Versails",
        d: "Vatikan",
        correct: "a"
    },
    {
        question: "Pengaruh aksara pada masa Hindu dan Buddha dengan dikenalnya huruf.....",
        a: "Latin",
        b: "Arab",
        c: "Cina",
        d: "Pallawa",
        correct: "d"
    },
    {
        question: "Raja Kediri yang juga ahli dalam meramal adalah....",
        a: "Bameswara",
        b: "Aryeswara",
        c: "Kameswara",
        d: "Jayabaya",
        correct: "d"
    },
    {
        question: "Kerajaan bercorak Buddha terbesar di Indonesia adalah....",
        a: "Sriwijaya",
        b: "Kalingga",
        c: "Singasari",
        d: "Majapahit",
        correct: "a"
    },
    {
        question: "Lembaga pendidikan yang berkembang pada masa Islam adalah....",
        a: "Pasraman",
        b: "Pesantren",
        c: "Madrasah",
        d: "Pawestren",
        correct: "b"
    },
    {
        question: "Latar belakang dan faktor pendorong kedatangan bangsa-bangsa Eropa ke Asia adalah sebagai berikut, kecuali...",
        a: "Keinginan menemukan daerah asal rempah-rempah",
        b: "Runtuhnya Konstantinopel ke tangan bangsa Turki Seljuk yang menyebabkan putusnya hubungan dagang Asia-Eropa",
        c: "Keinginan membuktikan teori Copernicus bahwa bumi bulat",
        d: "Penemuan mesin uap oleh James Watt",
        correct: "d"
    },
    {
        question: "Sistem tanam paksa terjadi pada masa pemerintahan ...",
        a: "Cornelis De Houtman",
        b: "Van den Bosch ",
        c: "Deandels",
        d: "Raffles",
        correct: "b"
    },
    {
        question: "Kongsi dagang Hindia Timur (EIC) merupakan kongsi dagang milik ...",
        a: "Inggris",
        b: "Prancis",
        c: "Portugis",
        d: "Belanda",
        correct: "a"
    },
    {
        question: "Hak VOC untuk menebang tanaman rempah-rempah di Maluku adalah ...",
        a: "Hongi",
        b: "Contingenten",
        c: "Poenale sanctie",
        d: "Ekstirpasi",
        correct: "d"
    },
    {
        question: "Tujuan Kedatangan Portugis dikenal dengan istilah 3G (gold, gospel dan glory). Gospel berarti bahwa Portugis bertujuan ...",
        a: "Memburu kekayaan dan keuntungan",
        b: "Mencari dan mengumpulkan emas, perak dan bahan tambang",
        c: "Memburu kejayaan, superioritas, dan kekuasaan",
        d: "Menjalankan tugas suci untuk menyebarkan agama",
        correct: "d"
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