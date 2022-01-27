"use strict"
console.log("connected");

window.onload = () => {
    let storyId = sessionStorage.getItem("storyId");
    console.log(storyId);

    async function runTest(){
      const resp = await fetch(`http://localhost:4000/api/stories-content/${storyId}`);
      const data = await resp.json();

      console.log(data);
        

        
      
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
