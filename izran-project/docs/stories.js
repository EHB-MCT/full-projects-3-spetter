/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stories.js":
/*!************************!*\
  !*** ./src/stories.js ***!
  \************************/
/***/ (() => {

eval("\n//console.log('connected!');\n\nwindow.onload = () => {\n  async function runTest(){\n    const resp = await fetch('http://localhost:4000/api/stories-content');\n    const data = await resp.json();\n\n    //document.getElementById('content').innerText = JSON.stringify(data[0].date);\n    //console.log(data[0].year);\n    \n    data.forEach(element => {\n      console.log(element.name);\n      document.getElementById('content').insertAdjacentHTML('beforeend', `\n      <div class=\"grid justify-items-center\">\n         <div class=\"w-full md:w-11/12 xl:w-1/3 px-4\">\n            <div class=\"bg-white rounded-lg overflow-hidden mb-10\">\n               <img\n                  src=\"/img/Screen Shot 2022-01-18 at 13.32.55.png\"\n                  alt=\"image\"\n                  class=\"w-full\"\n                  />\n               <div class=\"p-8 sm:p-9 md:p-7 xl:p-9\">\n                  <h3>\n                     <a\n                        href=\"javascript:void(0)\"\n                        class=\"\n                        font-semibold\n                        text-dark text-4xl\n                        sm:text-[22px]\n                        md:text-4xl\n                        lg:text-[22px]\n                        xl:text-4xl\n                        2xl:text-[22px]\n                        mb-4\n                        block\n                        hover:text-primary\n                        \"\n                        >\n                     ${element.name}\n                     </a>\n                  </h3>\n                  <p class=\"text-base text-body-color leading-relaxed mb-7\">\n                     \n                  </p>\n                  <div class=\"flex mb-4 text-center\">\n                    <a\n                     href=\"javascript:void(0)\"\n                     class=\"\n                     inline-block\n                     py-2\n                     px-7\n                     border border-[#E5E7EB]\n                     bg-orange-600\n                     font-medium\n                     hover:border-primary hover:bg-primary hover:text-white\n                     transition\n                     w-1/2\n                     h-8\n                     rounded-lg\n                     \"\n                     >\n                  ${element.year}\n                  </a>\n                  <a\n                     href=\"javascript:void(0)\"\n                     class=\"\n                     inline-block\n                     py-2\n                     px-7\n                     border border-[#E5E7EB]\n                     bg-orange-600\n                     font-medium\n                     hover:border-primary hover:bg-primary hover:text-white\n                     transition\n                     w-1/2\n                     h-8\n                     rounded-lg\n                     text-center\n                     \"\n                     >\n                     ${element.cars}\n                  </a>\n                 \n                  </div>\n               </div>\n            </div>\n        \n    `) \n\n      \n    });\n\n  }\n\n  runTest();\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://izran-project/./src/stories.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/stories.js"]();
/******/ 	
/******/ })()
;