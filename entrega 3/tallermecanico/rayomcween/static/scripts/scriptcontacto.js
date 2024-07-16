$(document).ready(function() {
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
$(document).ready(function() {
    // Get references to the message input and subject select
    const messageInput = $('#mensaje');
    const subjectSelect = $('#asunto');
  
    // Handle change event on the subject select
    subjectSelect.on('change', function() {
      const selectedSubject = $(this).val();
      let suggestedMessage = '';
  
      switch (selectedSubject) {
        case 'cambios_aceite':
          suggestedMessage = 'Hola, quisiera agendar un cambio de aceite para mi vehículo. ¿Tienen disponibilidad esta semana?';
          break;
        case 'revisiones_tecnicas':
          suggestedMessage = 'Me interesa realizar una revisión técnica a mi auto. ¿Qué documentos debo llevar?';
          break;
        case 'reparaciones_motor':
          suggestedMessage = 'Mi auto tiene un problema con el motor. ¿Podrían revisarlo y darme un presupuesto?';
          break;
        case 'alineacion_direccion':
          suggestedMessage = 'Noto que mi auto está jalando hacia un lado. ¿Podrían realizar una alineación de dirección?';
          break;
        case 'cambio_llantas':
          suggestedMessage = 'Necesito cambiar las llantas de mi vehículo. ¿Tienen disponibilidad de las llantas que necesito?';
          break;
      }
  
      // Update the message input with the suggested message
      messageInput.val(suggestedMessage);
    });
  });