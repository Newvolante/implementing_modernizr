let messageContainer = document.getElementById('message');

if(Modernizr.es6array) {
    messageContainer.innerHTML = '<h3>YES!</h3>';
} else messageContainer.textContent = '<h3>Nope...</h3>';

