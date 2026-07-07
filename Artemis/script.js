const formulario = document.getElementById('feedbackForm');
const mensajeDiv = document.getElementById('mensajeRespuesta');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener el valor de la respuesta
    const respuesta = document.getElementById('comentario').value;

    // Procesar o enviar la respuesta (aquí podrías usar fetch para enviarla a un servidor)
    console.log("Respuesta recibida: ", respuesta);

    // Dar retroalimentación visual al usuario en la página
    mensajeDiv.innerHTML = `<p>Thanks for the feedback!</p>`;
    formulario.reset(); // Limpiar el formulario
});

