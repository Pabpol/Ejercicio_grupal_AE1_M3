$(document).ready(function() {
  $('#TablaClientes').DataTable({
    scrollX: true
  });
});


$("#addcliente-form").submit(async function(form) {
  form.preventDefault();

  const Nombre = $("#nombreInput").val();
  const Direccion = $("#direccionInput").val();
  const Telefono = $("#telefonoInput").val();
  const Edad = $("#edadInput").val();

  $("#table_body").prepend(
    ` <tr>
          <td>${Nombre}</td>
          <td>${Direccion}</td>
          <td>${Telefono}</td>
          <td>${Edad}</td>
        </tr>`
  );
});

$(document).ready(function() {
  $('#TablaProductos').DataTable({
    scrollX: true
  });
});

$("#addproduct-form").submit(async function(form) {
  form.preventDefault();


  const nombre = $("#nombreProducto").val();
  const categoria = $("#categoriaProducto").val();
  const precio = $("#precioProducto").val();
  const cantidad = $("#cantidadProducto").val();

  $("#producto_table_body").prepend(
    ` <tr>
          <td>${nombre}</td>
          <td>${categoria}</td>
          <td>${precio}</td>
          <td>${cantidad}</td>
          <td class="contador"><button class="btn btn-sm btn-success" >+1</button> <button class="btn btn-sm btn-danger" >-1</button></td>
        </tr>`
  );
  document.querySelectorAll(".contador").forEach((e) => {
    e.firstChild.addEventListener('click', () => {
      let cont = +e.previousElementSibling.textContent;
      e.previousElementSibling.innerHTML = cont + 1;
      if (cont + 1 >= 20) {
        e.previousElementSibling.style.color = "green";
      } else if (cont + 1 >= 0) {
        e.previousElementSibling.style.color = "back";
      }
    })
    e.lastChild.addEventListener('click', () => {
      let cont = +e.previousElementSibling.textContent;
      e.previousElementSibling.innerHTML = cont - 1;
      if (cont - 1 < 0) {
        e.previousElementSibling.style.color = "red";
      } else if (cont - 1 >= 0 && cont - 1 < 20) {
        e.previousElementSibling.style.color = "balck";
      }
    })
  })
});

//Funcion recibe cliente
function cliente() {
  let nombre = prompt('Ingrese su nombre:');
  let apellido = prompt('Ingrese su apellido:');

  if (nombre === null || apellido === null) {
    document.getElementById('Nombre_cliente').innerHTML = 'Bienvenido/a';
  } else {
    document.getElementById('Nombre_cliente').innerHTML = 'Bienvenido/a ' + nombre + ' ' + apellido;
  }

}

//Funcion del contador

$("#aumenta").click(function() {
  let cont = +$('#contador').text();
  document.getElementById("contador").innerHTML = cont + 1;
  if (cont + 1 >= 20) {
    $('#contador').css('color', 'green');
  } else if (cont + 1 >= 0) {
    $('#contador').css('color', 'black');
  }
})
$("#disminuye").click(function() {
  let cont = +$('#contador').text();
  document.getElementById("contador").innerHTML = cont - 1;
  if (cont - 1 < 0) {
    $('#contador').css('color', 'red');
  } else if (cont - 1 >= 0 && cont - 1 < 20) {
    $('#contador').css('color', 'black');
  }

})

$("#aumenta2").click(function() {
  let cont = +$('#contador2').text();
  document.getElementById("contador2").innerHTML = cont + 1;
  if (cont + 1 >= 20) {
    $('#contador2').css('color', 'green');
  } else if (cont + 1 >= 0) {
    $('#contador2').css('color', 'black');
  }
})
$("#disminuye2").click(function() {
  let cont = +$('#contador2').text();
  document.getElementById("contador2").innerHTML = cont - 1;
  if (cont - 1 < 0) {
    $('#contador2').css('color', 'red');
  } else if (cont - 1 >= 0 && cont - 1 < 20) {
    $('#contador2').css('color', 'black');
  }

})
// Objetos de productos

function Producto(id, nombre, precio, img) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.img = img;
}

function clpFormat(val){
  return new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(val)
}

const producto1 = new Producto(1, "Reloj", 300000, "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
const producto2 = new Producto(2, "Audífonos", 100000, "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80");
const producto3 = new Producto(3, "Audífonos", 200000, "https://images.unsplash.com/photo-1606741965509-717b9fdd6549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
const producto4 = new Producto(4, "Silla", 400000, "https://img.freepik.com/psd-gratis/vista-frontal-maqueta-silla-juegos_1332-21844.jpg?w=740&t=st=1658366671~exp=1658367271~hmac=9ff01b06cf7d695c282efd19a22fe049899865dedf6e3558c2510b9cd3257eb6");

const productos = [producto1, producto2, producto3, producto4];
const listadoProductos = document.getElementById('listadoProductos');
productos.forEach(function(producto) {
  listadoProductos.innerHTML +=
    `<div class="col-sm-4 card d-flex align-items-stretch">
          <img class="card-img-top img-thumbnail mt-2 product-img" src="${producto.img}">
            
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${producto.nombre}</h5>
            
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
            <a href="#" class="btn btn-dark mt-auto align-self-start">Agregar</a>
          </div>
        </div>`
})