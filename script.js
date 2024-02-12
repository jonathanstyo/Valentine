const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

const randomMessages = [
    "Sayanggg kok gituuu, be my valentine!",
    "Ayolaaahh sayangkuuu, be my valentine!",
    "Jangan bikin aku sadddd, be my valentine!",
    "Yaudaa aku tungguin sampe mau pokoknya!",
    "PWISPWISPWISPWISPWISSSS SAYANGGGGGKUUU",
    "MWAHHHH I love you sayangkuuu say yes yah!"
];

yesBtn.addEventListener('click', function() {
    window.location.href = "yes.html";
});

noBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    const message = randomMessages[randomIndex];
    document.getElementById('question').textContent = message;
});
