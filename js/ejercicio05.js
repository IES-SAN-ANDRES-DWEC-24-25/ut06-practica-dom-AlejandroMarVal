document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los elementos <h3>
    const h3Elements = document.querySelectorAll("h3");
  
    // Añadimos un evento click a cada uno de los h3
    h3Elements.forEach(function(h3) {
      h3.addEventListener("click", function(event) {
        // El texto del h3 es el tipo de grado
        const grado = h3.textContent.trim();
        
        // Encontramos el div padre de este h3 (div con id "mañana" o "tarde")
        const divPadre = h3.closest("div");
        const turno = divPadre.id; // Esto nos dará "mañana" o "tarde"
  
        // Buscamos la lista de grupos dentro del div
        const lista = divPadre.querySelector("ul");
  
        // Sacamos todos los grupos de la lista
        const grupos = Array.from(lista.getElementsByTagName("li")).map(li => li.textContent.trim());
  
        // Mostramos la información
        const resultadoDiv = document.createElement("div");
        resultadoDiv.classList.add("resultado");
  
        resultadoDiv.innerHTML = `
          Has elegido ${grado} que se imparte en turno de ${turno}
          Los nº de grupos que se imparten son ${grupos.length}: ${grupos.join(", ")}
        `;
  
        document.body.appendChild(resultadoDiv);
      });
    });
  });