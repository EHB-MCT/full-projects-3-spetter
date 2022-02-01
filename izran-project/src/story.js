"use strict"

const { forEach } = require("lodash");

console.log("connected");

window.onload = () => {
    let storyId = sessionStorage.getItem("storyId");
    let eersteVerhaal;
    let index;

    console.log(storyId);

    async function runTest(){
        const resp = await fetch(`http://localhost:4000/api/stories-content/${storyId}`);
        const data = await resp.json();

        

        /**data.forEach(element => {
            if(element._id == storyId){
                //console.log('joepie, ' + element._id + ' = ' + storyId);
                eersteVerhaal = element;
                index = data.indexOf(element);
            }
        }) */

        document.getElementById('content').insertAdjacentHTML('beforeend', `<div id="story">
        <h1>${data[0].titel}</h1>
        <img src="../../img/img1.png" alt="">
        <p>
        ${data[0].message}
        </p>
        </div>`);

        /**document.getElementById('content').insertAdjacentHTML('beforeend', `<div id="story">
        <h1>${data[0].titel}</h1>
        <img src="../../img/img1.png" alt="">
        <p>
        ${data[0].message}
        </p>
        </div>`) */
        

    
    }
    scrollThrough();


    async function scrollThrough(){
        await runTest();
        const resp = await fetch(`http://localhost:4000/api/stories-content`);
        const data = await resp.json();

        data.forEach(element => {
            if(element._id == storyId){
                //console.log('joepie, ' + element._id + ' = ' + storyId);
                eersteVerhaal = element;
                index = data.indexOf(element);
            }
        })
        data.unshift(data.splice(index, 1)[0]);
        //console.log(data);



        let fowardButton = document.getElementById('forward');
        fowardButton.addEventListener('click', e => {
            console.log(index);

        //index += 1;
        document.getElementById('content').innerHTML = `<div id="story">
        <h1>${data[index].titel}</h1>
        <img src="../../img/img1.png" alt="">
        <p>
        ${data[index].message}
        </p>
        </div>`;

        });

        let backwardButton = document.getElementById('backward');
        backwardButton.addEventListener('click', e => {
            console.log(index);

        

        document.getElementById('content').innerHTML = `<div id="story">
        <h1>${data[index].titel}</h1>
        <img src="../../img/img1.png" alt="">
        <p>
        ${data[index].message}
        </p>
        </div>`;

        index -=1;
        

        });

    }

    

  }


