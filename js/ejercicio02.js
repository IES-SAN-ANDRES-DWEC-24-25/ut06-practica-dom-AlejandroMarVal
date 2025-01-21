// Creamos una lista no ordenada
const ul = document.createElement("ul");
document.body.appendChild(ul);

// Creamos un botón para agregar elementos
const buttonAgregar = document.createElement("button");
buttonAgregar.textContent = "Agregar elemento";
document.body.appendChild(buttonAgregar);

// Evento para agregar elementos a la lista
buttonAgregar.addEventListener("click", function () {
  // Creamos un nuevo elemento de lista
  const li = document.createElement("li");
  li.textContent = `Elemento ${ul.children.length + 1}`;

  // Agregamos el nuevo elemento a la lista
  ul.appendChild(li);
});

// Creamos el botón para cambiar el fondo y el color del texto de la lista
const buttonCambioFondo = document.createElement("button");
buttonCambioFondo.textContent = "Fondo Oscuro";
document.body.appendChild(buttonCambioFondo);

// Función para poder cambiar entre fondo oscuro y claro, (solo para la lista)
buttonCambioFondo.addEventListener("click", function () {
  // Si la lista tiene la clase 'inverso' la quitamos
  if (ul.classList.contains("inverso")) {
    ul.classList.remove("inverso");
    // Cambiamos el texto del botón
    buttonCambioFondo.textContent = "Fondo Oscuro"; 
  } else {
    // Si no tiene la clase, le agregamos la clase 'inverso'
    ul.classList.add("inverso");
    // Cambiamos el texto del botón
    buttonCambioFondo.textContent = "Fondo Claro"; 
  }
});