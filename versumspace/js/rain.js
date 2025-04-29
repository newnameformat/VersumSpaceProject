/* 
To use this file, remove the the comments at the beginning and end
of this file. Once this is done, go to index.html and replace the
<script src="js/snow.js"></script> with <script src="js/rain.js"></script> 
and then save the file! 
*/


/*
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Handle resizing
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Raindrop particles
const drops = [];

for (let i = 0; i < 500; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 5 + 4,
    opacity: Math.random() * 0.5 + 0.3,
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.lineWidth = 1;

  for (let i = 0; i < drops.length; i++) {
    const d = drops[i];
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.length);
    ctx.strokeStyle = rgba(173, 216, 230, ${d.opacity});
    ctx.stroke();

    d.y += d.speed;
    if (d.y > canvas.height) {
      d.y = -d.length;
      d.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawRain);
}

drawRain();

*/