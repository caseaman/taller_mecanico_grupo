$(document).ready(function() {
    // Ocultar el formulario inicialmente si es necesario
    // $('#loginForm').addClass('hidden');

    $('#loginButton').click(function() {
        $('#loginForm').toggleClass('hidden');
    });

    $('#loginForm').submit(function(event) {
        var username = $('#username');
        var password = $('#password');
        var emailRegex = /\S+@\S+\.\S+/;
        var isValid = true;

        // Verificar si los campos están vacíos
        if (username.val().trim() === '') {
            username.addClass('is-invalid');
            username.removeClass('is-valid');
            isValid = false;
        } else {
            // Verificar si el usuario tiene el formato de correo electrónico
            if (!emailRegex.test(username.val().trim())) {
                // Si no es un correo electrónico válido, marcar como inválido y mostrar un mensaje de error
                username.addClass('is-invalid');
                username.removeClass('is-valid');
                $('#emailErrorMessage').text('El usuario debe ser su correo con formato válido.');
                isValid = false;
            } else {
                username.removeClass('is-invalid');
                username.addClass('is-valid');
                $('#emailErrorMessage').text('');
            }
        }

        if (password.val().trim() === '') {
            password.addClass('is-invalid');
            password.removeClass('is-valid');
            isValid = false;
        } else {
            password.removeClass('is-invalid');
            password.addClass('is-valid');
        }

        // Prevenir el envío del formulario si hay errores de validación
        if (!isValid) {
            event.preventDefault();
        }
    });
});

