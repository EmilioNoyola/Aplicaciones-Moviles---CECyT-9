const botonColor = document.getElementById('cambiarColor');

// Añadir un listener al botón para manejar el evento Click.
botonColor.addEventListener('click', () => {

    // Generar un color aleatorio.
    const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    document.body.style.backgroundColor = colorAleatorio;

});
