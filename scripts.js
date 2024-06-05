function mostrarDescripcion() {
    var selectElement = document.getElementById("servicios");
    var descripcionElement = document.getElementById("descripcion_servicio");
    var imagenElement = document.getElementById("imagen_servicio");
    var selectedValue = selectElement.value;

    var descriptions = {
        "cambios_de_aceite": {
            text: "Realizamos cambios de aceite utilizando los mejores productos para mantener el óptimo funcionamiento de tu vehículo. Este servicio incluye el cambio de filtro de aceite y un completo chequeo de fluidos.",
            image: "IMG/cambio_aceite.jpeg"
        },
        "revisiones_tecnicas": {
            text: "Ofrecemos revisiones técnicas completas para garantizar la seguridad y el buen estado de tu automóvil. Nuestro equipo de técnicos expertos revisará todos los sistemas cruciales de tu vehículo y te proporcionará un informe detallado.",
            image: "IMG/revision_tecnica.jpeg"
        },
        "reparaciones_de_motor": {
            text: "Contamos con expertos en reparaciones de motor que pueden solucionar cualquier problema que pueda surgir. Desde reparaciones menores hasta reconstrucciones completas del motor, estamos aquí para mantener tu vehículo en óptimas condiciones de funcionamiento.",
            image: "IMG/reparacion_de_motor.jpeg"
        },
        "cambios_de_llantas": {
            text: "Realizamos cambios de llantas y brindamos servicios de balanceo para mejorar la estabilidad de tu vehículo. Además del cambio de llantas, nuestros técnicos inspeccionarán el estado de tus neumáticos y te ofrecerán recomendaciones sobre el mantenimiento adecuado.",
            image: "IMG/cambio_de_llantas.jpeg"
        },
        "alineacion_de_direccion": {
            text: "Alineamos la dirección de tu automóvil para garantizar un manejo suave y seguro en todo momento. Este servicio incluye la inspección y ajuste de la alineación de las ruedas delanteras y traseras, asegurando que tu vehículo esté alineado correctamente para una conducción óptima.",
            image: "IMG/alineacion_de_llantas.jpeg"
        }
    };

    var selectedService = descriptions[selectedValue];
    if (selectedService) {
        descripcionElement.textContent = selectedService.text;
        imagenElement.src = selectedService.image;
        var servicioModal = new bootstrap.Modal(document.getElementById('servicioModal'));
        servicioModal.show();
    } else {
        descripcionElement.textContent = "";
        imagenElement.src = "";
    }
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