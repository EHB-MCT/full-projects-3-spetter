"use strict"
console.log('connected!');

window.onload = () => {

/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to POST data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
async function postFormDataAsJson({ url, formData }) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

  console.log(response)
	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	} else {
    return true;
  }
}

function styleSubmittedForm() {
  // Cosima: add style in dit script
  document.getElementById('popup').classList.add('active')
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}

/**
 * Event handler for a form submit event.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
 *
 * @param {SubmitEvent} event
 */
async function handleFormSubmit(event) {
	event.preventDefault();

	const form = event.currentTarget;
	const url = form.action;

  console.log('handleFormSubmit')
	try {
		const formData = new FormData(form);
		const responseData = await postFormDataAsJson({ url, formData });
    document.getElementById("userform").reset();
    setTimeout(() => {
      styleSubmittedForm();
    }, 500);
	} catch (error) {
		console.error(error);
	}
}

const userForm = document.getElementById("userform");
userForm.addEventListener("submit", handleFormSubmit);
}