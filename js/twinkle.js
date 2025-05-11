const twinkleCanvas = document.getElementById('twinkleCanvas');
const twinkleCtx = twinkleCanvas.getContext('2d');

// Function to check if it's mobile view
function isMobileView() {
  return window.innerWidth <= 1100; // Default. Set your desired mobile breakpoint
}

// Set canvas size based on the window size
function resizeCanvas() {
  twinkleCanvas.width = window.innerWidth;
  twinkleCanvas.height = window.innerHeight;
}

// Twinkle particles array
let particles = [];

// Create 100 random particles to simulate twinkling stars
function createParticles() {
  particles = []; // Reset particles array
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * twinkleCanvas.width, // Random horizontal position
      y: Math.random() * twinkleCanvas.height, // Random vertical position
      radius: Math.random() * 1 + 1, // Random radius between 1 and 2
      opacity: Math.random() * 0.6 + 0.2, // Random opacity for each "star"
      fadeSpeed: Math.random() * 0.01 + 0.005, // Speed of fading in and out
    });
  }
}

// Function to draw twinkle effect
function drawTwinkle() {
  twinkleCtx.clearRect(0, 0, twinkleCanvas.width, twinkleCanvas.height); // Clear canvas on each frame

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    // Create fading effect by adjusting opacity over time
    p.opacity += Math.sin(Date.now() * p.fadeSpeed) * 0.02;

    if (p.opacity > 1) p.opacity = 1;
    if (p.opacity < 0) p.opacity = 0.2;

    // Draw twinkling star
    twinkleCtx.beginPath();
    twinkleCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
    twinkleCtx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`; // White with variable opacity
    twinkleCtx.fill();
  }

  requestAnimationFrame(drawTwinkle); // Continuously animate twinkle effect
}

// Resize the canvas when the window is resized
window.addEventListener('resize', () => {
  resizeCanvas(); // Resize the canvas
  createParticles(); // Recreate particles to match new canvas size
});

// Start the twinkle animation only on mobile view
if (isMobileView()) {
  resizeCanvas(); // Ensure the canvas size is correct for mobile
  createParticles(); // Create particles after resizing
  drawTwinkle(); // Start twinkle animation
} else {
  console.log('Twinkle effect not running: Screen size too large');
}
