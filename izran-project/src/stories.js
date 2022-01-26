"use strict"
console.log('connected!');

window.onload = () => {
  async function runTest(){
    const resp = await fetch('http://localhost:4000/api/stories-content');
    const data = await resp.json();

    document.getElementById('content').innerText = JSON.stringify(data);
    console.log(data);
  }

  runTest();
}






