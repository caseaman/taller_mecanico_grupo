$(document).ready(() => {
    $("#form_contacto").submit(function(event) {
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var asunto = $("#asunto").val();
        var mensaje = $("#mensaje").val();

        if (!validaNombre(nombre)) {
            $("#nombre").addClass('is-invalid');
            event.preventDefault();
        } else {
            $("#nombre").removeClass('is-invalid');
            $("#nombre").addClass('is-valid');
        }

        if (!validaEmail(email)) {
            $("#email").addClass('is-invalid');
            event.preventDefault();
        } else {
            $("#email").removeClass('is-invalid');
            $("#email").addClass('is-valid');
        }

        if (!validaAsunto(asunto)) {
            $("#asunto").addClass('is-invalid');
            event.preventDefault();
        } else {
            $("#asunto").removeClass('is-invalid');
            $("#asunto").addClass('is-valid');
        }

        if (!validaMensaje(mensaje)) {
            $("#mensaje").addClass('is-invalid');
            event.preventDefault();
        } else {
            $("#mensaje").removeClass('is-invalid');
            $("#mensaje").addClass('is-valid');
        }
    });
});

// Define validation functions
function validaNombre(nombre) {
    // Simple validation: checks if the name field is not empty
    return nombre.trim() !== '';
}

function validaEmail(email) {
    // Regular expression to validate email format
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function validaAsunto(asunto) {
    // Simple validation: checks if the asunto field is not empty
    return asunto.trim() !== '';
}

function validaMensaje(mensaje) {
    // Simple validation: checks if the mensaje field is not empty
    return mensaje.trim() !== '';
}
