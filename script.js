const dataPlanet = {

    desain: {
        title: "🎨 Planet Desain",
        text: "Dunia kreativitas seperti desain grafis, fotografi, videografi, ilustrasi digital, dan UI/UX."
    },

    jaringan: {
        title: "🌐 Planet Jaringan",
        text: "Pelajari bagaimana komputer terhubung menggunakan kabel LAN, router, switch, Wi-Fi, dan fiber optik."
    },

    server: {
        title: "🖥️ Planet Server",
        text: "Kenali server, Linux, database, cloud computing, dan administrasi sistem."
    },

    ai: {
        title: "🤖 Planet AI",
        text: "Pelajari Artificial Intelligence, chatbot, AI image generation, dan teknologi pintar."
    },

    "masa-depan": {
        title: "🚀 Planet Masa Depan",
        text: "Temukan berbagai peluang karier teknologi seperti web developer, network engineer, graphic designer, dan AI specialist."
    }

};


/* PLANET INTERAKTIF */

const cards = document.querySelectorAll(".planet-card");

const infoTitle = document.getElementById("infoTitle");

const infoText = document.getElementById("infoText");


cards.forEach(function(card) {

    card.addEventListener("click", function() {

        const planet =
            card.dataset.planet;


        infoTitle.textContent =
            dataPlanet[planet].title;


        infoText.textContent =
            dataPlanet[planet].text;


        cards.forEach(function(item) {

            item.classList.remove("active");

        });


        card.classList.add("active");

    });

});


/* =========================
   KUIS
========================= */


const questions = [

    {
        question:
            "Apa kegiatan yang paling kamu sukai?",

        answers: [

            {
                text: "Membuat gambar dan desain",
                type: "desain"
            },

            {
                text: "Menghubungkan komputer",
                type: "jaringan"
            },

            {
                text: "Mengatur server dan data",
                type: "server"
            },

            {
                text: "Mencoba teknologi AI",
                type: "ai"
            }

        ]

    },


    {
        question:
            "Teknologi apa yang paling ingin kamu pelajari?",

        answers: [

            {
                text: "Desain digital",
                type: "desain"
            },

            {
                text: "Jaringan internet",
                type: "jaringan"
            },

            {
                text: "Server dan cloud",
                type: "server"
            },

            {
                text: "Kecerdasan buatan",
                type: "ai"
            }

        ]

    },


    {
        question:
            "Proyek apa yang ingin kamu buat?",

        answers: [

            {
                text: "Poster atau desain",
                type: "desain"
            },

            {
                text: "Jaringan komputer",
                type: "jaringan"
            },

            {
                text: "Website dan server",
                type: "server"
            },

            {
                text: "Chatbot pintar",
                type: "ai"
            }

        ]

    }

];


let currentQuestion = 0;

let userAnswers = [];


const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const progressElement =
    document.getElementById("quizProgress");

const resultElement =
    document.getElementById("quizResult");


function showQuestion() {

    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    answersElement.innerHTML = "";


    question.answers.forEach(function(answer) {

        const button =
            document.createElement("button");


        button.className = "answer";


        button.textContent =
            answer.text;


        button.addEventListener(
            "click",
            function() {

                userAnswers.push(
                    answer.type
                );


                currentQuestion++;


                if (
                    currentQuestion <
                    questions.length
                ) {

                    showQuestion();

                } else {

                    showResult();

                }

            }
        );


        answersElement.appendChild(
            button
        );

    });


    progressElement.textContent =
        "Pertanyaan " +
        (currentQuestion + 1) +
        " dari " +
        questions.length;

}


function showResult() {

    questionElement.textContent =
        "🎉 Kuis Selesai!";


    answersElement.innerHTML = "";


    progressElement.textContent = "";


    const scores = {};


    userAnswers.forEach(function(answer) {

        if (scores[answer]) {

            scores[answer]++;

        } else {

            scores[answer] = 1;

        }

    });


    let result =
        userAnswers[0];


    for (let type in scores) {

        if (
            scores[type] >
            scores[result]
        ) {

            result = type;

        }

    }


    const results = {

        desain:
            "🎨 Kamu cocok dengan dunia DESAIN!",

        jaringan:
            "🌐 Kamu cocok dengan dunia JARINGAN!",

        server:
            "🖥️ Kamu cocok dengan dunia SERVER!",

        ai:
            "🤖 Kamu cocok dengan dunia AI!"

    };


    resultElement.innerHTML =
        "<h2>" +
        results[result] +
        "</h2>" +

        "<p>Teruslah belajar dan jelajahi teknologi yang kamu sukai!</p>";

}


/* MULAI KUIS */

showQuestion();