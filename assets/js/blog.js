//Favoritos
let favoritos = [];
// Filtrar productos
function BuscarPost() {
  let entradaSelect = document.getElementById("filtro_select").value.toLowerCase();
  let entrada = document.getElementById("filtro").value.toLowerCase();
  let contenedor = document.getElementById("listadoPost");
  let posts;
  if (entradaSelect === "favoritos") {
    posts = contenedor.getElementsByClassName("favorito");
    for (let i = 0; i < posts.length; i++) {
      var nombrePost = posts[i].querySelector(".card-body .card-title");

      if (nombrePost.innerText.toLowerCase().indexOf(entrada) > -1) {
        posts[i].parentElement.style.display = "";
      } else {
        posts[i].parentElement.style.display = "none";
      }
    }
  } else {
    posts = contenedor.getElementsByClassName("card");
    for (let i = 0; i < posts.length; i++) {
      var nombrePost = posts[i].querySelector(".card-body .card-title");

      if (nombrePost.innerText.toLowerCase().indexOf(entrada) > -1) {
        posts[i].parentElement.style.display = "";
      } else {
        posts[i].parentElement.style.display = "none";
      }
    }
  }
}

function FiltroPost() {
  let entrada = document.getElementById("filtro_select").value.toLowerCase();
  let contenedor = document.getElementById("listadoPost");
  let posts = contenedor.getElementsByClassName("card");

  if (entrada === "favoritos") {
    for (let i = 0; i < posts.length; i++) {
      let idPost = posts[i].id;

      if (favoritos.find((e) => e.id == idPost)) {
        posts[i].parentElement.style.display = "";
      } else {
        posts[i].parentElement.style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < posts.length; i++) {
      posts[i].parentElement.style.display = "";
    }
  }
}

function sinNumeros() {
  let inputBox = document.getElementById("filtro");

  let invalidChars = "^[0-9]+$";

  inputBox.addEventListener("keydown", function (e) {
    if (e.key.match(invalidChars)) {
      e.preventDefault();
    }
  });
}

//consumir posts
const listadoPost = document.getElementById("listadoPost");
let posts = [];
const getPostsData = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((postsApi) => {
        posts = postsApi;
        for (let i = 0; i < 20; i++) {
          listadoPost.innerHTML += `<div class="col-md-4">
            <div id="${posts[i].id}" class="card post-card">
              <img class="card-img-top"img src="https://picsum.photos/id/${1049 + i}/3844/2563"alt="Card image cap">
              <div class="card-body">
                <span class="badge-box"><i class="far fa-star"></i></span>              
                <h4 class="card-title">${posts[i].title}</h4>
                <p class="card-text">${posts[i].body}</p>
                <button onclick = "abrirModal(${posts[i].id}, ${posts[i].userId})" class="btn-post btn btn-default text-uppercase" data-bs-toggle="modal" data-bs-target="#modalPost" >Pincha aquí para más detalles</button>
              </div>
            </div>
          </div>`;
        }
        // Inicio Cambia de color el favorito
        $(".fa-star").click(function () {
          $(this).toggleClass("background-star");
          const id = this.parentElement.parentElement.parentElement.id;
          if (favoritos.find((e) => e.id == id)) {
            favoritos.splice(favoritos.indexOf((item) => item.id === id));
            $(this.parentElement.parentElement.parentElement).removeClass("favorito");
          } else {
            let postFavorito = posts.find((e) => e.id == id);
            $(this.parentElement.parentElement.parentElement).addClass("favorito");
            favoritos.push(postFavorito);
          }
        });
        // Fin Cambia de color el favorito
      });
  } catch (err) {
    console.log(err);
  }
};

getPostsData();

//Abrir el modal cuando se clickea un post

function abrirModal(id, userId) {
  let targetCard = posts.find((e) => e.id == id && e.userId === userId);
  document.getElementById("modal-titulo").innerHTML = targetCard.title;
  document.getElementById("modal-detalle").innerHTML = targetCard.body;
}

//Promesa
function funcionPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Información enviada");
    }, 3000);
  });
}

async function funcionAsincronica() {
  const mensaje = await funcionPromesa();
  console.log(mensaje);
}

//Funcion para el loader que aparece antes de que carguen los posts
function cargado(fcnVisible) {
  //Se oculta el listado de posts
  document.querySelector("#listadoPost").style.display = "none";
  //Se revisa cada 1 seg si se cargo hasta el post 20 o podria ser otra condicion.
  var intervalId = window.setInterval(function () {
    if (document.getElementById("20") !== undefined) {
      window.clearInterval(intervalId);
      fcnVisible.call(this);
    }
  }, 1000);
}

cargado(function () {
  document.querySelector("#listadoPost").style.display = "";
  document.querySelector(".lds-roller").style.display = "none";
});


//Paginacion de los post
$(document).ready( async function (){
  while(!document.querySelector(".card")) {
    await new Promise(wait => setTimeout(wait, 500));
  }
  
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

