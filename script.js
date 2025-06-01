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
        "Chúc mày 1/6 cười toe toét như Dora lúc được ăn đường nheee 😝",
        "Mong bạn luôn giữ trái tim dễ thương và cái đầu thông minh như bây giờ 🧠💗",
        "Chúc bạn học hành chăm chỉ, ngủ đủ giấc và không quên… uống nước nha! 😗💦",
        "Bé ngoan như bạn xứng đáng được phát 10 cái kẹo 🍬",
        "Hôm nay 1/6, chúc bạn dễ thương gấp 10 lần hôm qua 🤭",
        "Bé ngoan mà còn hài hước như bạn là thuộc hàng hiếm á =))",
        "Mong bạn luôn là ánh mặt trời nhỏ trong lớp, tỏa sáng nhẹ nhàng mà ấm áp ☀️",
        "Chúc bạn luôn đủ vui để cười, đủ ngọt để ai cũng muốn ôm 🤗",
        "Có thể bạn không hoàn hảo, nhưng chắc chắn là bạn… đáng iu 😌",
        "Nụ cười của bạn là năng lượng tích cực mỗi ngày đó nhaaa 🌸",
        "Bé ngoan như bạn không cần khen nữa, cần phát thưởng thôi 🎁",
        "Chúc bạn luôn tự tin kể cả khi đi thi quên học bài 😅",
        "Dù lớn vẫn cứ giữ tâm hồn dễ thương như học lớp 8 nhaaa 🐥",
        "Chúc bạn luôn vững vàng như trụ cột group chat 🧱",
        "Mong bạn vừa xinh, vừa giỏi, vừa vui vẻ hoài hoài 🥰",
        "Này, bé ngoan như bạn mà không được phát phiếu là sai rùi đó nha 😤",
        "Mỗi lần bạn cười là thêm một bông hoa nở trong lớp 🪻",
        "Chúc bạn dũng cảm, hiền lành, nhưng cũng đủ lầy cho vui 😈",
        "Một người bạn tuyệt vời như bạn nên được phát huy mãi mãi! 🌟",
        "Chúc bạn có mùa hè thật \"chill\", ngủ dậy lúc... 11 giờ sáng 🛌💤",
        "Chúc bạn mỗi ngày đều thấy vui vì có bạn bè bên cạnh 🫶",
        "Mày mà không được phát phiếu Bé Ngoan thì ai được nữa trời 😤",
        "Mong tụi mình chơi thân như này đến hết cấp luôn nhaaa 🎀",
        "Bé ngoan không phải ai cũng được gọi đâu, mà bạn thì xứng lắm á 😚",
        "Tự hào vì được làm bạn với một người vừa đáng yêu vừa lễ phép như bạn 😌",
        "Chúc bạn ngày càng trưởng thành nhưng vẫn giữ được trái tim trẻ con 🐣",
        "Mong mọi điều bạn mong đều thành sự thật, trừ việc xin nghỉ học 😅",
        "Bạn dễ thương đến mức tớ muốn dán bạn vô sổ tay luôn cho đỡ nhớ 😭",
        "Chúc bạn học không quá giỏi, để tụi mình còn học chung nữa chớ 😏",
        "Có thể bạn không hoàn hảo, nhưng chắc chắn bạn đáng được yêu quý 💕",
        "Chúc bạn có mùa hè ngủ tới trưa, ăn tới tối mà vẫn ốm 😭",
        "Mong bạn luôn biết rằng bạn rất đặc biệt với tụi tớ 🩷",
        "Chúc bạn thi đâu đậu đó, trừ khi là trò chơi dân gian =))",
        "Mỗi ngày nhìn bạn cười là mình cũng vui theo luôn á 😆",
        "Ước gì có nhiều người như bạn hơn ở trong lớp mình 🤍",
        "Bé ngoan như bạn là linh hồn của mấy trò vui trong lớp đó nghen!",
        "Tụi mình chơi với nhau hoài luôn nha, không ai được đổi lớp đâu đó 😡",
        "Chúc bạn vừa ngoan vừa \"mặn mòi\" như bây giờ là đủ vui rồi 🤪",
        "Mong bạn được sống là chính mình, không cần gồng chi hết nha 💛",
        "Người như bạn không chỉ là bạn tốt, mà là vitamin yêu đời 🍊",
        "Nhìn bạn là biết \"bé ngoan chính hiệu\" rồi, khỏi cần phiếu luôn á 🤣",
        "Mỗi lần bạn nói gì đó tử tế là lòng mình mềm nhũn 🧸",
        "Mong bạn luôn giữ nụ cười siêu cấp đáng yêu đó nha 😊",
        "Bạn có thể không biết, nhưng bạn làm tụi mình thấy vui lắm á 😚",
        "Chúc bạn luôn dũng cảm chọn điều đúng, dù không phải dễ dàng 💪",
        "Hôm nay bạn nhận phiếu Bé Ngoan là đúng rùi, ai dám cãi 🤭",
        "Chúc bạn luôn sống tử tế, vì bạn làm được điều đó rất tự nhiên",
        "Mong bạn sẽ là ánh sáng nhỏ cho ai đó đang cần 🕯️",
        "Nhìn lại lớp mình, bạn luôn là một phần không thể thiếu nha",
        "Nếu có bảng xếp hạng \"bé ngoan dễ thương\", bạn chắc top đầu =))",
        "Bé ngoan như bạn mà phát sóng trên TV là có fan club đó 🤣",
        "Chúc bạn được yêu quý mà không cần cố gắng gì hết 💗",
        "Nếu lớp mình có bảo tàng kỷ niệm, bạn chắc chắn có ảnh trưng bày 🤭",
        "Mỗi ngày đi học là niềm vui, vì có bạn ngồi gần 😚",
        "Chúc bạn luôn dễ thương như sticker con mèo em dán lên vở 🐱",
        "Đứa nào không thích bạn chắc chắn có vấn đề =))",
        "Mỗi lần nghe bạn kể chuyện là một lần cười muốn xỉu 🤣",
        "Tính bạn dịu dàng như trời mưa mùa hạ á ☔",
        "Bé ngoan mà còn \"cool\" nữa thì chính là bạn chứ ai 😎",
        "Mong bạn sẽ luôn học ít điểm cao =)) (đùa thôi, học giỏi nha)",
        "Mong bạn sau này thành công nhưng vẫn nhớ lớp mình nghen!",
        "Lỡ như mai xa nhau, chúc bạn vẫn cười tươi nhaaa 😢",
        "Mỗi lần tụi mình \"khùng điên\" là có bạn điên chung, cảm ơn nha 🤪",
        "Bé ngoan phải biết chia snack, bạn là đỉnh nhất khoản này 😋",
        "Mong bạn luôn có một người bạn tốt – như chính bạn đối với tụi mình 🤍",
        "Bạn như một cái ô – che mưa mà còn dễ thương 🏖️",
        "Chúc bạn luôn được người khác đối xử tử tế như cách bạn đối xử với tụi mình 😇",
        "Bé ngoan này mà phát hành thành truyện tranh chắc bán chạy á =))",
        "Nếu có bảng xếp hạng \"tính cách vàng\", bạn chắc chắn nằm trong top 🌟",
        "Mong bạn sống cuộc đời hạnh phúc và trọn vẹn, như hôm nhận phiếu Bé Ngoan 🧁",
        "Hãy cứ là bạn – như hôm nay – là đủ tuyệt vời rồi 🧸",
        "Mong bạn không cần nổi bật, chỉ cần tử tế là được nha 🤍",
        "Bé ngoan có thể trầm lặng, miễn là giống bạn thì ai cũng quý 😌",
        "Không cần phải hoàn hảo, vì bạn đã rất tuyệt vời rồi 🧡",
        "Cảm ơn bạn vì luôn đem lại cảm giác dễ chịu khi tụi mình nói chuyện với nhau 🌈",
        "Nếu có huy hiệu \"bạn tốt toàn năng\", mình chắc bạn là chủ tịch 🤝",
        "Phiếu Bé Ngoan phát cho bạn là điều hoàn toàn xứng đáng luôn 💯",
        "Tụi mình cùng nhau lớn lên, rồi cùng nhau ngoan hơn mỗi ngày nha 🧁",
        "Bé ngoan không phải người hoàn hảo – mà là người biết cố gắng, như bạn đó 🌟",
        "Mong bạn luôn nhớ: bạn đủ tốt, đủ ngoan, đủ đáng yêu rồi 💓",
        "Nếu lớp học là khu vườn, bạn chính là bông hoa dịu dàng 🌼",
        "Chúc bạn mỗi sáng thức dậy đều thấy yêu bản thân mình hơn 🍀",
        "Cảm ơn vì bạn luôn là phiên bản tốt nhất của chính mình 🪞",
        "Mong bạn biết bạn có thể làm được nhiều hơn mình tưởng 🎯",
        "Mỗi lần tụi mình chơi chung là mỗi lần thêm kỷ niệm đẹp 🧃",
        "Chúc bạn đủ ngốc để vui, đủ thông minh để hạnh phúc 🤭",
        "Bé ngoan mà biết tấu hài như bạn thì hiếm lắm á =))",
        "Mỗi bạn trong lớp là một sắc màu, còn bạn là màu… đáng yêu 🎨",
        "Bạn có biết bạn khiến người khác thấy yên tâm không? 🫶",
        "Bạn như ánh đèn nhỏ trong lớp, âm thầm nhưng sáng 😌",
        "Chúc bạn 1/6 ngọt như trà sữa full topping 🧋",
        "Bé ngoan như bạn là đặc sản lớp mình á 😝",
        "Mong bạn sẽ nhận được tình cảm chân thành như cách bạn đối xử với người khác 🤍",
        "Tính bạn vừa hiền vừa cute, nhìn là muốn tặng phiếu luôn rồi 😳",
        "Hôm nay bạn nhận phiếu Bé Ngoan, còn mai chắc là danh hiệu Bé Đáng Nhớ 🏆",
        "Mong bạn có một mùa hè đầy cười, ít homework, nhiều ngủ 😴",
        "Có thể bạn không nổi bật, nhưng chắc chắn không ai quên bạn được 🧡",
        "Cảm ơn vì bạn đã luôn dễ thương, ngay cả khi không cần cố gắng gì hết ☁️",
        "Chúc bạn mãi là người lan tỏa sự tử tế trong lớp 👑",
        "Và cuối cùng… chúc bạn luôn cảm thấy mình xứng đáng với tất cả điều tốt đẹp trên đời này 💌"
    ],
    naughty: [
        "Hmm... Có vẻ như bạn cần cố gắng thêm một chút! 😅",
        "Đừng buồn, bạn vẫn là một học sinh tuyệt vời! 💪",
        "Phiếu Bé Lì này sẽ nhắc nhở bạn cố gắng hơn nữa! 📝"
    ]
};

