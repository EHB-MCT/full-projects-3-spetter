"use strict"

const { forEach } = require("lodash");

console.log('connected!');

let filter;
console.log(filter);
window.onload = () => {

  

  async function runTest(){
    if (filter != null || filter != undefined) {
      console.log(filter);
      const resp = await fetch(`http://localhost:4000/api/stories-content?category=${filter}`);
      const data = await resp.json();
      postItems(data);
      document.getElementById('tags').innerHTML = `<div class="tag1">${filter}</div>`;
      
    } else {
      const resp = await fetch('http://localhost:4000/api/stories-content');
      const data = await resp.json();
      postItems(data);
    }
    
   
    function postItems(data){
      document.getElementById('content').innerHTML = " ";
      data.forEach(element => {
        //console.log(element.name);
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
                <div id="themas" class="flex-initial py-1 px-8 bg-white text-3xl w-72 h-16 rounded-3xl text-center">
                  ${element.year}
                </div>
                <div id="themas" class="category flex-initial py-1 px-8 bg-white text-3xl w-72 h-16 rounded-3xl text-center" data-id="${element.category}">
                  ${element.category}
                </div>
                <div id="themas" class="flex-initial inline-block py-1 px-8 bg-white text-3xl w-72 h-16 rounded-3xl text-center">
                  ${element.location}
                </div>
              </div>  
            </div>
          </div>
        </div>
            `) 
    
      });
    }

   
  }

  


  async function redirect(){
   await runTest();

   //console.log('werkt');


   document.querySelectorAll('.button').forEach(item => { 
      item.addEventListener('click', e => {  
        if(e.target.classList.contains('category')) {
          //console.log(e.target);
          //console.log(closestElement.getAttribute("data-id"));
          filter = e.target.getAttribute("data-id");
          console.log(filter);

          redirect();

          //sessionStorage.setItem("categoryFilter", filter);
          //document.location.href = 'stories.html';

        } else {
          //console.log(e.target);
          let closestElement = e.target.closest(".button");
          //console.log(closestElement.getAttribute("data-id"));
          let storyId = closestElement.getAttribute("data-id");
          console.log(storyId);
          sessionStorage.setItem("storyId", storyId);
          document.location.href = 'story.html';
        }

  
   }) })


   document.querySelectorAll('.tag1').forEach(item => {
     item.addEventListener('click', () => {
        filter = null;
        item.remove();
        redirect();

     })

   })
   
     

}
  
  redirect();

  

  }

  

  
  

  

  
 

  

 

  
  






