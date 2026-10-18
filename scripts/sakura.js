// =============================================
//  CANVAS SAKURA ENGINE
// =============================================
const canvas = document.getElementById('sakura-canvas');
const ctx = canvas.getContext('2d');
let petals = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Petal {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.size = 8 + Math.random() * 12;
    this.speedX = 1 + Math.random() * 2.5;
    this.speedY = 1.2 + Math.random() * 2.2;
    this.rotation = Math.random() * 360;
    this.rotSpeed = (Math.random() - 0.5) * 2;
    this.opacity = 0.4 + Math.random() * 0.55;
  }
  update() {
    this.x += this.speedX + Math.sin(this.y * 0.01) * 0.8;
    this.y += this.speedY;
    this.rotation += this.rotSpeed;
    if (this.y > canvas.height + 20 || this.x > canvas.width + 20) {
      this.reset();
      this.y = -10;
    }
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = `rgba(255, 183, 197, ${this.opacity})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size / 2, -this.size, 0, -this.size * 1.2);
    ctx.bezierCurveTo(this.size / 2, -this.size, this.size / 2, -this.size / 2, 0, 0);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 40; i++) petals.push(new Petal());

function animatePetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of petals) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(animatePetals);
}
animatePetals();