// Keep track of used messages
let usedMessages = new Set();

// Function to get a random unique message
function getRandomUniqueMessage(isGood) {
    const messages = isGood ? congratulationMessages.good : congratulationMessages.naughty;
    
    // If all messages have been used, reset the used messages set
    if (usedMessages.size >= congratulationMessages.good.length) {
        usedMessages.clear();
    }
    
    // Get a random message that hasn't been used
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * messages.length);
    } while (usedMessages.has(randomIndex));
    
    // Add the message index to used messages
    usedMessages.add(randomIndex);
    
    return messages[randomIndex];
}

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

    // Animate selection
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');

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
        setTimeout(() => {
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }, 400); // delay for animation
    }
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const isGood = score >= 3;
    const message = getRandomUniqueMessage(isGood);

    certificateTitle.textContent = isGood ? 'Phiếu Bé Ngoan' : 'Phiếu Bé Lì';
    congratulationMessage.textContent = `${userName} ơi, ${message}`;
    congratulationMessage.classList.remove('animate');
    void congratulationMessage.offsetWidth; // trigger reflow
    congratulationMessage.classList.add('animate');

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

// Update createBackgroundElements for more variety
function createBackgroundElements() {
    const elements = ['clouds', 'balloons', 'hearts'];
    elements.forEach(element => {
        const container = document.querySelector(`.${element}`);
        for (let i = 0; i < 10; i++) {
            const item = document.createElement('div');
            item.className = element.slice(0, -1);
            // Randomize size
            const size = Math.random() * 30 + 20;
            item.style.width = `${size}px`;
            item.style.height = `${size}px`;
            // Randomize left position
            item.style.left = `${Math.random() * 100}%`;
            // Randomize animation delay and duration
            item.style.animationDelay = `${Math.random() * 5}s`;
            if (element === 'clouds') {
                item.style.top = `${Math.random() * 60}%`;
                item.style.opacity = Math.random() * 0.4 + 0.4;
                item.style.animationDuration = `${20 + Math.random() * 20}s`;
            } else if (element === 'balloons' || element === 'hearts') {
                item.style.bottom = `-${size + Math.random() * 40}px`;
                item.style.animationDuration = `${8 + Math.random() * 8}s`;
                // Randomize direction
                if (Math.random() > 0.5) {
                    item.style.transform = 'scaleX(-1)';
                }
            }
            container.appendChild(item);
        }
    });
}

createBackgroundElements(); 