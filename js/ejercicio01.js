document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos elementos del DOM
    const header = document.querySelector("h1");
    const button = document.querySelector("button");
    const input = document.querySelector("input");

    // Agregamos evento al botón
    button.addEventListener("click", function(){
        // Obenemos el valor del input
        const color = input.value;
        // Comprobamos si el color no está vacío
        if (color) {
            // Cambiamos el color al h1
            header.style.color = color;
        } else {
            // Mostramos un mensaje si el input está vacío
            alert ("Ingresa un color")
        }
    });
});