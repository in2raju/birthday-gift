/* Photo Slider */
const photos = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg"
];
let index = 0;

function showPhoto() {
    document.getElementById("photo").src = photos[index];
}

function nextPhoto() {
    index = (index + 1) % photos.length;
    showPhoto();
}

function prevPhoto() {
    index = (index - 1 + photos.length) % photos.length;
    showPhoto();
}

/* Music */
const music = document.getElementById("bgMusic");
function toggleMusic() {
    if (music.paused) music.play();
    else music.pause();
}

/* Countdown */
const birthdayDate = new Date("2025-01-01 00:00:00").getTime(); // CHANGE DATE

setInterval(() => {
    const now = new Date().getTime();
    const diff = birthdayDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "🎉 Happy Birthday! 🎉";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `⏰ ${d}d ${h}h ${m}m ${s}s left`;
}, 1000);

/* Love Message */
function showLove() {
    document.getElementById("loveMessage").style.display = "block";
}

/* Confetti */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 5 + 2
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
        ctx.fill();
        c.y += c.d;
        if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(drawConfetti);
}
drawConfetti();
