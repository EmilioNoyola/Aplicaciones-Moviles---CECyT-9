// Ejercicio 2 - Clase 8 - 24/09/2024 - Noyola Gómez Emilio Damian - 5IV9
const botonColor = document.getElementById('cambiarColor');

// Añadir un listener al botón para manejar el evento Click.
botonColor.addEventListener('click', () => {

    // Generar un color aleatorio.
    const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    document.body.style.backgroundColor = colorAleatorio;

});
