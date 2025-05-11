/*

const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

// Function to check if it's mobile view
function isMobileView() {
  return window.innerWidth <= 1100; // Or set your desired mobile breakpoint
}

if (!isMobileView()) {
  // Set canvas to full window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Handle resizing
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Snowflake particles
  const flakes = [];

  for (let i = 0; i < 500; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1, // small snowflake size
      speedY: Math.random() * 1 + 0.5, // vertical speed
      speedX: Math.random() * 0.5 - 0.25, // gentle side-to-side drift
      opacity: Math.random() * 0.5 + 0.5, // make it a bit brighter
    });
  }

  function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < flakes.length; i++) {
      const f = flakes[i];

      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
      ctx.fill();

      // Move the snowflake
      f.y += f.speedY;
      f.x += f.speedX;

      // Respawn at top when falling off the screen
      if (f.y > canvas.height) {
        f.y = -f.radius;
        f.x = Math.random() * canvas.width;
      }
      // Wrap around left/right if drifting off
      if (f.x > canvas.width) {
        f.x = 0;
      } else if (f.x < 0) {
        f.x = canvas.width;
      }
    }

    requestAnimationFrame(drawSnow);
  }

  drawSnow();
}


*/
