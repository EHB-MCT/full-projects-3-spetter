const { forEach } = require('lodash');

console.log('connected');

window.onload = () => {
  const storyId = sessionStorage.getItem('storyId');
  let eersteVerhaal;
  let index;

  console.log(storyId);

  async function runTest() {
    const resp = await fetch(`http://localhost:4000/api/stories-content/${storyId}`);
    const data = await resp.json();

    document.getElementById('content').insertAdjacentHTML('beforeend', `<div id="story">
        <h1>${data[0].titel}</h1>
        <img src="../../img/img1.png" alt="">
        <div id="audioContainer"></div>
        <p>
        ${data[0].message}
        </p>
        </div>`);
        customPlayer(data);
  }
  

  scrollThrough();

  async function scrollThrough() {
    await runTest();
    const resp = await fetch('http://localhost:4000/api/stories-content');
    const data = await resp.json();

    data.forEach((element) => {
      if (element._id == storyId) {
        eersteVerhaal = element;
        index = data.indexOf(element);
      }
    });

    data.unshift(data.splice(index, 1)[0]);

    let nextIndex = 0;
    let prevIndex = 0;

    // next story
    const fowardButton = document.getElementById('forward');
    fowardButton.addEventListener('click', (e) => {
      nextIndex++;

      if (nextIndex === data.length) {
        nextIndex = 0;
      }

      console.log(nextIndex);

      document.getElementById('content').innerHTML = `<div id="story">
        <h1>${data[nextIndex].titel}</h1>
        <img src="../../img/img1.png" alt="">
        <p>
        ${data[nextIndex].message}
        </p>
        </div>`;
    });

    // previous story
    const backwardButton = document.getElementById('backward');
    backwardButton.addEventListener('click', (e) => {
      prevIndex++;

      if (prevIndex === data.length) {
        prevIndex = 0;
      }

      document.getElementById('content').innerHTML = `<div id="story">
        <h1>${data[prevIndex].titel}</h1>
        <img src="../../img/img1.png" alt="">
        <p>
        ${data[prevIndex].message}
        </p>
        </div>`;
    });
  }
};

//https://codepen.io/EmNudge/pen/rRbLJQ
//credits: @EmNudge
//https://codepen.io/EmNudge
function insertAudioElement(){
    document.getElementById('audioContainer').innerHTML = `<section>
    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
         
           <!-- partial:index.partial.html -->
<div style="width: 50px; height: 0px;"></div>
<div class="audio-player" style="margin: 0 auto">
  <div class="timeline">
    <div class="progress"></div>
  </div>
  <div class="controls">
    <div class="play-container">
      <div class="toggle-play play">
    </div>
    </div>
    <div class="time">
      <div class="current">0:00</div>
      <div class="divider">/</div>
      <div class="length"></div>
    </div>
    <div class="name">Music Song</div>
<!--     credit for icon to https://saeedalipoor.github.io/icono/ -->
    <div class="volume-container">
      <div class="volume-button">
        <div class="volume icono-volumeMedium"></div>
      </div>
      
      <div class="volume-slider">
        <div class="volume-percentage"></div>
      </div>
    </div>
  </div>
</div>
<!-- partial -->
        
           
            </div>
        </div>
    </div>
</section>`
}


async function customPlayer(data){
    await insertAudioElement()
    const audioPlayer = document.querySelector(".audio-player");
    const audio = new Audio(
  `./uploads/${data[0].audioUrl}`
);

console.dir(audio);

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  },
  false
);

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
}