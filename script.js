// Quiz questions and answers
const questions = [
    {
        question: "Lớp mình từng có nhiều nhất bao nhiêu người?",
        options: ["35", "36", "37", "38"],
        correctAnswer: "C"
    },
    {
        question: "Từ lớp 6 đến giờ, chúng ta có mấy người mẹ chung?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "B"
    },
    {
        question: "Bạn có yêu cái lớp này không?",
        options: ["Có", "Không"],
        correctAnswer: "A",
        specialQuestion: true
    },
    {
        question: "Nghỉ hè vui vẻ nhé?",
        options: ["Ok", "Khum nhưng vẫn vui"],
        correctAnswer: "A"
    }
];

// Congratulation messages
const congratulationMessages = {
    good: [
        "Chúc mừng bạn đã nhận được Phiếu Bé Ngoan! 🎉",
        "Bạn thật là một học sinh xuất sắc! 🌟",
        "Tuyệt vời! Bạn xứng đáng nhận được Phiếu Bé Ngoan! 🏆"
    ],
    naughty: [
        "Hmm... Có vẻ như bạn cần cố gắng thêm một chút! 😅",
        "Đừng buồn, bạn vẫn là một học sinh tuyệt vời! 💪",
        "Phiếu Bé Lì này sẽ nhắc nhở bạn cố gắng hơn nữa! 📝"
    ]
};

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const nameInput = document.getElementById('name-input');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.querySelector('.options-container');
const certificateTitle = document.getElementById('certificate-title');
const certificateContent = document.getElementById('certificate-content');
const congratulationMessage = document.getElementById('congratulation-message');
const audioToggle = document.getElementById('audio-toggle');
const backgroundMusic = document.getElementById('background-music');

// State variables
let currentQuestion = 0;
let score = 0;
let userName = '';
let selectedGender = '';
let specialAnswer = '';

// Event Listeners
document.querySelectorAll('.gender-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        selectedGender = btn.dataset.gender;
        document.body.className = `${selectedGender}-theme`;
        document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

startBtn.addEventListener('click', startQuiz);
audioToggle.addEventListener('click', toggleAudio);

// Functions
function startQuiz() {
    if (!nameInput.value.trim() || !selectedGender) {
        alert('Vui lòng nhập tên và chọn giới tính!');
        return;
    }

    userName = nameInput.value.trim();
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.dataset.option = String.fromCharCode(65 + index);
        button.addEventListener('click', () => selectAnswer(button));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(button) {
    const selectedOption = button.dataset.option;
    const question = questions[currentQuestion];

    if (question.specialQuestion && selectedOption === 'B') {
        specialAnswer = prompt('Vì sao bạn không yêu lớp mình ☹️?');
        if (specialAnswer) {
            logAnswer();
        }
    } else {
        if (selectedOption === question.correctAnswer) {
            score++;
        }
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const isGood = score >= 3;
    const messages = isGood ? congratulationMessages.good : congratulationMessages.naughty;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    certificateTitle.textContent = isGood ? 'Phiếu Bé Ngoan' : 'Phiếu Bé Lì';
    congratulationMessage.textContent = `${userName} ơi, ${randomMessage}`;

    // Add stickers based on gender and result
    addStickers(isGood);
}

function addStickers(isGood) {
    const stickerContainer = document.getElementById('sticker-container');
    const stickers = [];

    if (selectedGender === 'male') {
        stickers.push('🤖', '🦸‍♂️', '🥷');
    } else if (selectedGender === 'female') {
        stickers.push('🧸', '👗', '🐱');
    } else {
        stickers.push('🌈', '🦄', '✨');
    }

    if (isGood) {
        stickers.push('🏆', '🌟', '🎉');
    } else {
        stickers.push('😅', '💪', '📝');
    }

    stickers.forEach(sticker => {
        const span = document.createElement('span');
        span.textContent = sticker;
        span.style.fontSize = '2rem';
        span.style.margin = '0.5rem';
        span.style.animation = 'float 2s infinite ease-in-out';
        stickerContainer.appendChild(span);
    });
}

function toggleAudio() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        audioToggle.textContent = '🔊';
    } else {
        backgroundMusic.pause();
        audioToggle.textContent = '🔈';
    }
}

async function logAnswer() {
    const result = {
        name: userName,
        gender: selectedGender,
        score: score,
        specialAnswer: specialAnswer,
        timestamp: new Date().toISOString()
    };

    try {
        await saveQuizResult(result);
        console.log('Result saved to Firebase!');
    } catch (error) {
        console.error('Error saving to Firebase:', error);
        // Fallback to local storage if Firebase fails
        const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
        results.push(result);
        localStorage.setItem('quizResults', JSON.stringify(results));
    }
}

// Initialize background elements
function createBackgroundElements() {
    const elements = ['clouds', 'balloons', 'hearts'];
    elements.forEach(element => {
        const container = document.querySelector(`.${element}`);
        for (let i = 0; i < 10; i++) {
            const item = document.createElement('div');
            item.className = element.slice(0, -1);
            item.style.left = `${Math.random() * 100}%`;
            item.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(item);
        }
    });
}

createBackgroundElements(); 