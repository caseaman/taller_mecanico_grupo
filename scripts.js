document.getElementById('openCalendar').addEventListener('click', function() {
    var calendarContainer = document.getElementById('calendarContainer');
    calendarContainer.classList.toggle('hidden');
});

function mostrarDescripcion() {
    var servicioSeleccionado = document.getElementById("servicios").value;
    var descripcionServicio = "";
    var imagenServicio = "";

    // Ocultar el calendario por defecto
    document.getElementById('calendarContainer').classList.add('hidden');

    switch(servicioSeleccionado) {
        case "cambios_de_aceite":
            descripcionServicio = "Nuestro taller mecánico ofrece cambios de aceite rápidos y efectivos para asegurar que su vehículo funcione correctamente. Utilizamos los mejores productos en el mercado para garantizar la calidad y la durabilidad de su vehículo. Precio: $50";
            imagenServicio = "IMG/cambioaceite.jpg";
            break;
        case "revisiones_tecnicas":
            descripcionServicio = "Nuestro taller mecánico ofrece revisiones técnicas completas para garantizar que su vehículo se encuentre en buenas condiciones. Nuestro equipo de expertos mecánicos realiza una inspección exhaustiva del vehículo y ofrece recomendaciones para mantener su seguridad en la carretera. Precio: $100";
            // Mostrar el calendario cuando se selecciona "Revisiones técnicas"
            document.getElementById('calendarContainer').classList.remove('hidden');
            break;
        case "reparaciones_de_motor":
            descripcionServicio = "En caso de que el motor de su vehículo presente algún problema, nuestro taller mecánico ofrece reparaciones de motor eficientes y efectivas. Nuestro equipo de mecánicos expertos tiene los conocimientos y las herramientas necesarias para diagnosticar y reparar cualquier problema de motor. Precio: varía según el problema";
            break;
        case "cambios_de_llantas":
            descripcionServicio = "Nuestro taller mecánico ofrece cambios de llantas rápidos y precisos para asegurar que su vehículo tenga las condiciones adecuadas y esté en condiciones óptimas para el desplazamiento. Precio: $40";
            break;
        case "alineacion_de_direccion":
            descripcionServicio = "Nuestro taller mecánico ofrece alineación de dirección precisa y efectiva para mejorar la estabilidad y la duración de sus llantas de su vehículo. Precio: $30";
            break;
        default:
            descripcionServicio = "Selecciona un servicio para ver su descripción y precio.";
    }

    document.getElementById("descripcion_servicio").innerText = descripcionServicio;
}

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