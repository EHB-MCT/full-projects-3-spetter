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

eval("\r\nconsole.log('connected!');\r\n\r\nwindow.onload = () => {\r\n\r\n  \r\n\r\n  async function runTest(){\r\n    const resp = await fetch('http://localhost:4000/api/stories-content');\r\n    const data = await resp.json();\r\n    \r\n\r\n    \r\n\r\n    //document.getElementById('content').innerText = JSON.stringify(data[0].date);\r\n    //console.log(data[0].year);\r\n    //console.log(data[0]._id);\r\n    \r\n    data.forEach(element => {\r\n      //console.log(element.name);\r\n      document.getElementById('content').insertAdjacentHTML('beforeend', `\r\n    <div class=\"grid justify-items-center\" id=\"story1\">\r\n        <div class=\"w-full md:w-11/12 xl:w-1/3 px-4\">\r\n           <div class=\"bg-white rounded-lg overflow-hidden mb-10\">\r\n              <img\r\n                 src=\"/img/Screen Shot 2022-01-18 at 13.32.55.png\"\r\n                 alt=\"image\"\r\n                 class=\"w-full\"\r\n                 />\r\n              <div class=\"p-8 sm:p-9 md:p-7 xl:p-9\">\r\n                 <h3>\r\n                    <a\r\n                       href=\"javascript:void(0)\"\r\n                       class=\"\r\n                       font-semibold\r\n                       text-dark text-4xl\r\n                       sm:text-[22px]\r\n                       md:text-4xl\r\n                       lg:text-[22px]\r\n                       xl:text-4xl\r\n                       2xl:text-[22px]\r\n                       mb-4\r\n                       block\r\n                       hover:text-primary\r\n                       \"\r\n                       >\r\n                    ${element.titel}\r\n                    </a>\r\n                 </h3>\r\n                 <p class=\"text-base text-body-color leading-relaxed mb-7\">\r\n                    \r\n                 </p>\r\n                 <div class=\"flex mb-4 text-center\">\r\n                   <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"\r\n                    inline-block\r\n                    py-2\r\n                    px-7\r\n                    border border-[#E5E7EB]\r\n                    bg-orange-600\r\n                    font-medium\r\n                    hover:border-primary hover:bg-primary hover:text-white\r\n                    transition\r\n                    w-1/2\r\n                    h-8\r\n                    rounded-lg\r\n                    \"\r\n                    >\r\n                 ${element.year}\r\n                 </a>\r\n                 <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"\r\n                    inline-block\r\n                    py-2\r\n                    px-7\r\n                    border border-[#E5E7EB]\r\n                    bg-orange-600\r\n                    font-medium\r\n                    hover:border-primary hover:bg-primary hover:text-white\r\n                    transition\r\n                    w-1/2\r\n                    h-8\r\n                    rounded-lg\r\n                    text-center\r\n                    \"\r\n                    >\r\n                    ${element.category}\r\n                 </a>\r\n                 <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"\r\n                    inline-block\r\n                    py-2\r\n                    px-7\r\n                    border border-[#E5E7EB]\r\n                    bg-orange-600\r\n                    font-medium\r\n                    hover:border-primary hover:bg-primary hover:text-white\r\n                    transition\r\n                    w-1/2\r\n                    h-8\r\n                    rounded-lg\r\n                    text-center\r\n                    \"\r\n                    >\r\n                    ${element.location}\r\n                 </a>\r\n                \r\n                 </div>\r\n              </div>\r\n           </div>\r\n           `) \r\n\r\n\r\n      \r\n    });\r\n\r\n  }\r\n  \r\n\r\n \r\n  \r\n\r\n  runTest();\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://izran-project/./src/stories.js?");

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