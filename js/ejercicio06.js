let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


 window.addEventListener("load",iniciar);

 function iniciar(){
  // Referencias a los elementos del DOM
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  // Añadimos los botones de subir, de bajar y de borrar a cada elemento de la lista
  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }

  // Añadir event listener
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
  // Creamos los botones de cada elemento de la lista (subir, bajar y borrar)
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

 function crearbotones(event) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
  // Identificamos que boton se pulso
  let target = event.target;
  let li = target.closest('li');

  if (target.classList.contains('subir')) {
    // Subimos el elemento
    let prevLi = li.previousElementSibling;
    if (prevLi) {
      listUl.insertBefore(li, prevLi);
    }
  } else if (target.classList.contains('bajar')) {
    // Bajamos el elemento
    let nextLi = li.nextElementSibling;
    if (nextLi) {
      listUl.insertBefore(nextLi, li);
    }
  } else if (target.classList.contains('borrar')) {
    // Borramos el elemento
    li.remove();
  }
 }

 function MostrarOcultarLista(){
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
 if (listDiv.style.display === "none") {
  listDiv.style.display = "block";
  toggleList.textContent = "Ocultar lista";
 } else {
  listDiv.style.display = "none";
  toggleList.textContent = "Mostrar lista";
 }
}
 function CambiarTextoLista(){
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA
  // Cambiamos el texto de la listas según el valor del input
  let nuevoTexto = descriptionInput.value;
  descriptionP.textContent = nuevoTexto;
 }
 function AñadirElemento(){
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
  // Añadimos un nuevo elemento a la lista
  let nuevoElemento = addItemInput.value;
  if (nuevoElemento) {
    let li = document.createElement('li');
    li.textContent = nuevoElemento;
    listUl.appendChild(li);

    // Añadimos los botones de subir, de bajar y de borrar
    attachListItemButtons(li);

    // Limpiamos el input despues de añadir el elemento
    addItemInput.value = "";
  } else {
    alert ("Ingresa un nuevo elemento para añadirlo");
  }
 }


