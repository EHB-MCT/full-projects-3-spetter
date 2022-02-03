const { chunk } = require('lodash');

console.log('connected!');

// uuid
import { v4 as uuidv4 } from 'uuid';

window.onload = () => {
  // Globals
  let uploadBlob;

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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    console.log(response);
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        } else {
      return true;
    }
  }

  function styleSubmittedForm() {
  // Cosima: add style in dit script
    document.getElementById('popup').classList.add('active');
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

    console.log('handleFormSubmit');
    try {
      const formData = new FormData(form);
      console.log(formData);

      //TODO: add some checks if audio is not empty etc.; put in separate function
      //add audio
      if(uploadBlob) {
        const audioFormData = new FormData();
        // const newDate = new Date().toDateString();

        const uniqueName = uuidv4();

        audioFormData.append('audio', uploadBlob, `${uniqueName}.ogg`);
    
        const audioResp = await fetch('http://localhost:4000/api/stories-audio-upload', {
          method: 'POST',
          body: audioFormData
        });
        const audioBody = await audioResp.json();
        console.log("Audio url", audioBody)

        formData.append('audioUrl', audioBody.audioUrl);
      }


      const responseData = await postFormDataAsJson({ url, formData });
      document.getElementById('userform').reset();
      setTimeout(() => {
        styleSubmittedForm();
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }

  const userForm = document.getElementById('userform');
  userForm.addEventListener('submit', handleFormSubmit);

  // record audio function

  const startStop = document.getElementById('micro');
  const soundClips = document.getElementById('soundClips');
  let chunks = [];

  const constraintObj = { audio: true };

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');
    navigator.mediaDevices.getUserMedia(constraintObj)
	   .then((stream) => {
		   const mediaRecorder = new MediaRecorder(stream);

		   startStop.addEventListener('click', start);

		   function start() {
          startStop.removeEventListener('click', start);
          startStop.addEventListener('click', stop);
          startStop.value = 'stop';

          uploadBlob = null;

          mediaRecorder.start();
          console.log(mediaRecorder.state);
          console.log('recorder started');
		   }

		   function stop() {
          startStop.removeEventListener('click', stop);
          startStop.addEventListener('click', start);
          startStop.value = 'start';
          // startStop.style.fill = 'FireBrick';

          mediaRecorder.stop();
          console.log(mediaRecorder.state);
          console.log('recorder stopped');
          // startStop.style.fill = 'Black';
		   }

        mediaRecorder.ondataavailable = function (e) {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = (e) => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          chunks = [];
          const audioUrl = window.URL.createObjectURL(blob);
          soundClips.src = audioUrl;

          // prepare audioURL for transfer to mongodb/audiomap
          uploadBlob = blob;
        };
	   })
	   // Error callback
	   .catch((err) => {
		  console.log(`The following getUserMedia error occurred: ${err}`);
	   });
  }
};
