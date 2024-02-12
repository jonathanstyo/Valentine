const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

const randomMessages = [
    "Are you sure you don't want to be my valentine?",
    "Please be my valentine!",
    "Don't break my heart, be my valentine!",
    "I'll be waiting for you to change your mind!",
    "Let's give love a chance, be my valentine!",
    "My heart is yours, please be my valentine!"
];

yesBtn.addEventListener('click', function() {
    window.location.href = "yes.html";
});

noBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    const message = randomMessages[randomIndex];
    document.getElementById('question').textContent = message;
});
