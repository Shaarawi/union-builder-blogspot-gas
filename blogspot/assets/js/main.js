// This file contains the JavaScript code for the Blogspot frontend, handling client-side interactions and possibly making requests to the backend.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('union-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        fetch('https://your-backend-url.com/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success response
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error response
        });
    });
});