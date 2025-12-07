const box = document.getElementById('box');
const buttons = document.querySelectorAll('.toggleBtn');

let activeButton = null; // Keeps track of currently active button

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // If clicking the same button, toggle back to default message
    if (activeButton === button) {
      box.textContent = "press a button for a message:33";
      button.classList.remove('active');
      activeButton = null;
    } else {
      // Deactivate previous button
      if (activeButton) activeButton.classList.remove('active');

      // Activate new one
      button.classList.add('active');
      box.textContent = button.getAttribute('data-message');
      activeButton = button;
    }
  });
});

function spawnMessage(button) {
  const wrapper = button.parentElement;

  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = '<3';

  wrapper.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 4300); // Total lifespan
}

  // === HOW TO IMPORT YOUR PLAYLIST ===
  // 1. Put your audio files (e.g., mp3) inside a folder in your project, e.g., "assets/music/"
  // 2. Add each file path as a string in the playlist array below.
  //    Make sure the paths are correct relative to this HTML file.
  // 3. Example: "assets/music/song1.mp3", "assets/music/song2.mp3", etc.
  
  const playlist = [
    "assets/music/blue.mp3",
    "assets/music/birds-of-a-feather.mp3",
    "assets/music/escapism.mp3",
    "assets/music/love-like-you.mp3",
    "assets/music/love..mp3",
    "assets/music/my-love-mine-all-mine.mp3",
    "assets/music/On-Melancholy-Hill.mp3",
    "assets/music/walking-back-home.mp3",
  ];

  // Shuffle function (Fisher-Yates algorithm) to randomize playlist order on page load
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Shuffle playlist before playback starts
  shuffle(playlist);

  const audio = document.getElementById('audio');
  let current = 0;

  // Function to play the next track in the playlist
  function playNext() {
    audio.src = playlist[current]; // Set audio source to current track
    audio.play();                  // Play the audio
    current = (current + 1) % playlist.length; // Move to next track (loops to start)
  }

  // When a track ends, play the next one automatically
  audio.addEventListener('ended', playNext);

  // Start playback with the first track
  playNext();