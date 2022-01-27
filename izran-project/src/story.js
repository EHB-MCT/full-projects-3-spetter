"use strict"
console.log("connected");

window.onload = () => {


    async function runTest(){
      const resp = await fetch('http://localhost:4000/api/stories-content/');
      const data = await resp.json();

  
      
      data.forEach(element => {
        
       });
       
  
    }
  
    runTest();
  }


/** 
const html = ` <div id="story">
<h1>Dhja en de kat</h1>
<img src="../../img/img1.png" alt="">
<p>

</p>
</div>`;
*/
