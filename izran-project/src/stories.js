const { forEach, get } = require('lodash');

console.log('connected!');

let filter = sessionStorage.getItem('filter');
let filterType = sessionStorage.getItem('filterType');

console.log(filter);
window.onload = () => {
  async function runTest() {
    if (filter != null || filter != undefined) {
      console.log(filter);
      const resp = await fetch(`http://localhost:4000/api/stories-content?${filterType}=${filter}`);
      const data = await resp.json();
      postItems(data);
      document.getElementById('tags').innerHTML = `<div class="tag1">${filter}</div>`;
    } else {
      const resp = await fetch('http://localhost:4000/api/stories-content');
      const data = await resp.json();
      postItems(data);
    }

    function postItems(data) {
      document.getElementById('content').innerHTML = ' ';
      data.forEach((element) => {
        // console.log(element.name);
        document.getElementById('content').insertAdjacentHTML('beforeend', `
        <div class="grid justify-items-center button" id="story1" action="http://localhost:4000/api/stories-content" data-id="${element._id}">
          <div class="w-11/12 m-auto rounded-3xl overflow-hidden mb-10 bg-red-600">
            <img src="/img/stories/afbeelding-20220201-094356-8508b913.jpeg" alt="image" class="w-full h-1/2"/>
            <div class="p-8 sm:p-9 md:p-7 xl:p-9">
              <h2 class="font-semibold 
                text-5xl 
                text-white
                mb-4
                block
                hover:text-primary
                ">
                ${element.titel}
              </h2>
              <p class="text-base text-body-color leading-relaxed mb-7"></p>
              <div class="flex justify-between mb-4">
                <div id="year" class="filtertag flex-initial py-1 px-8 bg-white text-3xl w-72 h-16 rounded-3xl text-center" data-id="${element.year}">
                  ${element.year}
                </div>
                <div id="category" class="filtertag flex-initial py-1 px-8 bg-white text-3xl w-72 h-16 rounded-3xl text-center" data-id="${element.category}">
                  ${element.category}
                </div>
                <div id="location" class="filtertag flex-initial inline-block py-1 px-8 bg-white text-3xl w-72 h-16 rounded-3xl text-center" data-id="${element.location}">
                  ${element.location}
                </div>
              </div>  
            </div>
          </div>
        </div>
            `);
      });
    }
  }

  async function redirect() {
    await runTest();

    document.querySelectorAll('.button').forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('filtertag')) {
          filter = e.target.getAttribute('data-id');
          filterType = e.target.id;
          sessionStorage.setItem('filterType', filterType)
          sessionStorage.setItem('filter', filter)
          console.log(filter, filterType);
          redirect();
        } else {
          const closestElement = e.target.closest('.button');
          const storyId = closestElement.getAttribute('data-id');
          console.log(storyId);
          sessionStorage.setItem('storyId', storyId);
          document.location.href = 'story.html';
        }
      });
    });

    document.querySelectorAll('.tag1').forEach((item) => {
      item.addEventListener('click', () => {
        filter = null;
        item.remove();
        sessionStorage.removeItem('filter');
        sessionStorage.removeItem('filterType');
        redirect();
      });
    });
  }
  
  redirect();
};
