$(document).ready(function() {
  $('#TablaProductos').DataTable({
    scrollX: true,
    info: false
  });
});

// Objetos de productos

function Producto(id, nombre, precio, img) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.img = img;
}

function clpFormat(val) {
  return new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(val)
}
const producto1 = new Producto(1, "Telescopio PowerSeeker", 125000, "https://www.telescopioschile.cl/wp-content/uploads/2020/07/Telescopio-Celestron-PowerSeeker-80EQ.jpg");
const producto2 = new Producto(2, "Reloj", 300000, "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
const producto3 = new Producto(3, "Audífonos", 100000, "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80");
const producto4 = new Producto(4, "Notebook HP", 490990, "https://images.unsplash.com/photo-1583223667854-e0e05b1ad4f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHAlMjBub3RlYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
const producto5 = new Producto(5, "Tablet Samsung Galaxy Tab A", 90990, "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?ixlib=rb-.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftc3VuZyUyMHRhYmxldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
const producto6 = new Producto(6, "Placa Madre", 79990, "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80", "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80");
const producto7 = new Producto(7, "AirPods", 200000, "https://images.unsplash.com/photo-1606741965509-717b9fdd6549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
const producto8 = new Producto(8, "Silla", 400000, "https://img.freepik.com/psd-gratis/vista-frontal-maqueta-silla-juegos_1332-21844.jpg?w=740&t=st=1658366671~exp=1658367271~hmac=9ff01b06cf7d695c282efd19a22fe049899865dedf6e3558c2510b9cd3257eb6");
const producto9 = new Producto(9, "Notebook", 450000, "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
const producto10 = new Producto(10, "Robot", 990000, "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
const producto11 = new Producto(11, "Consola PS5 + Control", 890000, "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
const producto12 = new Producto(12, "Mouse inalambrico", 45000, "https://images.unsplash.com/photo-1618247130379-980b9fe0df04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80");
const producto13 = new Producto(13, "Mouse Logi", 34000, "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-gaming-mouse/plasma-hero-carbon-gallery-3.png?v=1");
const producto14 = new Producto(14, "Dron inalambrico", 26000, "https://img.blogs.es/anexom/wp-content/uploads/2021/12/XKJ-2020-1024x792.jpg");
const producto15 = new Producto(15, "Cámara web", 45000, "https://m.media-amazon.com/images/I/61zV05d6bQL._AC_SL1423_.jpg");

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15];
const listadoProductos = document.getElementById('listadoProductos');

productos.forEach(function(producto) {
  listadoProductos.innerHTML +=
    `<div class="col-sm-4 card align-items-stretch" id="producto_${producto.id}">
          <div id="contadorVendido_${producto.id}" class="numberCircle contadores" data-effect="mfp-3d-unfold"></div>
          <img id="img_prod_${producto.id}"  class="card-img-top img-thumbnail mt-2 product-img" src="${producto.img}">
            
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${producto.nombre}</h5> <span><p>SKU: ${producto.id}</p></span>
            
            <h5 class="card-footer mt-auto"> ${clpFormat(producto.precio)}</h5>
            
            <div class="form-floating">
              <select class="form-select" id="sel1" name="sellist">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option> 
                <option>7</option>
              </select>
              <label for="sel1" class="form-label">Cantidad:</label>
            </div>
            <br>
            <a class="agregar-carrito btn btn-danger mt-auto align-self-start">Agregar</a>
           
          </div>
        </div>`
})
// Total Carrito
function totalCarrito() {
  var subtotales = document.getElementsByClassName('subtotal');
  var total = 0;
  for (let i = 0; i < subtotales.length; i++) {
    total = total + parseInt(subtotales[i].innerText.split("$")[1].replaceAll(".", ""));
  }
  var formatter = new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' });
  if (total == 0) {
    var totalCarro = '-';
  } else {
    var totalCarro = formatter.format(total);
  }
  document.getElementById('TotalCarro').innerHTML = totalCarro;
}



// Filtrar productos
function FiltroProductos() {
  var entrada = document.getElementById('filtro').value.toLowerCase();
  var contenedor = document.getElementById('listadoProductos');
  var productos = contenedor.getElementsByClassName('card');

  for (let i = 0; i < productos.length; i++) {
    var nombreProd = productos[i].querySelector('.card-body h5.card-title');
    var skuProd = productos[i].querySelector('.card-body span p');

    if (nombreProd.innerText.toLowerCase().indexOf(entrada) > -1 || skuProd.innerText.substr(-2).indexOf(entrada) > -1) {
      productos[i].style.display = '';
    } else {
      productos[i].style.display = 'none';
    }
  }
}

// Objetos de productosCarrito

function ProductoCarrito(id, nombre, precio, cantidad) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
}
ProductoCarrito.prototype.aumentarCantidad = function(nuevaCantidad) {
  this.cantidad = parseInt(this.cantidad) + parseInt(nuevaCantidad);
}

ProductoCarrito.prototype.actualizarCantidad = function(nuevaCantidad) {
  this.cantidad = parseInt(nuevaCantidad);
}
const productosCarrito = [];

function addCarrito(p) {
  if (productosCarrito.find(element => element.id === p.id)) {
    productosCarrito.find(element => element.id === p.id).aumentarCantidad(p.cantidad);
  } else {
    productosCarrito.push(p);
  }
}

document.querySelectorAll(".agregar-carrito").forEach((e) => {
  e.addEventListener('click', () => {
    let cant = e.parentNode.children[3].children[0].value;
    let nombre = e.parentNode.children[0].textContent;
    let precio = e.parentNode.children[2].textContent;
    let id = e.parentNode.children[1].textContent.split("SKU: ")[1];
    const prodCarrito = new ProductoCarrito(id, nombre, precio, cant);
    addCarrito(prodCarrito);
    actualizarContador(productosCarrito.length);

    //Agregar el contador de productos dentro de la card
    document.getElementById(`contadorVendido_${id}`).innerHTML = productosCarrito.find(element => element.id === id).cantidad;
  })
})


//Poblar el carrito
function poblarCarrito() {
  //Destruir tabla
  $('#TablaProductos').DataTable().clear().destroy();

  //Poblar tabla
  const bodyTabla = document.getElementById('body-tabla');
  productosCarrito.forEach(function(productoCarrito) {
    bodyTabla.innerHTML +=
      `<tr id="${productoCarrito.id}">
        <td>${productoCarrito.nombre}</td>
        <td>${productoCarrito.precio}</td>
        <td class='subcantidad'>
              <select class="form-select selCarrito" id="selCarrito_${productoCarrito.id}" onchange="cambiarCantidadCarrito(${productoCarrito.id})" name="sellist">
                <option class"option-carrito">${productoCarrito.cantidad}</option>
                <option class"option-carrito">1</option>
                <option class"option-carrito">2</option>
                <option class"option-carrito">3</option>
                <option class"option-carrito">4</option>
                <option class"option-carrito">5</option>
                <option class"option-carrito">6</option> 
                <option class"option-carrito">7</option>
              </select>
        </td>
        <td class='subtotal'>${clpFormat(parseInt(productoCarrito.cantidad) * parseInt(productoCarrito.precio.split("$")[1].replace(".", "")))}</td>
        <td><a class="btn btn-sm btn-danger eliminar-producto">X</a></td>
      </tr>`
  });
  //Reinicializacion tabla
  $('#TablaProductos').DataTable({
    scrollX: true,
    paging: false,
    info: false,
    responsive: true
  });

  totalCarrito();
}

document.getElementById('carrito').addEventListener('click', () => {
  const bodyTabla = document.getElementById('body-tabla');
  bodyTabla.innerHTML = "";
  poblarCarrito();
  eliminarProducto();

});

//Actualizar contador carrito
function actualizarContador(valor) {
  const contador = document.getElementById('contadorProductor')
  contador.innerHTML = `${valor}`
}

//Eliminar producto
function eliminarProducto() {
  document.querySelectorAll(".eliminar-producto").forEach((e) => {
    e.addEventListener('click', () => {
      productosCarrito.splice(productosCarrito.indexOf((producto) => (producto.id === e.parentElement.parentElement.id)), 1)
      e.parentElement.parentElement.remove()
      actualizarContador(productosCarrito.length)
      totalCarrito();

      //Eliminar contador de fuera en la card del prod al eliminar producto
      document.getElementById(`contadorVendido_${e.parentElement.parentElement.id}`).innerHTML = "";

    })
  })
}

//Vaciar carrito
function vaciarCarrito() {
  document.querySelectorAll("tbody>tr").forEach((e) => {
    e.remove();
    productosCarrito.shift();
    actualizarContador(productosCarrito.length)

  })
  totalCarrito();

  //Eliminar contador de fuera en la card del prod al vaciar producto  
  let conts = document.getElementsByClassName(`contadores`);
  for (let i=0;i<conts.length;i++){
    conts[i].innerHTML = "";
  }
}

function cambiarCantidadCarrito(id){
  const select = document.getElementById(`selCarrito_${id}`);
  const nuevaCantidad = select.value
  const producto = productosCarrito.find(element => element.id == id)
  const precioProducto = parseInt(producto.precio.split("$")[1].replace(".", ""));
  producto.actualizarCantidad(nuevaCantidad)
  select.parentNode.nextElementSibling.innerText = `${clpFormat(precioProducto*nuevaCantidad)}`; 
  totalCarrito();

   //Eliminar contador de fuera en la card del prod al eliminar producto
   document.getElementById(`contadorVendido_${id}`).innerHTML = producto.cantidad;
}

$(document).ready(function(){
  var nCards = $(".card").length;
  var limitePorPagina = 6;
  var totalPaginas = Math.ceil(nCards / limitePorPagina);
  var actualPagina;
  
  function mostrarPagina(pagina){
    if(pagina < 1 || pagina > totalPaginas) return false;
  
    actualPagina = pagina;

    $(".previous-page").toggleClass("disabled", actualPagina === 1);
    $(".next-page").toggleClass("disabled", actualPagina === totalPaginas);

    $(".card").hide().slice((actualPagina - 1) * limitePorPagina, actualPagina * limitePorPagina).show();
    return true;
  }

  //Primera pagina
  $(".card-content").show();
  mostrarPagina(1);
  
  //Al clickear en algun numero de navegación
  $(document).on("click", "li.page-item:not(.active)", function(){    
    return mostrarPagina(+$(this).text());
  });
  
  //Al clickear en siguiente del nav
  $(".next-page").on("click", function(){
      return mostrarPagina(actualPagina + 1);
  });
  
  //Al clickear en anterior del nav
  $(".previous-page").on("click", function(){
    return mostrarPagina(actualPagina - 1);
  });
})

//Animación al clickear agregar producto
$('.agregar-carrito').on('click', function (){
  let cart = $('.fa-cart-shopping');
  // Imagen asociado al producto
  let imgtodrag = $(this).parent('.card-body').parent('.card').find("img").eq(0);
  if (imgtodrag) {
    // Duplicar imagen
    var imgclone = imgtodrag.clone().offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
    }).css({
      'opacity': '0.8',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'z-index': '100'
    }).appendTo($('body')).animate({
      'top': cart.offset().top + 20,
      'left': cart.offset().left + 30,
      'width': 75,
      'height': 75
    }, 1000, 'easeInOutExpo');
    imgclone.animate({
      'width': 0,
      'height': 0
    }, function(){
      $(this).detach()
    });
  }
});