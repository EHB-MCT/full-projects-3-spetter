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

/***/ "./src/userstory.js":
/*!**************************!*\
  !*** ./src/userstory.js ***!
  \**************************/
/***/ (() => {

eval("\r\nconsole.log('connected!');\r\n\r\nwindow.onload = () => {\r\n\r\n/**\r\n * Helper function for POSTing data as JSON with fetch.\r\n *\r\n * @param {Object} options\r\n * @param {string} options.url - URL to POST data to\r\n * @param {FormData} options.formData - `FormData` instance\r\n * @return {Object} - Response body from URL that was POSTed to\r\n */\r\nasync function postFormDataAsJson({ url, formData }) {\r\n\tconst plainFormData = Object.fromEntries(formData.entries());\r\n\tconst formDataJsonString = JSON.stringify(plainFormData);\r\n\r\n\tconst fetchOptions = {\r\n\t\tmethod: \"POST\",\r\n\t\theaders: {\r\n\t\t\t\"Content-Type\": \"application/json\",\r\n\t\t\tAccept: \"application/json\",\r\n\t\t},\r\n\t\tbody: formDataJsonString,\r\n\t};\r\n\r\n\tconst response = await fetch(url, fetchOptions);\r\n\r\n  console.log(response)\r\n\tif (!response.ok) {\r\n\t\tconst errorMessage = await response.text();\r\n\t\tthrow new Error(errorMessage);\r\n\t} else {\r\n    return true;\r\n  }\r\n}\r\n\r\n/**\r\n * Event handler for a form submit event.\r\n *\r\n * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event\r\n *\r\n * @param {SubmitEvent} event\r\n */\r\nasync function handleFormSubmit(event) {\r\n\tevent.preventDefault();\r\n\r\n\tconst form = event.currentTarget;\r\n\tconst url = form.action;\r\n\r\n  console.log('handleFormSubmit')\r\n\ttry {\r\n\t\tconst formData = new FormData(form);\r\n\t\tconst responseData = await postFormDataAsJson({ url, formData });\r\n\r\n\t\tconsole.log({ responseData });\r\n\t} catch (error) {\r\n\t\tconsole.error(error);\r\n\t}\r\n}\r\n\r\nconst userForm = document.getElementById(\"userform\");\r\nuserForm.addEventListener(\"submit\", handleFormSubmit);\r\n}\n\n//# sourceURL=webpack://izran-project/./src/userstory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/userstory.js"]();
/******/ 	
/******/ })()
;