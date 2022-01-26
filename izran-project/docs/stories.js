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

eval("\r\n//console.log('connected!');\r\n\r\nwindow.onload = () => {\r\n  async function runTest(){\r\n    const resp = await fetch('http://localhost:4000/api/stories-content');\r\n    const data = await resp.json();\r\n\r\n    //document.getElementById('content').innerText = JSON.stringify(data[0].date);\r\n    //console.log(data[0].year);\r\n    \r\n    data.forEach(element => {\r\n      console.log(element.name);\r\n      document.getElementById('content').insertAdjacentHTML('beforeend', `<a href=\"./story.html\">\r\n      <div class=\"story rounded overflow-hidden shadow-lg grow roodkader\">\r\n          <img class=\"object-cover h-64 w-full\" src=\"/img/Screen Shot 2022-01-18 at 13.32.55.png\" alt=\"Sunset in the mountains\">\r\n          <div class=\"px-6 py-4\">\r\n          <p class=\"NeueMachina font-bold  lg:text-9xl mb-2\">${element.name}</p>\r\n          <p class=\"text-white small\">\r\n            Lees dit verhaal...\r\n          </p>\r\n          </div>\r\n          <div class=\"px-6 pt-4 pb-2\">\r\n          <span class=\"tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\">#Humor</span>\r\n          <span class=\"tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\">#1920</span>\r\n          <span class=\"tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\">#Al Hoceima</span>\r\n          </div>\r\n      </div>\r\n      </a>`) \r\n\r\n      \r\n    });\r\n\r\n  }\r\n\r\n  runTest();\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://izran-project/./src/stories.js?");

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