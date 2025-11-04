// This file contains the JavaScript code for the Blogspot frontend, handling client-side interactions and possibly making requests to the backend.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('union-form');
  const msg = document.getElementById('form-message');
  const DEPLOY_URL = 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOY_ID/exec';

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.textContent = 'Sending...';

    const payload = {
      name: form.name.value.trim(),
      flat_No: form.flat_No.value.trim(),
      mobile: form.mobile.value.trim()
    };

    fetch(DEPLOY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(r => r.json())
    .then(data => {
      if (data && data.status === 'success') {
        msg.textContent = 'Saved successfully.';
        form.reset();
      } else {
        msg.textContent = data && data.message ? data.message : 'Save failed.';
      }
    })
    .catch(err => {
      console.error(err);
      msg.textContent = 'Error sending data.';
    });
  });
});