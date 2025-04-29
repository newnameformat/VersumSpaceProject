const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');

playPauseButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = '❚❚'; // Pause icon
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = '▶'; // Play icon
  }
});

audioPlayer.addEventListener('timeupdate', () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress || 0;
});

progressBar.addEventListener('input', (e) => {
  const seekTime = (progressBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTime;
});
