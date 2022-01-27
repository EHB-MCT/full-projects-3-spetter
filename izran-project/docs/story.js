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

/***/ "./src/story.js":
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconsole.log(\"connected\");\r\n\r\nwindow.onload = () => {\r\n\r\n\r\n    async function runTest(){\r\n      const resp = await fetch('http://localhost:4000/api/stories-content/');\r\n      const data = await resp.json();\r\n\r\n  \r\n      \r\n      data.forEach(element => {\r\n        \r\n       });\r\n       \r\n  \r\n    }\r\n  \r\n    runTest();\r\n  }\r\n\r\n\r\n/** \r\nconst html = ` <div id=\"story\">\r\n<h1>Dhja en de kat</h1>\r\n<img src=\"../../img/img1.png\" alt=\"\">\r\n<p>\r\n\r\n</p>\r\n</div>`;\r\n*/\r\n\n\n//# sourceURL=webpack://izran-project/./src/story.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/story.js"]();
/******/ 	
/******/ })()
;