// TRAYENDO ELEMENTOS HTML

// elementos del menu hamburgesa
const menuHamburgesa = document.getElementById("menu-hamburgesa");
const menuHamburgesaContenedor = document.getElementById("menu-hamburgesa-active");
const menuHamburgesaOpciones = document.querySelectorAll(".a");
// elementos del carrito 
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
const productoAgregado = document.getElementById("producto-en-carrito");
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
const advertenciaNombre = document.getElementById("advertencia-nombre");
const advertenciaNumero = document.getElementById("advertencia-numero");
const advertenciaNumero2 = document.getElementById("advertencia-numero2");
const advertenciaEmail = document.getElementById("advertencia-email");
const inputVacioNombre = document.getElementById("input-vacio-nombre");
const inputVacioNumero = document.getElementById("input-vacio-numero");
const inputVacioEmail = document.getElementById("input-vacio-email");
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

form.addEventListener("submit", function validarForm (e){
  // e.preventDefault();
  // val email 
  const valor = inputEmail.value;
  if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(valor) && valor !== "") {
    e.preventDefault();
    return false;
  } 
  if (/^\s*$/.test(inputEmail.value)) {
    e.preventDefault();
    return false;
  }
  // val name 
  const valor2 = inputName.value;
  if (/\d/.test(valor2)) {
    e.preventDefault();
    return false;
  } 
  if (/^\s*$/.test(inputName.value)) {
    e.preventDefault();
    return false;
  }
  // val num 
  const valor3 = inputNumber.value;
  if (!/^\d*$/.test(valor3)) {
    e.preventDefault();
    return false;
  }
  if (/^\s*$/.test(inputNumber.value)) {
    e.preventDefault();
    return false;
  }

});

function formEnviado () {
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

};


// input email 
inputEmail.addEventListener("input", function validarEmail () {
  const valor = inputEmail.value;

  if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(valor) && valor !== "") {
    inputEmail.classList.add("input-error"); // agregamos error
    inputEmail.classList.remove("input-correcto");
    inputEmail.classList.remove("input-vacio");
    emailError.style.color = "red";
    emailError.classList.add("fa-circle-xmark"); // agregamos cruz
    emailError.classList.remove("fa-circle-check");
    advertenciaEmail.style.display = "flex";
    inputVacioEmail.style.display = "none";
  } else {
    inputEmail.classList.add("input-correcto"); // agregamos correcto
    inputEmail.classList.remove("input-error");
    inputEmail.classList.remove("input-vacio");
    emailError.style.color = "green";
    emailError.classList.remove("fa-circle-xmark"); // agregamos check
    emailError.classList.add("fa-circle-check");
    advertenciaEmail.style.display = "none";
    inputVacioEmail.style.display = "none";
  }

  if (/^\s*$/.test(inputEmail.value)) {
    inputEmail.classList.add("input-vacio"); // agregar error si el input esta vacio
    emailError.classList.add("fa-circle-exclamation");
    emailError.style.color = "yellow";
    emailError.classList.remove("fa-circle-check");
    emailError.classList.remove("fa-circle-xmark");
    inputVacioEmail.style.display = "flex";
  }
});

inputEmail.addEventListener("blur", function () {
  if (inputEmail.value.trim() === "") {
    inputEmail.classList.add("input-vacio");
    emailError.classList.add("fa-circle-exclamation");
    emailError.style.color = "yellow";
    emailError.classList.remove("fa-circle-check");
    emailError.classList.remove("fa-circle-xmark");
    inputVacioEmail.style.display = "flex";
  }
});

// input name
inputName.addEventListener("input", function validarNombre () {
  const valor = inputName.value;

  if (/\d/.test(valor)) {
    inputName.classList.add("input-error"); // agregamos error
    inputName.classList.remove("input-correcto");
    inputName.classList.remove("input-vacio");
    nombreError.style.color = "red";
    nombreError.classList.add("fa-circle-xmark");
    nombreError.classList.remove("fa-circle-check");
    advertenciaNombre.style.display = "flex";
    inputVacioNombre.style.display = "none";
  } else {
    inputName.classList.add("input-correcto"); // agregamos correcto
    inputName.classList.remove("input-error");
    inputName.classList.remove("input-vacio");
    nombreError.style.color = "green";
    nombreError.classList.add("fa-circle-check");
    nombreError.classList.remove("fa-circle-xmark");
    advertenciaNombre.style.display = "none";
    inputVacioNombre.style.display = "none";
  }

  if (/^\s*$/.test(valor)) {
    inputName.classList.add("input-vacio"); // agregar error si el input esta vacio
    nombreError.classList.add("fa-circle-exclamation");
    nombreError.style.color = "yellow";
    nombreError.classList.remove("fa-circle-check");
    nombreError.classList.remove("fa-circle-xmark");
    inputVacioNombre.style.display = "flex";
  }
});

