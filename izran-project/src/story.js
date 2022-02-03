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
        <p>
        ${data[0].message}
        </p>
        </div>`);
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
