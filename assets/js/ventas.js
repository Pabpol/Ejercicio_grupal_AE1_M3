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
const producto1 = new Producto(1, "Telescopio Celestron PowerSeeker 80EQ", 125000, "https://www.telescopioschile.cl/wp-content/uploads/2020/07/Telescopio-Celestron-PowerSeeker-80EQ.jpg");
const producto2 = new Producto(2, "Reloj", 300000, "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
const producto3 = new Producto(3, "Audífonos", 100000, "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80");
const producto4 = new Producto(4, "AirPods", 200000, "https://images.unsplash.com/photo-1606741965509-717b9fdd6549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
const producto5 = new Producto(5, "Silla", 400000, "https://img.freepik.com/psd-gratis/vista-frontal-maqueta-silla-juegos_1332-21844.jpg?w=740&t=st=1658366671~exp=1658367271~hmac=9ff01b06cf7d695c282efd19a22fe049899865dedf6e3558c2510b9cd3257eb6");
const producto6 = new Producto(6, "Notebook", 450000, "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
const listadoProductos = document.getElementById('listadoProductos');

productos.forEach(function(producto) {
  listadoProductos.innerHTML +=
    `<div class="col-sm-4 card align-items-stretch">
          <img class="card-img-top img-thumbnail mt-2 product-img" src="${producto.img}">
            
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
    total = total + parseInt(subtotales[i].innerText);
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

    if (nombreProd.innerText.toLowerCase().indexOf(entrada) > -1 || skuProd.innerText.substr(-1).indexOf(entrada) > -1) {
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
ProductoCarrito.prototype.actualizarCantidad = function(nuevaCantidad) {
  this.cantidad = parseInt(this.cantidad) + parseInt(nuevaCantidad);
}
const productosCarrito = [];

function addCarrito(p) {
  if (productosCarrito.find(element => element.id === p.id)) {
    productosCarrito.find(element => element.id === p.id).actualizarCantidad(p.cantidad);
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
        <td class='subcantidad'>${productoCarrito.cantidad}</td>
        <td class='subtotal'>${parseInt(productoCarrito.cantidad) * parseInt(productoCarrito.precio.split("$")[1].replace(".", ""))}</td>
        <td><a class="btn btn-sm btn-danger eliminar-producto">Eliminar</a></td>
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
}