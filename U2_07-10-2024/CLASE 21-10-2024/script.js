// FUNCIÓN FLECHA

/* 1. **************************************************/

function miFuncion (a,b) {

    return 'Suma mediante una función: ' + ( a + b );

}

/* 2. **************************************************/

console.log(miFuncion(40,20));

document.write(miFuncion(40,20));


// ESTRUCTURA DE FUNCIÓN FLECHA

let salu2 = () => {};

/* 3. **************************************************/ 

// Saludo hecho con función flecha.
let saludo = (nombre) => {

    return 'Saludos ' + nombre;

}

console.log(saludo('Juan'));

document.write('<br>' + 'Saludo con función flecha: ' + saludo('Juan'))

/* 4. **************************************************/

let saludar = nombre => 'Saludos ' + nombre;

console.log(saludar('Ramiro'));

document.write('<br>' + 'Saludo con función flecha: ' + saludar('Ramiro'));

/* 5. ************ Pasar múltiples parámetros **********/

let sumar = (a,b) => 'Suma mediante una función flecha: ' + ( a + b );

console.log(sumar(10,20));

document.write('<br>' + sumar(10,20));

/* 6. ******** Crear objeto en función flecha **********/

let obj = () => ({nombre: 'Roberto', edad: 20});

document.write('<br>' + 'Objeto en función felcha: ' + obj().nombre);

// Accedemos al objeto.
console.log('Objeto en función felcha: ' + obj().nombre);

/* 7. ******************** Arreglos ********************/

let arrayFuncion = () => [1,2,3,4,5];

// Accedemos a todo el Arreglo.
console.log('Accedemos al arreglo: ' + arrayFuncion());

document.write('<br>' + 'Accedemos al arreglo: ' + arrayFuncion());

// Accedemos a un elemento del arreglo.
console.log('Accedemos a un elemento del arreglo: ' + arrayFuncion()[4]);

document.write( '<br>' + 'Accedemos a un elemento del arreglo: ' + arrayFuncion()[4])