inputName.addEventListener("blur", function () {
  if (inputName.value.trim() === "") {
    inputName.classList.add("input-vacio");
    nombreError.classList.add("fa-circle-exclamation");
    nombreError.style.color = "yellow";
    nombreError.classList.remove("fa-circle-check");
    nombreError.classList.remove("fa-circle-xmark");
    inputVacioNombre.style.display = "flex";
  }
});


// input numero
inputNumber.addEventListener("input", function validarNumero () {
  const valor = inputNumber.value;

  if (!/^\d*$/.test(valor), !/\d{7,}/.test(inputNumber.value)) {
    inputNumber.classList.add("input-error"); // agregamos error
    inputNumber.classList.remove("input-correcto");
    inputNumber.classList.remove("input-vacio");
    numeroError.style.color = "red";
    numeroError.classList.add("fa-circle-xmark");
    numeroError.classList.remove("fa-circle-check");
    advertenciaNumero2.style.display = "none";
    inputVacioNumero.style.display = "none";
  } else {
    inputNumber.classList.add("input-correcto"); // agregamos correcto
    inputNumber.classList.remove("input-error");
    inputNumber.classList.remove("input-vacio");
    numeroError.style.color = "green";
    numeroError.classList.add("fa-circle-check");
    numeroError.classList.remove("fa-circle-xmark");
    advertenciaNumero.style.display = "none";
    advertenciaNumero2.style.display = "none";
    inputVacioNumero.style.display = "none";
  }

  if (!/\d{7,}/.test(inputNumber.value)) {
    advertenciaNumero2.style.display = "flex";
  } else {
    advertenciaNumero2.style.display = "none";
  }

  if (!/^\d*$/.test(valor)) {
    advertenciaNumero.style.display = "flex";
  } else {
    advertenciaNumero.style.display = "none";
  }

  if (/^\s*$/.test(inputNumber.value)) {
    inputNumber.classList.add("input-vacio"); // agregar error si el input esta vacio
    numeroError.classList.add("fa-circle-exclamation");
    numeroError.style.color = "yellow";
    numeroError.classList.remove("fa-circle-check");
    numeroError.classList.remove("fa-circle-xmark");
    inputVacioNumero.style.display = "flex";
    advertenciaNumero.style.display = "none";
    advertenciaNumero2.style.display = "none";
  }

});

