function mostrarDescripcion() {
    var selectElement = document.getElementById("servicios");
    var descripcionElement = document.getElementById("descripcion_servicio");
    var imagenElement = document.getElementById("imagen_servicio");
    var selectedValue = selectElement.value;

    var descriptions = {
        "cambios_de_aceite": {
            text: "Realizamos cambios de aceite utilizando los mejores productos para mantener el óptimo funcionamiento de tu vehículo. Este servicio incluye el cambio de filtro de aceite y un completo chequeo de fluidos.",
            image: "{% static 'imagenes/cambio_aceite.jpeg' %}"
        },
        "revisiones_tecnicas": {
            text: "Ofrecemos revisiones técnicas completas para garantizar la seguridad y el buen estado de tu automóvil. Nuestro equipo de técnicos expertos revisará todos los sistemas cruciales de tu vehículo y te proporcionará un informe detallado.",
            image: "{% static '/imagenes/revision_tecnica.jpeg' %}"
        },
        "reparaciones_de_motor": {
            text: "Contamos con expertos en reparaciones de motor que pueden solucionar cualquier problema que pueda surgir. Desde reparaciones menores hasta reconstrucciones completas del motor, estamos aquí para mantener tu vehículo en óptimas condiciones de funcionamiento.",
            image: "{% static 'imagenes/reparacion_de_motor.jpeg' %}"
        },
        "cambios_de_llantas": {
            text: "Realizamos cambios de llantas y brindamos servicios de balanceo para mejorar la estabilidad de tu vehículo. Además del cambio de llantas, nuestros técnicos inspeccionarán y ajustarán la presión de aire en cada llanta.",
            image: "{% static 'imagenes/cambio_de_llantas.jpeg' %}"
        },
        "alineacion_de_direccion": {
            text: "Nuestro servicio de alineación de dirección asegura que tu vehículo tenga una mejor estabilidad y manejo. Utilizamos equipos de alta tecnología para alinear las ruedas según las especificaciones del fabricante, prolongando la vida útil de tus llantas.",
            image: "{% static 'imagenes/alineacion_direccion.jpeg' %}"
        }
    };

    if (descriptions[selectedValue]) {
        descripcionElement.textContent = descriptions[selectedValue].text;
        imagenElement.src = descriptions[selectedValue].image;
        $('#servicioModal').modal('show');
    }
}
