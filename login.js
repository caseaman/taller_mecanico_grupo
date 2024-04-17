document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    var loginForm = document.getElementById('loginForm');

    loginButton.addEventListener('click', function() {
        loginForm.classList.toggle('hidden');
    });
});
document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'login.html';
});