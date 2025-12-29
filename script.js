/* Surprise Message */
function showLove() {
    document.getElementById("loveMessage").style.display = "block";
}

/* Create 27 Candles */
const candleGroup = document.getElementById("candles");
const startX = 90;
const gap = 7;

for (let i = 0; i < 27; i++) {
    const x = startX + i * gap;
    candleGroup.innerHTML += `
        <rect x="${x}" y="70" width="6" height="25" fill="#ff4d4d"/>
        <circle cx="${x + 3}" cy="65" r="4" fill="gold">
            <animate attributeName="r" values="3;5;3"
                     dur="0.6s" repeatCount="indefinite"/>
        </circle>
    `;
}

/* Confetti */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = Array.from({length: 150}, () => ({
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
        ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
        ctx.fill();
        c.y += c.d;
        if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(drawConfetti);
}
drawConfetti();

/* Fireworks Canvas */
const fw = document.getElementById("fireworks");
const fctx = fw.getContext("2d");
fw.width = window.innerWidth;
fw.height = window.innerHeight;

let particles = [];

setInterval(() => {
    const x = window.innerWidth / 2;
    const y = 150;
    for (let i = 0; i < 30; i++) {
        particles.push({
            x, y,
            vx: Math.cos(i) * Math.random() * 4,
            vy: Math.sin(i) * Math.random() * 4,
            life: 30
        });
    }
}, 1200);

function drawFireworks() {
    fctx.clearRect(0, 0, fw.width, fw.height);
    particles.forEach(p => {
        fctx.fillStyle = "gold";
        fctx.fillRect(p.x, p.y, 2, 2);
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
    });
    particles = particles.filter(p => p.life > 0);
    requestAnimationFrame(drawFireworks);
}
drawFireworks();
