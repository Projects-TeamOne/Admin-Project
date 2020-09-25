const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image: './images/drinking.jpg',
        text: "I'm Thirsty"
    },
    {
        image: './images/food.jpg',
        text: "I'm Hungry"
    },
    {
        image: './images/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: './images/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: './images/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: './images/angry.jpg',
        text: "I'm angry"
    },
    {
        image: './images/sad.jpg',
        text: "I'm sad"
    },
    {
        image: './images/scared.jpg',
        text: "I'm scared"
    },
    {
        image: './images/outside.jpg',
        text: "I want to go outside"
    },
    {
        image: './images/home.jpg',
        text: "I want to go home"
    },
    {
        image: './images/school.jpg',
        text: "I want to go to school"
    },
    {
        image: './images/grandma.jpg',
        text: "I want to go to grandmas"
    }
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
    const box = document.createElement('div')
    const { image, text } = item
    box.classList.add('box')
    box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
    `;

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();
        // Add active effect
        box.classList.add('active');
        setTimeout( () => box.classList.remove('active'), 800);
    })
    main.appendChild(box);
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voicesSelect.appendChild(option);
    })
}

// set Text 
function setTextMessage(text) {
    message.text = text;
}

// speak text
function speakText() {
    speechSynthesis.speak(message);
}

// set voice
function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// toggle text box 
toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.toggle('show'));
closeBtn.addEventListener('click', () => document.getElementById('text-box').classList.remove('show'));

//  Change voice
voicesSelect.addEventListener('change', setVoice);

// read text button
readBtn.addEventListener('click', () => {
    setTextMessage(textArea.value);
    speakText();
});

getVoices();