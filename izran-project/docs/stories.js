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

eval("\r\nconsole.log('connected!');\r\n\r\nwindow.onload = () => {\r\n  async function runTest(){\r\n    const resp = await fetch('http://localhost:4000/api/stories-content');\r\n    const data = await resp.json();\r\n\r\n    document.getElementById('content').innerText = JSON.stringify(data);\r\n    console.log(data);\r\n  }\r\n\r\n  runTest();\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://izran-project/./src/stories.js?");

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