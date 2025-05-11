const rainCanvas = document.getElementById('rainCanvas');
const rainCtx = rainCanvas.getContext('2d');

// Function to check if it's mobile view
function isMobileView() {
  return window.innerWidth <= 1100; // Default. Set your desired mobile breakpoint
}

// Set canvas size based on the window size
function resizeCanvas() {
  rainCanvas.width = window.innerWidth;
  rainCanvas.height = window.innerHeight;
}

// Initial setup
resizeCanvas();

// Handle resizing
window.addEventListener('resize', resizeCanvas);

// Raindrop particles
const drops = [];

for (let i = 0; i < 500; i++) {
  drops.push({
    x: Math.random() * rainCanvas.width,
    y: Math.random() * rainCanvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 5 + 4,
    opacity: Math.random() * 0.5 + 0.3,
  });
}

function drawRain() {
  rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);

  rainCtx.lineWidth = 1;

  for (let i = 0; i < drops.length; i++) {
    const d = drops[i];
    rainCtx.beginPath();
    rainCtx.moveTo(d.x, d.y);
    rainCtx.lineTo(d.x, d.y + d.length);
    rainCtx.strokeStyle = `rgba(173, 216, 230, ${d.opacity})`;
    rainCtx.stroke();

    d.y += d.speed;
    if (d.y > rainCanvas.height) {
      d.y = -d.length;
      d.x = Math.random() * rainCanvas.width;
    }
  }

  requestAnimationFrame(drawRain);
}

// Start the rain animation
if (!isMobileView()) {
  drawRain();
}
