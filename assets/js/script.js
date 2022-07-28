$(document).ready(function() {
  $('#TablaClientes').DataTable({
    scrollX: true,
    responsive: true
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
    scrollX: true,
    responsive: true
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