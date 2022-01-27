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

eval("\nconsole.log('connected!');\n\nwindow.onload = () => {\n\n/**\n * Helper function for POSTing data as JSON with fetch.\n *\n * @param {Object} options\n * @param {string} options.url - URL to POST data to\n * @param {FormData} options.formData - `FormData` instance\n * @return {Object} - Response body from URL that was POSTed to\n */\nasync function postFormDataAsJson({ url, formData }) {\n\tconst plainFormData = Object.fromEntries(formData.entries());\n\tconst formDataJsonString = JSON.stringify(plainFormData);\n\n\tconst fetchOptions = {\n\t\tmethod: \"POST\",\n\t\theaders: {\n\t\t\t\"Content-Type\": \"application/json\",\n\t\t\tAccept: \"application/json\",\n\t\t},\n\t\tbody: formDataJsonString,\n\t};\n\n\tconst response = await fetch(url, fetchOptions);\n\n  console.log(response)\n\tif (!response.ok) {\n\t\tconst errorMessage = await response.text();\n\t\tthrow new Error(errorMessage);\n\t} else {\n    return true;\n  }\n}\n\n/**\n * Event handler for a form submit event.\n *\n * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event\n *\n * @param {SubmitEvent} event\n */\nasync function handleFormSubmit(event) {\n\tevent.preventDefault();\n\n\tconst form = event.currentTarget;\n\tconst url = form.action;\n\n  console.log('handleFormSubmit')\n\ttry {\n\t\tconst formData = new FormData(form);\n\t\tconst responseData = await postFormDataAsJson({ url, formData });\n\n\t\tconsole.log({ responseData });\n\t} catch (error) {\n\t\tconsole.error(error);\n\t}\n}\n\nconst userForm = document.getElementById(\"userform\");\nuserForm.addEventListener(\"submit\", handleFormSubmit);\n}\n\n//# sourceURL=webpack://izran-project/./src/userstory.js?");

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