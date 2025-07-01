// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')

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
