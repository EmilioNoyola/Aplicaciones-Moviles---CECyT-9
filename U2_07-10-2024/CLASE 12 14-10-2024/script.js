// Noyola Gómez Emilio Damian - 5IV9 - Clase 12 - 14/10/2024

/* === USO DE PARÁMETROS EN FUNCIONES == */

/* 01
    // Función para mostrar en la consola mensajes.
    function hello() {

        console.log('Hola Js');
        console.log('Hola HTML');
        console.log('Hola CSS');

    }

    // LLamamos a la función.
    hello();

*/


/* 02

    function hello(){

        return 'hola js';

    }

    // const result = hello();

    console.log(hello());

*/

/* 03

    function hello(){

        return {

            nombre: 'Emilio'

        };

    }
        
    console.log(hello());

*/

/* 04
    // Función que retorna a otra función.
    function hello(){

        return function (){

            return 'hola js';

        }

    }

    console.log(hello()());

*/

/* === USO DE PARÁMETROS EN FUNCIONES == */

/* 05
    // Pasar un parámetro a la función.
    function hello(name){

        return 'Hola ' + name;

    }

    console.log(hello('Emilio'));

*/

/* 06
    // Pasar dos parámetros a la función.
    function hello(x,y){

        return x + y;

    }

    console.log(hello(10,20));

*/

/* 07
    // Pasar dos parámetros a la función.
    function hello(x,y){

        return x - y;

    }

    console.log(hello(10,20));

*/

/* 08
    // Pasar dos parámetros a la función.
    function hello(x,y){

        return x * y;

    }

    console.log(hello(10,20));

*/

/* === OBJETOS == */

const user = {

    nombre: 'Emilio',
    apellido: 'Noyola',
    edad: 18,
    edoCivil: 'Soltero',
    domicilio: {

        ciudad: 'CDMX',
        calle: 'Edo de Nayarit',
        numero: 19

    },
    amigos: ['Agustin', 'Mario'],
    activo:false,
    enviarMensaje: function(){

        return 'enviando mensaje...'

    }

}

// Notificación que muestre Ciudad, Calle y Número:
alert(user.domicilio.ciudad + ' ' + user.domicilio.calle + ' ' + user.domicilio.numero);

// Mostrar en Consola los amigos:
console.log(user.amigos);

// Notificación que muestre si esta Activo o Dado de baja:
alert(user.activo ? 'Activo' : 'Dado de baja');

// Mostrar en Consola Nombre, Apellidos, Estado Civil:
console.log(user.nombre + ' ' + user.apellido + ' esta ' + user.edoCivil);

// Notificación que muestre el estado del mensaj
alert(user.enviarMensaje());