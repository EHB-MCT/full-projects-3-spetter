"use strict"
console.log('connected!');

window.onload = () => {

  

  async function runTest(){
    const resp = await fetch('http://localhost:4000/api/stories-content');
    const data = await resp.json();
    

    

    //document.getElementById('content').innerText = JSON.stringify(data[0].date);
    //console.log(data[0].year);
    //console.log(data[0]._id);
    
    data.forEach(element => {
      //console.log(element.name);
      document.getElementById('content').insertAdjacentHTML('beforeend', `
    <div class="grid justify-items-center" id="story1">
        <div class="w-full md:w-11/12 xl:w-1/3 px-4">
           <div class="bg-white rounded-lg overflow-hidden mb-10">
              <img
                 src="/img/Screen Shot 2022-01-18 at 13.32.55.png"
                 alt="image"
                 class="w-full"
                 />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9">
                 <h3>
                    <a
                       href="javascript:void(0)"
                       class="
                       font-semibold
                       text-dark text-4xl
                       sm:text-[22px]
                       md:text-4xl
                       lg:text-[22px]
                       xl:text-4xl
                       2xl:text-[22px]
                       mb-4
                       block
                       hover:text-primary
                       "
                       >
                    ${element.titel}
                    </a>
                 </h3>
                 <p class="text-base text-body-color leading-relaxed mb-7">
                    
                 </p>
                 <div class="flex mb-4 text-center">
                   <a
                    href="javascript:void(0)"
                    class="
                    inline-block
                    py-2
                    px-7
                    border border-[#E5E7EB]
                    bg-orange-600
                    font-medium
                    hover:border-primary hover:bg-primary hover:text-white
                    transition
                    w-1/2
                    h-8
                    rounded-lg
                    "
                    >
                 ${element.year}
                 </a>
                 <a
                    href="javascript:void(0)"
                    class="
                    inline-block
                    py-2
                    px-7
                    border border-[#E5E7EB]
                    bg-orange-600
                    font-medium
                    hover:border-primary hover:bg-primary hover:text-white
                    transition
                    w-1/2
                    h-8
                    rounded-lg
                    text-center
                    "
                    >
                    ${element.category}
                 </a>
                 <a
                    href="javascript:void(0)"
                    class="
                    inline-block
                    py-2
                    px-7
                    border border-[#E5E7EB]
                    bg-orange-600
                    font-medium
                    hover:border-primary hover:bg-primary hover:text-white
                    transition
                    w-1/2
                    h-8
                    rounded-lg
                    text-center
                    "
                    >
                    ${element.location}
                 </a>
                
                 </div>
              </div>
           </div>
           `) 


      
    });

  }
  

 
  

  runTest();
  
}





