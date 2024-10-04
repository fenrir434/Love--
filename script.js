const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let currentIndex = 0;
const responses = [
    {
        text: "Really?",
        gifUrl: "https://c.tenor.com/hGLpNUcqp6cAAAAC/tenor.gif",
    },
    {
        text: "I love you too! 😘",
        gifUrl: "https://media1.tenor.com/m/0M9CnkWhiKUAAAAC/hug-hugs-and-love.gif",
    },
    {
        text: "Love you even more! ❤️",
        gifUrl: "https://media1.tenor.com/m/HiZA6vKT24QAAAAC/iloveyou.gif",
    },
    {
        text: "💖",
        gifUrl: "https://media1.tenor.com/m/uFB7tkZq3QYAAAAd/heart-heartbeat.gif",
    },
];

yesBtn.addEventListener("click", () => {
    question.innerHTML = responses[currentIndex].text;
    gif.src = responses[currentIndex].gifUrl;

    currentIndex = (currentIndex + 1) % responses.length;
});

const moveButton = () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

noBtn.addEventListener("mouseover", moveButton);

// For mobile touch screens (since hover doesn't work)
noBtn.addEventListener("touchstart", moveButton);
