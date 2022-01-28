"use strict"

const { forEach } = require("lodash");

console.log("connected");

window.onload = () => {
    let storyId = sessionStorage.getItem("storyId");
    console.log(storyId);

    async function runTest(){
        const resp = await fetch(`http://localhost:4000/api/stories-content`);
        const data = await resp.json();

        let eersteVerhaal;
        let index;

        data.forEach(element => {
            if(element._id == storyId){
                //console.log('joepie, ' + element._id + ' = ' + storyId);
                eersteVerhaal = element;
                index = data.indexOf(element);
            }
        })

        document.getElementById('content').insertAdjacentHTML('beforeend', `<div id="story">
        <h1>${eersteVerhaal.titel}</h1>
        <img src="../../img/img1.png" alt="">
        <p>
        ${eersteVerhaal.message}
        </p>
        </div>`)

        /**document.getElementById('content').insertAdjacentHTML('beforeend', `<div id="story">
        <h1>${data[0].titel}</h1>
        <img src="../../img/img1.png" alt="">
        <p>
        ${data[0].message}
        </p>
        </div>`) */
        

    
    }
    runTest();

    let fowardButton = document.getElementById('forward');
    fowardButton.addEventListener('click', e => {

        
        
    })

  }


