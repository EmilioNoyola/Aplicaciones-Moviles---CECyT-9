// Noyola Gómez Emilio Damian - 5IV9 - 09/10/2024

// Esta función la utilizamos para agregar los valores al display de la calculadora.
function appendToDisplay(value) {

    // Lo que hacemos primero es buscar el display por su ID, obtenemos el valor y lo incrementamos. La funció recibe como parámetro un valor.
    document.getElementById("display").value += value;

}

// Esta función la utilizamos para limpiar el display completo de la calculadora.
function clearDisplay() {

    //Lo que hacemos primero es buscar el display por su ID, obtenemos el valor y lo reemplazamos por un espacio en blanco.
    document.getElementById("display").value = "";

}

// Esta función la utilizmos para borra un solo elemento del display. 
function deleteLast() {

    // Primero guardamos los elementos en una variale, la recorremos y borramos un elemento.
    let displayValue = document.getElementById("display").value;
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);

}

// Esta función la utilizamos para calcular el resultado de los valores que esten en el display.
function calculateResult() {

    // Utilizamos un try - catch para verificar errores.
    try {

        // Si no hay errores evaluamos la operación y la mostranos en el display.
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;

    } catch (error) {

        // Si hay algún error matemático enviamos una alerta.
        alert("Expresión Inválida");

    }

}
