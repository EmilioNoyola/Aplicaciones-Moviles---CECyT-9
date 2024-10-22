const tarea = document.getElementById("tarea"); // Recuperamos el elemento dentro del input por el ID = tarea.
const lista = document.getElementById("lista"); // Recuperamos el elementro de la lista por el ID = lista.

// Utilizamos una función flecha para Agregar la tarea.
let AgregarTarea = () => {

    // Validamos si el formulario esta vacío con una estructura condicional If.
    if (tarea.value === "") {

        alert("Por favor, ingrese una tarea.");
        return;

    }

    // Agregamos la tarea a la lista, al igual que colocamos un botón junto al elemento.
    lista.innerHTML += `<li>${tarea.value} <button onclick="EliminarTarea(this)">Eliminar</button></li>`;

    // Mostramos la tarea agregada en la consola.
    console.log(tarea.value);

    // Limpiamos el formulario.
    tarea.value = "";

};

// Utilizamos una función flecha para Eliminar la tarea.
let EliminarTarea = (tareaEliminada) => {

    // Accedemos al elemento y lo eliminamos.
    tareaEliminada.parentElement.remove(); 
    
    // Identificamos la tareas restantes.
    let tareasRestantes = lista.getElementsByTagName("li");

    // Limpiamos la consola.
    console.clear(); 

    // Recorremos las tareas restantes y Mostramos las tareas restantes en la consola.
    for (let i = 0; i < tareasRestantes.length; i++) {

        console.log(tareasRestantes[i].textContent.replace("Eliminar", "").trim());

    }

};
