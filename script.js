/* AGE COUNT-UP ANIMATION */
let age = 0;
const targetAge = 27;
const ageEl = document.getElementById("age");

const ageInterval = setInterval(() => {
    age++;
    ageEl.textContent = age;
    if (age === targetAge) clearInterval(ageInterval);
}, 80);

/* AUTO IMAGE SLIDER */
const photos = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg"
];

let current = 0;
const img = document.getElementById("photo");

function autoSlide() {
    img.style.opacity = 0;
    setTimeout(() => {
        current = (current + 1) % photos.length;
        img.src = photos[current];
        img.style.opacity = 1;
    }, 1000);
}

setInterval(autoSlide, 3000);

/* SURPRISE MESSAGE */
function showLove() {
    document.getElementById("loveMessage").style.display = "block";
}

/* COUNTDOWN */
const birthday = new Date("2025-01-01 00:00:00").getTime(); // CHANGE DATE

setInterval(() => {
    const now = new Date().getTime();
    const diff = birthday - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "🎉 Happy Birthday! 🎉";
        return;
    }

    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `⏰ ${d}d ${h}h ${m}m ${s}s left`;
}, 1000);

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 4 + 2
}));

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
        ctx.fill();
        c.y += c.d;
        if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(drawConfetti);
}
drawConfetti();
