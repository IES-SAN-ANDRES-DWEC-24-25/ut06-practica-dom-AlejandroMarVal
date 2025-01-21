document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos los elementos del DOM
    const lista = document.querySelector(".lista ul");
    const input = document.querySelector(".AñadirElemento");
    
    // Seleccionamos todos los botones dentro del contenedor .lista
    const botones = document.querySelectorAll(".lista button");

    // Obtenemos los botones por su posición en el array de botones
    const botonAñadir = botones[0];     // primer botón: Añadir
    const botonBorrarUltimo = botones[1];     // segundo botón: Borrar Último
    const botonBorrarPrimero = botones[2];    // tercer botón: Borrar Primero

    // Agregamos un evento al botón "Añadir"
    botonAñadir.addEventListener("click", function () {
        // Obtenemos el texto del input
        const nuevoElemento = input.value.trim();

        // Verificamos que el input no esté vacío
        if (nuevoElemento) {
            // Creamos un nuevo elemento de lista
            const li = document.createElement("li");
            li.textContent = nuevoElemento;

            // Añadimos el nuevo elemento a la lista
            lista.appendChild(li);

            // Limpiamos el input
            input.value = "";
        } else {
            // Mostramos un mensaje si el input está vacío
            alert("Escribe algo para añadir a la lista.");
        }
    });

    // Agregar evento al botón "Borrar Primero"
    botonBorrarPrimero.addEventListener("click", function () {
        // Verificamos si hay elementos en la lista
        if (lista.children.length > 0) {
            // Borramos el primer elemento de la lista
            lista.removeChild(lista.firstElementChild);
        }
    });

    // Agregar evento al botón "Borrar Último"
    botonBorrarUltimo.addEventListener("click", function () {
        // Verificamos si hay elementos en la lista
        if (lista.children.length > 0) {
            // Borramos el último elemento de la lista
            lista.removeChild(lista.lastElementChild);
        }
    });
});