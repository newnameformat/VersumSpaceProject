const text = "Your Title Here"; // Your song title here
const typingSpeed = 150; // Speed per character (milliseconds)
const pauseTime = 2000; // Pause 2 seconds when fully typed

const typingElement = document.getElementById('typing-text');
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      index = 0;
      type();
    }, pauseTime);
  }
}

type();
