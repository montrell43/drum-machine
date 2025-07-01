// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')
const kick = new Audio('sounds/kick-drum.mp3')
const snare = new Audio('sounds/snare-drum.mp3')
const hihat = new Audio('sounds/hi-hat-drum.mp3')

const kickToggle = document.getElementById('kick-toggle')
const snareToggle = document.getElementById('snare-toggle')
const hihatToggle = document.getElementById('hihat-toggle')

const kickBeat = document.getElementById('kick-beat')
const snareBeat = document.getElementById('snare-beat')
const hihatBeat = document.getElementById('hihat-beat')

const metronomeToggle = document.getElementById('metronome-toggle')

let count = 1
const countPlay = document.getElementById('count-display')
// This function is called every 600ms
function update() {
  if(count < 4) {
     // Play the 'tick' sound
    tick.play();
  } else {
    tock.play()
  }

  countPlay.textContent = count;

  
  
  if(kickToggle.checked) {
    kick.play()
  }

  if (snareToggle) {
    snare.play()
  } 
  
  if (hihatToggle.checked) {
    hihat.play()
  }
  
  count ++;
  if(count > 4) {
    count = 1
  }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
