// TRAYENDO ELEMENTOS HTML

// elementos del menu hamburgesa
const menuHamburgesa = document.getElementById("menu-hamburgesa");
const menuHamburgesaContenedor = document.getElementById("menu-hamburgesa-active");
const menuHamburgesaOpciones = document.querySelectorAll(".a");
// elementos del carrito 
// const botonComprar = document.getElementsByClassName("card-button");
const logoCarrito = document.getElementById("carrito");
const carrito = document.getElementById("carrito-active");
const carritoVacio = document.getElementById("carrito-advertencia");
const carritoPedidos = document.getElementById("carrito-pedido");
const carritoContenedor = document.getElementById("productos-content");
const carritoComprar = document.getElementById("finalizar-pedido");
const tachito = document.getElementById("fa-trash");
// elementos de las cards
const cardImagen = document.getElementById("card-img");
const cardModelo = document.getElementById("card-titulo");
const cardPrecio = document.getElementById("card-precio");
const contenedorCards = document.getElementById("productos-margin");
// elementos de las marcas de los productos 
const btnTodos = document.getElementById("boton-todos");
const btnSamsung = document.getElementById("boton-samsung");
const btnApple = document.getElementById("boton-apple");
const btnMotorola = document.getElementById("boton-motorola");
// elementos del formulario
const form = document.getElementById("formulario");
const inputName = document.getElementById("input-nombre");
const inputNumber = document.getElementById("input-telefono");
const inputEmail = document.getElementById("input-email");
const inputConsulta = document.getElementById("input-text");
const formButton = document.getElementsByClassName("enviar");
const emailError = document.getElementById("email-error");
const nombreError = document.getElementById("nombre-error");
const numeroError = document.getElementById("numero-error");
const check = document.querySelectorAll(".input-icon i");
// FUNCIONES PARA RENDERIZAR PRODUCTOS 

