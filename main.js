// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')
const kick = new Audio('sounds/kick-drum.mp3')
const snare = new Audio('sounds/snare-drum.mp3')
const hihat = new Audio('sounds/hi-hat.mp3')

const metronomeToggle = document.getElementById('metronome-toggle')
const countPlay = document.getElementById('count-display')

const kickToggle = document.getElementById('kick-toggle')
const kickBeat = document.getElementById('kick-beat')

const snareToggle = document.getElementById('snare-toggle')
const snareBeat = document.getElementById('snare-beat')

const hihatToggle = document.getElementById('hihat-toggle')
const hihatBeat = document.getElementById('hihat-beat')



let audio = false
let count = 0

document.body.addEventListener('click', () => {
    audio = true
    
    tick.play().catch(() => {})
})



// This function is called every 600ms
function update() {
count++

    const metronomeCount = (count % 4) || 4
    countPlay.textContent = metronomeCount;

    if (audio && metronomeToggle.checked) {
        if(metronomeCount === 4) {
     // Play the 'tick' sound
    tick.play();
  } else {
    tock.play()
  }
    }
  

  if(audio && kickToggle.checked && Number(kickBeat.value) === metronomeCount) {
    kick.play()
  }

  if (audio && snareToggle.checked && Number(snareBeat.value) === metronomeCount) {
    snare.play()
  } 
  
  if (audio && hihatToggle.checked && Number(hihatBeat.value) === metronomeCount) {
    hihat.play()
  }
  
  count ++;
}


// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
