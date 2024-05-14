$(document).ready(function() {
    $('#loginButton').click(function() {
        $('#loginForm').toggleClass('hidden');
    });

    $('#loginForm').submit(function(event) {
        var username = $('#username');
        var password = $('#password');
        var emailRegex = /\S+@\S+\.\S+/;

        // Verificar si los campos están vacíos
        if (username.val().trim() === '') {
            username.addClass('is-invalid');
            username.removeClass('is-valid');
        } else {
            // Verificar si el usuario tiene el formato de correo electrónico
            if (!emailRegex.test(username.val().trim())) {
                // Si no es un correo electrónico válido, marcar como inválido y mostrar un mensaje de error
                username.addClass('is-invalid');
                username.removeClass('is-valid');
                $('#emailErrorMessage').text('El usuario debe ser su correo con formato valido.');
            } else {
                username.removeClass('is-invalid');
                username.addClass('is-valid');
                $('#emailErrorMessage').text('');
            }
        }

        if (password.val().trim() === '') {
            password.addClass('is-invalid');
            password.removeClass('is-valid');
        } else {
            password.removeClass('is-invalid');
            password.addClass('is-valid');
        }

        // Prevenir el envío del formulario si algún campo está vacío o si el usuario no tiene formato de correo electrónico
        if (username.val().trim() === 'prueba@duoc.cl' && password.val().trim() === '123456' && emailRegex.test(username.val().trim())) {
            // Si el usuario y la contraseña coinciden, y el usuario tiene formato de correo electrónico válido
            // permitir el envío del formulario y redirigir al usuario a 'index.html'
            window.location.href = 'index.html';    
        } else {
            // Si no coincide alguno de los criterios, evitar el envío del formulario
            event.preventDefault();
        }
    });
});


