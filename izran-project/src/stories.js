"use strict"
//console.log('connected!');

window.onload = () => {
  async function runTest(){
    const resp = await fetch('http://localhost:4000/api/stories-content');
    const data = await resp.json();

    //document.getElementById('content').innerText = JSON.stringify(data[0].date);
    //console.log(data[0].year);
    
    data.forEach(element => {
      console.log(element.name);
      document.getElementById('content').insertAdjacentHTML('beforeend', `<a href="./story.html">
      <div class="story rounded overflow-hidden shadow-lg grow roodkader">
          <img class="object-cover h-64 w-full" src="/img/Screen Shot 2022-01-18 at 13.32.55.png" alt="Sunset in the mountains">
          <div class="px-6 py-4">
          <p class="NeueMachina font-bold  lg:text-9xl mb-2">${element.name}</p>
          <p class="text-white small">
            Lees dit verhaal...
          </p>
          </div>
          <div class="px-6 pt-4 pb-2">
          <span class="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Humor</span>
          <span class="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#1920</span>
          <span class="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Al Hoceima</span>
          </div>
      </div>
      </a>`) 

      
    });

  }

  runTest();
}






