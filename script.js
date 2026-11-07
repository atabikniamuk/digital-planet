
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. DATA PLANET
    // ==========================================

    const planets = {
        desain: {
            category: "01 / CREATIVE DESIGN",
            title: "PLANET DESAIN",
            description: "Jelajahi dunia kreativitas, visual, ilustrasi, dan komunikasi digital.",
            material: "Desain grafis, ilustrasi, tipografi, UI/UX, dan branding.",
            application: "Membuat poster, identitas merek, konten digital, dan desain antarmuka.",
            skills: "Kreativitas, komposisi visual, ilustrasi, dan komunikasi."
        },

        jaringan: {
            category: "02 / NETWORK TECHNOLOGY",
            title: "PLANET JARINGAN",
            description: "Pelajari bagaimana komputer saling terhubung dan berkomunikasi.",
            material: "Jaringan komputer, IP Address, routing, switching, dan keamanan jaringan.",
            application: "Membangun jaringan sekolah, kantor, dan sistem komunikasi.",
            skills: "Analisis jaringan, konfigurasi, dan pemecahan masalah."
        },

        server: {
            category: "03 / SERVER SYSTEM",
            title: "PLANET SERVER",
            description: "Kenali teknologi yang mengelola data dan menjalankan layanan digital.",
            material: "Web server, database, sistem operasi, dan cloud computing.",
            application: "Mengelola website, penyimpanan data, dan layanan online.",
            skills: "Administrasi server, pengelolaan data, dan pemeliharaan sistem."
        },

        ai: {
            category: "04 / ARTIFICIAL INTELLIGENCE",
            title: "PLANET AI",
            description: "Jelajahi kecerdasan buatan dan teknologi yang dapat membantu manusia.",
            material: "Machine learning, AI, chatbot, dan pengolahan data.",
            application: "Membuat chatbot, sistem rekomendasi, dan aplikasi pintar.",
            skills: "Logika, pemrograman, analisis, dan kreativitas."
        },

        "masa-depan": {
            category: "05 / FUTURE TECHNOLOGY",
            title: "PLANET MASA DEPAN",
            description: "Temukan berbagai inovasi teknologi yang membentuk masa depan.",
            material: "Internet of Things, robotika, teknologi pintar, dan inovasi digital.",
            application: "Mengembangkan perangkat pintar dan solusi teknologi.",
            skills: "Inovasi, pemecahan masalah, dan pemikiran kreatif."
        }
    };


    // ==========================================
    // 2. ELEMEN INFORMASI PLANET
    // ==========================================

    const infoCategory = document.getElementById("infoCategory");
    const infoTitle = document.getElementById("infoTitle");
    const infoText = document.getElementById("infoText");
    const infoMaterial = document.getElementById("infoMaterial");
    const infoApplication = document.getElementById("infoApplication");
    const infoSkills = document.getElementById("infoSkills");


    // ==========================================
    // 3. FUNGSI PILIH PLANET
    // ==========================================

    function selectPlanet(key, scroll = true) {

        const planet = planets[key];

        if (!planet) return;

        if (infoCategory) infoCategory.textContent = planet.category;
        if (infoTitle) infoTitle.textContent = planet.title;
        if (infoText) infoText.textContent = planet.description;
        if (infoMaterial) infoMaterial.textContent = planet.material;
        if (infoApplication) infoApplication.textContent = planet.application;
        if (infoSkills) infoSkills.textContent = planet.skills;

        document.querySelectorAll("[data-planet]").forEach(function (item) {
            item.classList.toggle("active", item.dataset.planet === key);
        });

        if (scroll && infoTitle) {
            document.getElementById("explore")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }


    // ==========================================
    // 4. INTERAKSI PLANET
    // ==========================================

    document.addEventListener("click", function (event) {

        if (!(event.target instanceof Element)) return;

        const planetButton = event.target.closest("[data-planet]");

        if (!planetButton) return;

        event.preventDefault();

        selectPlanet(planetButton.dataset.planet);
    });


    // ==========================================
    // 5. DATA 8 PERTANYAAN KUIS
    // ==========================================

    const questions = [

        {
            question: "Aktivitas mana yang paling menarik bagimu?",
            answers: [
                ["Membuat gambar, poster, dan desain", "desain"],
                ["Menghubungkan komputer dan internet", "jaringan"],
                ["Mengelola server dan penyimpanan data", "server"],
                ["Mempelajari kecerdasan buatan", "ai"],
                ["Menciptakan teknologi masa depan", "masa-depan"]
            ]
        },

        {
            question: "Apa yang paling ingin kamu pelajari?",
            answers: [
                ["Desain visual dan ilustrasi digital", "desain"],
                ["Jaringan komputer dan internet", "jaringan"],
                ["Website dan database", "server"],
                ["AI dan machine learning", "ai"],
                ["Robotika dan perangkat pintar", "masa-depan"]
            ]
        },

        {
            question: "Jika memiliki sebuah proyek, apa yang ingin kamu buat?",
            answers: [
                ["Logo dan identitas sebuah merek", "desain"],
                ["Jaringan komputer untuk sekolah", "jaringan"],
                ["Website dengan sistem database", "server"],
                ["Aplikasi dengan kecerdasan buatan", "ai"],
                ["Perangkat teknologi otomatis", "masa-depan"]
            ]
        },

        {
            question: "Lingkungan kerja mana yang menarik bagimu?",
            answers: [
                ["Studio kreatif dan desain", "desain"],
                ["Ruang jaringan dan komputer", "jaringan"],
                ["Pusat data dan pengelolaan server", "server"],
                ["Laboratorium pengembangan AI", "ai"],
                ["Laboratorium inovasi teknologi", "masa-depan"]
            ]
        },

        {
            question: "Masalah apa yang ingin kamu selesaikan?",
            answers: [
                ["Tampilan visual yang kurang menarik", "desain"],
                ["Koneksi internet yang bermasalah", "jaringan"],
                ["Pengelolaan data yang tidak teratur", "server"],
                ["Pekerjaan yang bisa dibantu AI", "ai"],
                ["Kebutuhan teknologi yang belum terpenuhi", "masa-depan"]
            ]
        },

        {
            question: "Kemampuan apa yang ingin kamu kuasai?",
            answers: [
                ["Menggambar dan desain digital", "desain"],
                ["Konfigurasi jaringan komputer", "jaringan"],
                ["Mengelola website dan server", "server"],
                ["Membuat program AI", "ai"],
                ["Menciptakan inovasi teknologi", "masa-depan"]
            ]
        },

        {
            question: "Teknologi mana yang paling membuatmu penasaran?",
            answers: [
                ["Desain 3D dan animasi", "desain"],
                ["Internet dan keamanan jaringan", "jaringan"],
                ["Cloud storage dan database", "server"],
                ["Chatbot dan AI generatif", "ai"],
                ["Robot dan Internet of Things", "masa-depan"]
            ]
        },

        {
            question: "Apa cita-cita bidang teknologi yang menarik bagimu?",
            answers: [
                ["Menjadi desainer grafis profesional", "desain"],
                ["Menjadi network engineer", "jaringan"],
                ["Menjadi administrator server", "server"],
                ["Menjadi pengembang AI", "ai"],
                ["Menjadi inovator teknologi", "masa-depan"]
            ]
        }

    ];


    // ==========================================
    // 6. ELEMEN KUIS
    // ==========================================

    const quizArea = document.getElementById("quizArea");
    const progress = document.getElementById("quizProgress");
    const progressBar = document.getElementById("quizProgressBar");
    const questionCount = document.getElementById("quizQuestionCount");

    let currentQuestion = 0;

    let scores = {
        desain: 0,
        jaringan: 0,
        server: 0,
        ai: 0,
        "masa-depan": 0
    };


    // ==========================================
    // 7. RESET KUIS
    // ==========================================

    function resetQuiz() {

        currentQuestion = 0;

        scores = {
            desain: 0,
            jaringan: 0,
            server: 0,
            ai: 0,
            "masa-depan": 0
        };
    }


    // ==========================================
    // 8. UPDATE PROGRESS
    // ==========================================

    function updateProgress() {

        const percentage =
            ((currentQuestion + 1) / questions.length) * 100;

        if (progressBar) {
            progressBar.style.width = percentage + "%";
        }

        if (questionCount) {
            questionCount.textContent =
                "PERTANYAAN " +
                (currentQuestion + 1) +
                " / " +
                questions.length;
        }
    }


    // ==========================================
    // 9. TAMPILKAN PERTANYAAN
    // ==========================================

    function showQuestion() {

        if (!quizArea) return;

        const question = questions[currentQuestion];

        updateProgress();

        let answersHTML = "";

        question.answers.forEach(function (answer, index) {

            const letter = String.fromCharCode(65 + index);

            answersHTML += `
                <button
                    type="button"
                    class="quiz-option"
                    data-answer-planet="${answer[1]}"
                >
                    <span class="quiz-option-letter">${letter}</span>
                    <span>${answer[0]}</span>
                </button>
            `;
        });

        quizArea.innerHTML = `
            <div class="quiz-question-content">

                <p class="quiz-mission-label">
                    ✦ MISSION ${String(currentQuestion + 1).padStart(2, "0")}
                </p>

                <h3 class="quiz-question">
                    ${question.question}
                </h3>

                <p class="quiz-description">
                    Pilih satu jawaban yang paling menggambarkan minatmu.
                </p>

                <div class="quiz-options">
                    ${answersHTML}
                </div>

            </div>
        `;
    }


    // ==========================================
    // 10. HITUNG HASIL KUIS
    // ==========================================

    function showResult() {

        if (!quizArea) return;

        const highestScore = Math.max(...Object.values(scores));

        const winners = Object.keys(scores).filter(function (key) {
            return scores[key] === highestScore;
        });

        const resultKey = winners[0];

        const result = planets[resultKey];

        if (progressBar) {
            progressBar.style.width = "100%";
        }

        if (questionCount) {
            questionCount.textContent = "MISSION SELESAI / 08";
        }

        quizArea.innerHTML = `
            <div class="quiz-result">

                <p class="quiz-mission-label">
                    ✦ MISSION COMPLETED
                </p>

                <h2>PLANETMU DITEMUKAN!</h2>

                <p class="quiz-description">
                    Berdasarkan jawabanmu, bidang yang paling sesuai
                    dengan minatmu adalah:
                </p>

                <div class="quiz-result-card">

                    <span class="quiz-result-category">
                        ${result.category}
                    </span>

                    <h2>${result.title}</h2>

                    <p>${result.description}</p>

                </div>

                <div class="quiz-result-actions">

                    <button
                        type="button"
                        class="primary-button"
                        id="exploreResult"
                    >
                        Jelajahi Planet ↗
                    </button>

                    <button
                        type="button"
                        class="secondary-button"
                        id="retryQuiz"
                    >
                        Ulangi Kuis ↻
                    </button>

                </div>

            </div>
        `;

        const exploreButton = document.getElementById("exploreResult");

        const retryButton = document.getElementById("retryQuiz");

        if (exploreButton) {
            exploreButton.addEventListener("click", function () {
                selectPlanet(resultKey);
            });
        }

        if (retryButton) {
            retryButton.addEventListener("click", function () {
                resetQuiz();
                showQuestion();

                if (progress) {
                    progress.hidden = false;
                }
            });
        }
    }


    // ==========================================
    // 11. JAWABAN PERTANYAAN
    // ==========================================

    if (quizArea) {

        quizArea.addEventListener("click", function (event) {

            if (!(event.target instanceof Element)) return;

            const answerButton = event.target.closest(
                "[data-answer-planet]"
            );

            if (!answerButton) return;

            const selectedPlanet = answerButton.dataset.answerPlanet;

            if (!(selectedPlanet in scores)) return;

            scores[selectedPlanet]++;

            currentQuestion++;

            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }

        });

    }


    // ==========================================
    // 12. MULAI KUIS OTOMATIS
    // ==========================================

    if (quizArea) {

        resetQuiz();

        if (progress) {
            progress.hidden = false;
        }

        showQuestion();

    } else {

        console.error("Elemen quizArea tidak ditemukan!");

    }


    // ==========================================
    // 13. PILIH PLANET AWAL
    // ==========================================

    selectPlanet("desain", false);


    console.log("DIGITAL PLANET BERHASIL DIMUAT");

});
