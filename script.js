const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let currentIndex = 0;
const responses = [
    {
        text: "Really?",
        gifUrl: "./images/video2.mp4", // Update paths to MP4 files
    },
    {
        text: "Love you even more! ❤️",
        gifUrl: "./images/video3.mp4",
    },
    {
        text: "I love you too! 😘",
        gifUrl: "./images/video4.mp4",
    },
    {
        text: "💖",
        gifUrl: "./images/video5.mp4",
    },
];

yesBtn.addEventListener("click", () => {
    question.innerHTML = responses[currentIndex].text;
    gif.src = responses[currentIndex].gifUrl; // Update video source
    gif.play(); // Play the video when updated

    currentIndex = (currentIndex + 1) % responses.length;
});

// Move button functionality remains the same
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
noBtn.addEventListener("touchstart", moveButton);