inputNumber.addEventListener("blur", function () {
  if (inputNumber.value.trim() === "") {
    inputNumber.classList.add("input-vacio");
    numeroError.classList.add("fa-circle-exclamation");
    numeroError.style.color = "yellow";
    numeroError.classList.remove("fa-circle-check");
    numeroError.classList.remove("fa-circle-xmark");
    inputVacioNumero.style.display = "flex";
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
  const existeProducto = carritoLS.find(function (tel) {
    return tel.nombreCelular === infoProducto.nombreCelular;
  })
  if (existeProducto){
    console.log("existe");
    return;
  } else {
  console.log("este");
  carritoLS.push(infoProducto);
  localStorage.setItem("productoData", JSON.stringify(carritoLS));
  actualizarInterfazUsuario(carritoLS);
  }
  }

  function agregarUnidad (celu) {
    console.log(celu.cantidad);
    if (carritoLS.map((cel) => 
    cel.nombreCelular === celu.nombreCelular)){
      celu.cantidad += 1;
      updateCart(celu);
    }
    console.log(celu.nombreCelular, celu.cantidad);
  };

  function restarUnidad (celu, menosCantPadre) {
    console.log(celu.cantidad);
    if (carritoLS.map((cel) => 
    cel.nombreCelular === celu.nombreCelular)){
      celu.cantidad -= 1;
      if (celu.cantidad === 0) {
        const productoBuscado = celu.nombreCelular;
        menosCantPadre.style.display = "none";
        carroVacio();
      } else {
        updateCart(celu);
      }
    }
    console.log(celu.nombreCelular, celu.cantidad);
  }

  function sumarUnidades (nombreCelu) {
    const existeCelu = carritoLS.find((item) => item.nombreCelular === nombreCelu); 
    if (nombreCelu) {
    agregarUnidad(existeCelu);
    }
  };

  function restarUnidades (nombreCelu, menosCantPadre) {
    console.log(nombreCelu);
    const existeCelu = carritoLS.find((item) => item.nombreCelular === nombreCelu); 
    restarUnidad(existeCelu, menosCantPadre);
  }

  function htmlMostrar (productoElegido) {;
    const contenedorCardsCarrito = document.createElement("div");
    contenedorCardsCarrito.id = "productos-card-content";
    contenedorCardsCarrito.innerHTML = `        
    <div id="producto-agregado" class="hey">
    <div id="contenedor-carrito-data">
        <p id="producto-carrito-nombre">${productoElegido.nombreCelular}</p>
        <p id="producto-carrito-precio">${productoElegido.precioCelular}</p>
    </div>
    <img src="${productoElegido.imagenCelular}" id="producto-carrito-img">
    <p id="producto-carrito-cantidad">Cantidad : ${productoElegido.cantidad}</p>
    <div id="contenedor-suma-resta">
    <i class="fa-solid fa-minus" class="fa-minus" id="${productoElegido.nombreCelular}resta"></i>
    <i class="fa-solid fa-plus" class="fa-plus" id="${productoElegido.nombreCelular}"></i>
    </div>
</div>
    `
    carritoContenedor.appendChild(contenedorCardsCarrito);
  }

  let carritoContent = [];

  function sumaRestaFunction (productoElegido) {
    idMas = productoElegido.nombreCelular;
    idMenos = productoElegido.nombreCelular + "resta";
    const masCantidad = document.getElementById(idMas);
    const menosCantidad = document.getElementById(idMenos);
    masCantidad.addEventListener("click", function (e) {
      const masCant = e.target.parentElement.parentElement.children[0].children[0].textContent;
      console.log(masCant);
      sumarUnidades(masCant);
          })
    menosCantidad.addEventListener("click", function (e) {
      const menosCantPadre = e.target.parentElement.parentElement;
      // console.log(menosCantPadre);
      const menosCant = e.target.parentElement.parentElement.children[0].children[0].textContent;
      console.log(menosCant);
      restarUnidades(menosCant, menosCantPadre);
    })
  };

  const mostrarHTML = () => {
    carritoContenedor.innerHTML = "";
    allProducts.forEach(productoElegido => {
      // if (carritoLS.map(card => {
      //   card.nombreCelular === productoElegido;
      // })){
      //   return;
      // } 
      console.log(allProducts);
      const contenedorCardsCarrito = document.createElement("div");
      contenedorCardsCarrito.id = "productos-card-content";
      contenedorCardsCarrito.innerHTML = `        
      <div id="producto-agregado" class="hey">
      <div id="contenedor-carrito-data">
          <p id="producto-carrito-nombre">${productoElegido.nombreCelular}</p>
          <p id="producto-carrito-precio">${productoElegido.precioCelular}</p>
      </div>
      <img src="${productoElegido.imagenCelular}" id="producto-carrito-img">
      <p id="producto-carrito-cantidad">Cantidad : ${productoElegido.cantidad}</p>
      <div id="contenedor-suma-resta">
      <i class="fa-solid fa-minus" class="fa-minus" id="${productoElegido.nombreCelular}resta"></i>
      <i class="fa-solid fa-plus" class="fa-plus" id="${productoElegido.nombreCelular}"></i>
      </div>
  </div>
      `
      carritoContenedor.appendChild(contenedorCardsCarrito);
      // mas y menos productos 
      sumaRestaFunction(productoElegido);
      });
    } 
    // )} 

  function carroVacio () {
    const elementosCarrito = document.querySelectorAll(".hey");
    let displayNone = true;
    elementosCarrito.forEach(elemento => {
      if (elemento.style.display !== "none") {
        displayNone = false;
      }
    })
    if (localStorage.length === 0 || displayNone === true){
        carritoVacio.innerText = "AUN NO HAY PRODUCTOS EN EL CARRITO!";
        carritoContenedor.innerHTML = "";
        tachito.style.display = "none";
        carritoComprar.style.display = "none";
        localStorage.clear();
    } 
    return;
  };

  window.addEventListener('load', () => {
    if (localStorage.length === 0){
        carritoVacio.innerText = "AUN NO HAY PRODUCTOS EN EL CARRITO!";
        carritoContenedor.innerHTML = "";
        tachito.style.display = "none";
        carritoComprar.style.display = "none";
        localStorage.clear();
    } else {
      const carritoLS = JSON.parse(localStorage.getItem('productoData')) || [];
      console.log(carritoLS);
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
      if (productoElegido.cantidad < 0) {
        return
      };
      const contenedorCardsCarrito = document.createElement("div");
      contenedorCardsCarrito.id = "productos-card-content";
      contenedorCardsCarrito.innerHTML = `        
      <div id="producto-agregado" class="hey">
      <div id="contenedor-carrito-data">
          <p id="producto-carrito-nombre">${productoElegido.nombreCelular}</p>
          <p id="producto-carrito-precio">${productoElegido.precioCelular}</p>
      </div>
      <img src="${productoElegido.imagenCelular}" id="producto-carrito-img">
      <p id="producto-carrito-cantidad">Cantidad : ${productoElegido.cantidad}</p>
      <div id="contenedor-suma-resta">
      <i class="fa-solid fa-minus" class="fa-minus" id="${productoElegido.nombreCelular}resta"></i>
      <i class="fa-solid fa-plus" class="fa-plus" id="${productoElegido.nombreCelular}"></i>
      </div>
  </div>
      `
      carritoContenedor.appendChild(contenedorCardsCarrito);
      // mas y menos productos 
      idMas = productoElegido.nombreCelular;
      idMenos = productoElegido.nombreCelular + "resta";
      const masCantidad = document.getElementById(idMas);
      const menosCantidad = document.getElementById(idMenos);
      masCantidad.addEventListener("click", function (e) {
        const masCant = e.target.parentElement.parentElement.children[0].children[0].textContent;
        console.log(masCant);
        sumarCant(masCant);
        function sumarCant (nombreCelu) {
          const existeCelu = carritoLS.find((item) => item.nombreCelular === nombreCelu); 
          if (nombreCelu) {
          agregarCant(existeCelu);
          }
          function agregarCant (existeCelu) {
            console.log(existeCelu.cantidad);
            if (carritoLS.map((cel) => 
            cel.nombreCelular === existeCelu.nombreCelular)){
              existeCelu.cantidad += 1;
              console.log("yey")
              updateCart(existeCelu);
              guardarLS(existeCelu);
            }
            console.log(existeCelu.nombreCelular, existeCelu.cantidad);
          };
        
        };
      })
      menosCantidad.addEventListener("click", function (e) {
        const menosCantPadre = e.target.parentElement.parentElement;
        // console.log(menosCantPadre);
        const menosCant = e.target.parentElement.parentElement.children[0].children[0].textContent;
        console.log(menosCant);
        restarUnidades(menosCant, menosCantPadre);
        function restarUnidades (nombreCelu, menosCantPadre) {
          console.log(nombreCelu);
          const existeCelu = carritoLS.find((item) => item.nombreCelular === nombreCelu); 
          restarUnidad(existeCelu, menosCantPadre);
        }
        function restarUnidad (celu, menosCantPadre) {
          console.log(celu.cantidad);
          if (carritoLS.map((cel) => 
          cel.nombreCelular === celu.nombreCelular)){
            celu.cantidad -= 1;
            if (celu.cantidad === 0) {
              const productoBuscado = celu.nombreCelular;
              menosCantPadre.style.display = "none";
              carroVacio();
            } else {
              updateCart(celu);
              guardarLS(celu);
            }
          }
          console.log(celu.nombreCelular, celu.cantidad);
        }
      })
      carroVacio();
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
    console.log(carritoLS);
  } 
  

let allProducts = [];


function agregarProductos() {
  document.querySelectorAll(".card-button").forEach((marcado) => {
    var contadorClicks = 0;
    marcado.addEventListener("click", function(){
      contadorClicks++;
        carritoVacio.innerText = "MIS PRODUCTOS";
        carritoVacio.classList.add("margin-topp");
        carritoVacio.id = "carrito-pedido";
        carrito.style.display = "flex";
        carritoComprar.style.display = "flex";
        tachito.style.display = "flex";
        productoAgregado.style.display = "flex";
        productoAgregado.classList.add("mostrar");
        productoAgregado.classList.remove("ocultar");
        setTimeout(function () {
          productoAgregado.classList.add("ocultar");
          productoAgregado.classList.remove("mostrar");
        }, 2000);
        setTimeout(function() {
          productoAgregado.style.display = "none";
        }, 2500);
      
      // traemos la data de las cards // 

        const productoElegido = marcado.parentElement;
        const infoProducto = {
          cantidad : contadorClicks,
          nombreCelular : productoElegido.querySelector("h3").textContent,
          imagenCelular : productoElegido.querySelector("img").src,
          precioCelular : productoElegido.querySelector("h4").textContent
        }
        
        const existeCard = allProducts.some(productoElegido => productoElegido.nombreCelular === infoProducto.nombreCelular);


        if (existeCard){
          const productos = allProducts.map(productoElegido => {
            if (productoElegido.nombreCelular === infoProducto.nombreCelular){
              productoElegido.cantidad++;
              guardarLS(infoProducto)
              updateCart(infoProducto)
              return productoElegido;
            } else {
              return productoElegido; 
            }
          });
        } else {
          allProducts = [...allProducts, infoProducto];
          guardarLS(infoProducto)
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

function updateCart2 (infoProducto) {
  htmlMostrar(infoProducto);
  return;
};

function updateCart (infoProducto) {
  mostrarHTML();
  return;
};

// sumar y restar productos desde el carrito

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