function mostrarProductos () { // FUNCION PARA MOSTRAR PRODUCTOS DESDE JS
    productos.forEach(product => {
        // CREAR LOS ELEMENTOS 
        const divCont = document.createElement("div");
        divCont.classList.add("cards-productos");
        divCont.classList.add(product.marca)
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
        boton.classList.add("card-button");
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
  //
  inputEmail.classList.remove("input-correcto");
  inputName.classList.remove("input-correcto");
  inputNumber.classList.remove("input-correcto");
  inputEmail.classList.remove("input-error");
  inputNumber.classList.remove("input-error");
  inputName.classList.remove("input-error");
  //
  emailError.style.color = "transparent";
  nombreError.style.color = "transparent";
  numeroError.style.color = "transparent";
  //
  const nombreFormulario = inputName.value;
  const numeroFormulario = inputNumber.value;
  const emailFormulario = inputEmail.value;
  const consultaFormulario = inputConsulta.value;
  //
  localStorage.setItem(`FormularioNombre`, nombreFormulario);
  localStorage.setItem(`FormularioNumero`, numeroFormulario);
  localStorage.setItem(`FormularioEmail`, emailFormulario);
  localStorage.setItem(`FormularioConsulta`, consultaFormulario);
  form.reset();

});


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

// FUNCIONES PARA EL CARRITO

let carritoActivo = false;

// abrir y cerrar 

logoCarrito.addEventListener("click", function (){ 
  carritoActivo = !carritoActivo;
  if (carritoActivo) {
    carrito.style.display = "flex";
  } else {
    carrito.style.display = "none";
  }
})

document.addEventListener("click", function (event) {
  const targeti = event.target;
  if (targeti !== logoCarrito && !carrito.contains(targeti)) {
    carrito.style.display = "none";
      carritoActivo = false;
  }
});


const valorOriginal = carritoVacio.innerText;

// agregar productos

let carritoLS = JSON.parse(localStorage.getItem("carritoLS")) || [];

function guardarLS(infoProducto) {
  carritoLS.push(infoProducto);
  localStorage.setItem("productoData", JSON.stringify(carritoLS));
  actualizarInterfazUsuario(carritoLS);
  }

  const mostrarHTML = () => {
    carritoContenedor.innerHTML = "";
    allProducts.forEach(productoElegido => {
      const contenedorCardsCarrito = document.createElement("div");
      contenedorCardsCarrito.id = "productos-card-content";
      contenedorCardsCarrito.innerHTML = `        
      <div id="producto-agregado">
      <div id="contenedor-carrito-data">
          <p id="producto-carrito-nombre">${productoElegido.nombreCelular}</p>
          <p id="producto-carrito-precio">${productoElegido.precioCelular}</p>
      </div>
      <img src="${productoElegido.imagenCelular}" id="producto-carrito-img">
      <p id="producto-carrito-cantidad">Cantidad : ${productoElegido.cantidad}</p>
  </div>
      `
      carritoContenedor.appendChild(contenedorCardsCarrito);
    } )
  } 

  window.addEventListener('load', () => {
    if (localStorage.length === 0){
        carritoVacio.innerText = "AUN NO HAY PRODUCTOS EN EL CARRITO!";
        carritoContenedor.innerHTML = "";
        tachito.style.display = "none";
        carritoComprar.style.display = "none";
        localStorage.clear();
    } else {
      const carritoLS = JSON.parse(localStorage.getItem('productoData')) || [];
      actualizarInterfazUsuario(carritoLS);
    }
  });

  function actualizarInterfazUsuario(carritoLS) {
    carritoContenedor.innerHTML = "";
    carritoVacio.innerText = "MIS PRODUCTOS";
    carritoVacio.classList.add("margin-topp");
    carritoVacio.id = "carrito-pedido";
    carrito.style.display = "none";
    carritoComprar.style.display = "flex";
    tachito.style.display = "flex";
    carritoLS.forEach(productoElegido => {
      const contenedorCardsCarrito = document.createElement("div");
      contenedorCardsCarrito.id = "productos-card-content";
      contenedorCardsCarrito.innerHTML = `        
      <div id="producto-agregado">
      <div id="contenedor-carrito-data">
          <p id="producto-carrito-nombre">${productoElegido.nombreCelular}</p>
          <p id="producto-carrito-precio">${productoElegido.precioCelular}</p>
      </div>
      <img src="${productoElegido.imagenCelular}" id="producto-carrito-img">
      <p id="producto-carrito-cantidad">Cantidad : ${productoElegido.cantidad}</p>
  </div>
      `
      carritoContenedor.appendChild(contenedorCardsCarrito);
       // funcion para borrar los productos del carrito
      tachito.addEventListener("click", function (){
                carritoVacio.innerText = "AUN NO HAY PRODUCTOS EN EL CARRITO!";
                carritoContenedor.innerHTML = "";
                tachito.style.display = "none";
                carritoComprar.style.display = "none";
                window.location.reload();
                localStorage.clear();
      })
    } )
    console.log(carritoLS);
  }  
  

let allProducts = [];

function agregarProductos() {
  document.querySelectorAll(".card-button").forEach((marcado) => {
    marcado.addEventListener("click", function(){
        carritoVacio.innerText = "MIS PRODUCTOS";
        carritoVacio.classList.add("margin-topp");
        carritoVacio.id = "carrito-pedido";
        carrito.style.display = "flex";
        carritoComprar.style.display = "flex";
        tachito.style.display = "flex";
      
      // traemos la data de las cards // 

        const productoElegido = marcado.parentElement;
        const infoProducto = {
          cantidad : 1,
          nombreCelular : productoElegido.querySelector("h3").textContent,
          imagenCelular : productoElegido.querySelector("img").src,
          precioCelular : productoElegido.querySelector("h4").textContent
        }
        
        const existeCard = allProducts.some(productoElegido => productoElegido.nombreCelular === infoProducto.nombreCelular);

        if (existeCard){
          const productos = allProducts.map(productoElegido => {
            if (productoElegido.nombreCelular === infoProducto.nombreCelular){
              productoElegido.cantidad++;
              return productoElegido;
            } else {
              return productoElegido; 
            }
          });
          allProducts = [...productos];
        } else {
          allProducts = [...allProducts, infoProducto];
          updateCart(infoProducto)
        }


        // funcion para borrar los productos del carrito
        tachito.addEventListener("click", function (){
          carritoVacio.innerText = "AUN NO HAY PRODUCTOS EN EL CARRITO!";
          carritoContenedor.innerHTML = "";
          tachito.style.display = "none";
          carritoComprar.style.display = "none";
          window.location.reload();
          localStorage.clear();
          })
      })
});
}

function updateCart (infoProducto) {
  guardarLS(infoProducto);
  mostrarHTML();
};

// finalizar compra 

const contenedorCardsCarrito = document.getElementById("productos-card-content");

carritoComprar.addEventListener("click", function () {
  prompt("ingrese un correo electronico para que podamos terminar de gestionar la compra");
  alert("Le enviaremos un mail para poder finalizar la compra!");
  carritoVacio.innerText = "AUN NO HAY PRODUCTOS EN EL CARRITO!";
  carritoContenedor.innerHTML = "";
  tachito.style.display = "none";
  carritoComprar.style.display = "none";
});

// FUNCIONES PARA EL MENU HAMBURGESA

let menuHamburgesaActivado = false;

menuHamburgesa.addEventListener("click", function () {
  menuHamburgesaActivado = !menuHamburgesaActivado;
  if (menuHamburgesaActivado) {
    menuHamburgesaContenedor.style.display = "flex";
  } else {
    menuHamburgesaContenedor.style.display = "none";
  }
})

  menuHamburgesaOpciones.forEach((opcion) => {
     opcion.addEventListener('click', function () {
        menuHamburgesaContenedor.style.display = "none";
        menuHamburgesaActivado = false;
    });
});

document.addEventListener("click", function (event) {
  const target = event.target;
  if (target !== menuHamburgesa && !menuHamburgesaContenedor.contains(target)) {
      menuHamburgesaContenedor.style.display = "none";
      menuHamburgesaActivado = false;
  }
});

// FUNCIONES PARA SELECCIONAR PRODUCTOS POR MARCA 

let marcaElegida = "todos";

btnSamsung.addEventListener("click", function () {
  marcaElegida = "Samsung";
  // activamos clase de boton activo
  btnSamsung.classList.add("active");
  btnTodos.classList.remove("active");
  btnApple.classList.remove("active");
  btnMotorola.classList.remove("active");
  // activamos solo los productos con la marca del boton activado
  document.querySelectorAll(".cards-productos").forEach((product) => {
    product.style.display = "none";
  });
  document.querySelectorAll("." + marcaElegida).forEach((card) => {
    card.style.display = "flex";
});
});

btnTodos.addEventListener("click", function () {
  btnTodos.classList.add("active");
  btnSamsung.classList.remove("active");
  btnApple.classList.remove("active");
  btnMotorola.classList.remove("active");
  // activamos todos los productos 
  document.querySelectorAll(".cards-productos").forEach((card) => {
    card.style.display = "flex";
  })
})

btnApple.addEventListener("click", function () {
  marcaElegida = "Apple";
  btnApple.classList.add("active");
  btnTodos.classList.remove("active");
  btnSamsung.classList.remove("active");
  btnMotorola.classList.remove("active");
    // activamos solo los productos con la marca del boton activado
    document.querySelectorAll(".cards-productos").forEach((product) => {
      product.style.display = "none";
    });
    document.querySelectorAll("." + marcaElegida).forEach((card) => {
      card.style.display = "flex";
  });
})

btnMotorola.addEventListener("click", function () {
  marcaElegida = "Motorola";
  btnMotorola.classList.add("active");
  btnTodos.classList.remove("active");
  btnApple.classList.remove("active");
  btnSamsung.classList.remove("active");
    // activamos solo los productos con la marca del boton activado
    document.querySelectorAll(".cards-productos").forEach((product) => {
      product.style.display = "none";
    });
    document.querySelectorAll("." + marcaElegida).forEach((card) => {
      card.style.display = "flex";
  });
})

// FUNCION INIT 

function init () {
    mostrarProductos();
    agregarProductos();
}

init();
