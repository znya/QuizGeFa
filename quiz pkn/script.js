const quizData = [
    {
        question: "Kekuasaan tertinggi negara untuk melaksanakan fungsi negara dalam urusan nasional atau dalam negeri merupakan kedaulatan...",
        a: "Ke dalam",
        b: "Ke luar",
        c: "Negara",
        d: "Mutlak",
        correct: "c"
    },
    {
        question: "Landasan hukum kementerian Negara Republik Indonesia adalah...",
        a: "Pasal 17 UUD 1945",
        b: "Pasal 18 UUD 1945", 
        c: "Pasal 19 UUD 1945",
        d: "Pasal 20 UUD 1945",
        correct: "a"
    },
    {
        question: "Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara ...",
        a: "Pasal 27 ayat 2",
        b: "Pasal 27 ayat 3",
        c: "Pasal 28",
        d: "Pasal 29 ayat 1",
        correct: "b"
    },
    {
        question: "Penerapan hak warga negara di bidang politik dapat diimplementasikan dalam bentuk ...",
        a: "Membantu fakir miskin dan anak terlantar",
        b: "Mendapatkan pekerjaan dan penghidupan yang layak",
        c: "Memasuki anggota partai politik",
        d: "Menjadi pengusaha yang loyal terhadap pemerintah",
        correct: "c"
    },
    {
        question: "Sikap dan perilaku warga negara yang dijiwai oleh kecintaannya kepada NKRI disebut ...",
        a: "Bela negara",
        b: "Integrasi nasional",
        c: "Pembelaan",
        d: "Wawasan nusantara",
        correct: "a"
    },
    {
        question: "Negara dalam menetapkan tujuan bersama rakyatnya merupakan sifat negara yang....",
        a: "Mencakup semua",
        b: "Memaksa",
        c: "Multilateral",
        d: "Monopoli",
        correct: "d"
    },
    {
        question: "Proses permohonan kewarganegaraan oleh warga negara asing menjadi warga negara suatu negara disebut...",
        a: "Sosialisasi",
        b: "Imigrasi",
        c: "Naturalisasi",
        d: "Transmigrasi",
        correct: "c"
    },
    {
        question: "Mereka yang berada atau tinggal di wilayah suatu negara hanya untuk batas waktu tertentu dan tidak bermaksud menetap disebut...",
        a: "Rakyat",
        b: "Penduduk",
        c: "Warga negara",
        d: "Bukan penduduk",
        correct: "d"
    },
    {
        question: "Dalam sistem pertahanan keamanan rakyat semesta, rakyat berfungsi sebagai ...",
        a: "Kekuatan utama sistem keamanan",
        b: "Kekuatan utama sistem pertahanan",
        c: "Kekuatan mayoritas sistem pertahanan",
        d: "Kekuatan pendukung pertahanan keamanan",
        correct: "d"
    },
    {
        question: "Kegiatan yang dilakukan siswa yang dapat menciptakan keutuhan Integrasi Nasional dalam lingkungan sekolah adalah.......",
        a: "Ikut kelompok sanggar tari daerah dekat sekolah",
        b: "Ikut menjadi anggota karang taruna",
        c: "Bergotong-royong memperbaiki jalan di perkampungan dekat sekolah",
        d: "Mengadakan gebyar budaya nasional pada saat ulang tahun sekolah",
        correct: "d"
    },
    {
        question: "Orang yang tinggal berdiam dalam suatu negara adalah .....",
        a: "Pendukung Negara",
        b: "Penduduk Negara",
        c: "Kaula Negara",
        d: "Rakyat Negara",
        correct: "b"
    },
    {
        question: "Faktor yang membedakan penduduk Indonesia dan bukan penduduk Indonesia adalah .....",
        a: "Faktor usia",
        b: "Faktor studi",
        c: "Faktor tinggi badan",
        d: "Faktor jangka waktu",
        correct: "d"
    },
    {
        question: "Sejak tanggal 14 November 1945 sistem pemerintahan Indonesia menjadi ....",
        a: "Presidensial",
        b: "Republik",
        c: "Liberal",
        d: "Parlemen",
        correct: "c"
    },
    {
        question: "Di Indonesia yang memiliki wewenang mengajukan calon presiden dan wakil presiden adalah...",
        a: "Partai politik",
        b: "Wakil rakyat",
        c: "Kelompok penekan",
        d: "Parlemen",
        correct: "a"
    },
    {
        question: "Salah satu faktor yang mendorong lahirnya budaya politik adalah ....",
        a: "Kehidupan demokrasi masyarakat",
        b: "Tingkat ekonomi masyarakat",
        c: "Pendidikan politik",
        d: "Sosial budaya masyarakat",
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