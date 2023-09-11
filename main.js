// TRAYENDO ELEMENTOS HTML

const cardImagen = document.getElementById("card-img");
const cardModelo = document.getElementById("card-titulo");
const cardPrecio = document.getElementById("card-precio");
const contenedorCards = document.getElementById("productos-margin");
const form = document.getElementById("formulario");
const inputName = document.getElementById("input-nombre");
const inputNumber = document.getElementById("input-telefono");
const inputEmail = document.getElementById("input-email");
const inputConsulta = document.getElementById("input-text");
const formButton = document.getElementsByClassName("enviar");
const carrito = document.getElementById("carrito");
const menuHamburgesa = document.getElementById("menu-hamburgesa");
const menuHamburgesaOpciones = document.getElementById("menu-hamburgesa-active");
const emailError = document.getElementById("email-error");
const nombreError = document.getElementById("nombre-error");
const numeroError = document.getElementById("numero-error");

// FUNCIONES PARA RENDERIZAR PRODUCTOS 

function mostrarProductos () { // FUNCION PARA MOSTRAR PRODUCTOS DESDE JS
    productos.forEach(product => {
        // CREAR LOS ELEMENTOS 
        const divCont = document.createElement("div");
        divCont.id = "cards-productos";
        const imagen = document.createElement("img");
        imagen.id = "card-img";
        imagen.src = product.imagen;
        const h3 = document.createElement("h3");
        h3.id = "card-titulo";
        h3.innerText = product.modelo;
        const h4 = document.createElement("h4");
        h4.id = "card-precio"
        h4.innerText = "$" + product.precio;
        const h6 = document.createElement("h6");
        h6.id = "card-envio";
        h6.innerText = "Envio gratis en 24hs";
        const boton = document.createElement("button");
        boton.id = "card-button";
        boton.innerText = "COMPRAR";
        // ACOMODAR LOS ELEMENTOS
        divCont.appendChild(imagen);
        divCont.appendChild(h3);
        divCont.appendChild(h4);
        divCont.appendChild(h6);
        divCont.appendChild(boton);
        contenedorCards.appendChild(divCont);
    });
}

// FUNCIONES PARA VALIDAR FORMULARIO

form.addEventListener("submit", function (e) {
  e.preventDefault();
})


// input email 
inputEmail.addEventListener("input", function () {
  const valor = inputEmail.value;

  if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(valor) && valor !== "") {
    inputEmail.classList.add("input-error"); // agregamos error
    inputEmail.classList.remove("input-correcto");
    inputEmail.classList.remove("input-vacio");
    emailError.style.color = "red";
    emailError.classList.add("fa-circle-xmark"); // agregamos cruz
    emailError.classList.remove("fa-circle-check");
  } else {
    inputEmail.classList.add("input-correcto"); // agregamos correcto
    inputEmail.classList.remove("input-error");
    inputEmail.classList.remove("input-vacio");
    emailError.style.color = "green";
    emailError.classList.remove("fa-circle-xmark"); // agregamos check
    emailError.classList.add("fa-circle-check");
  }

  if (/^\s*$/.test(inputEmail.value)) {
    inputEmail.classList.add("input-vacio"); // agregar error si el input esta vacio
    emailError.classList.add("fa-circle-exclamation");
    emailError.style.color = "yellow";
    emailError.classList.remove("fa-circle-check");
    emailError.classList.remove("fa-circle-xmark");
  }
});

inputEmail.addEventListener("blur", function () {
  if (inputEmail.value.trim() === "") {
    inputEmail.classList.add("input-vacio");
    emailError.classList.add("fa-circle-exclamation");
    emailError.style.color = "yellow";
    emailError.classList.remove("fa-circle-check");
    emailError.classList.remove("fa-circle-xmark");
  }
});

// input name
inputName.addEventListener("input", function () {
  const valor = inputName.value;

  if (/\d/.test(valor)) {
    inputName.classList.add("input-error"); // agregamos error
    inputName.classList.remove("input-correcto");
    inputName.classList.remove("input-vacio");
    nombreError.style.color = "red";
    nombreError.classList.add("fa-circle-xmark");
    nombreError.classList.remove("fa-circle-check");
  } else {
    inputName.classList.add("input-correcto"); // agregamos correcto
    inputName.classList.remove("input-error");
    inputName.classList.remove("input-vacio");
    nombreError.style.color = "green";
    nombreError.classList.add("fa-circle-check");
    nombreError.classList.remove("fa-circle-xmark");
  }

  if (/^\s*$/.test(inputName.value)) {
    inputName.classList.add("input-vacio"); // agregar error si el input esta vacio
    nombreError.classList.add("fa-circle-exclamation");
    nombreError.style.color = "yellow";
    nombreError.classList.remove("fa-circle-check");
    nombreError.classList.remove("fa-circle-xmark");
  }
});

inputName.addEventListener("blur", function () {
  if (inputName.value.trim() === "") {
    inputName.classList.add("input-vacio");
    nombreError.classList.add("fa-circle-exclamation");
    nombreError.style.color = "yellow";
    nombreError.classList.remove("fa-circle-check");
    nombreError.classList.remove("fa-circle-xmark");
  }
});


// input numero
inputNumber.addEventListener("input", function () {
  const valor = inputNumber.value;

  if (!/^\d*$/.test(valor)) {
    inputNumber.classList.add("input-error"); // agregamos error
    inputNumber.classList.remove("input-correcto");
    inputNumber.classList.remove("input-vacio");
    numeroError.style.color = "red";
    numeroError.classList.add("fa-circle-xmark");
    numeroError.classList.remove("fa-circle-check");
  } else {
    inputNumber.classList.add("input-correcto"); // agregamos correcto
    inputNumber.classList.remove("input-error");
    inputNumber.classList.remove("input-vacio");
    numeroError.style.color = "green";
    numeroError.classList.add("fa-circle-check");
    numeroError.classList.remove("fa-circle-xmark");
  }

  if (/^\s*$/.test(inputNumber.value)) {
    inputNumber.classList.add("input-vacio"); // agregar error si el input esta vacio
    numeroError.classList.add("fa-circle-exclamation");
    numeroError.style.color = "yellow";
    numeroError.classList.remove("fa-circle-check");
    numeroError.classList.remove("fa-circle-xmark");
  }
});

inputNumber.addEventListener("blur", function () {
  if (inputNumber.value.trim() === "") {
    inputNumber.classList.add("input-vacio");
    numeroError.classList.add("fa-circle-exclamation");
    numeroError.style.color = "yellow";
    numeroError.classList.remove("fa-circle-check");
    numeroError.classList.remove("fa-circle-xmark");
  } 
});

// FUNCIONES PARA EL MENU HAMBURGESA

let menuHamburgesaDesactivado = false;

menuHamburgesa.addEventListener("click", function () {
  menuHamburgesaDesactivado = !menuHamburgesaDesactivado;
  if (menuHamburgesaDesactivado) {
    menuHamburgesaOpciones.style.display = "flex";
  } else {
    menuHamburgesaOpciones.style.display = "none";
  }
})

// FUNCIONES PARA EL CARRITO 

// function abrirCarrito () {
//   carrito.classList.add("carrito-abierto");
// }

// carrito.addEventListener("click", abrir)

// FUNCION INIT 

function init () {
    mostrarProductos();
}

init();