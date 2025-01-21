document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos los elementos del DOM
    const lista = document.querySelector(".lista ul");
    const input = document.querySelector(".AñadirElemento");
    const boton = document.querySelector(".BotonAñadir");

    // Agregamos un evento al botón
    boton.addEventListener("click", function () {
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
});