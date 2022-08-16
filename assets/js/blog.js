// Filtrar productos
function FiltroPost() {
  var entrada = document.getElementById('filtro').value.toLowerCase();
  var contenedor = document.getElementById('listadoPost');
  var posts = contenedor.getElementsByClassName('card');

  for (let i = 0; i < posts.length; i++) {
    var nombrePost = posts[i].querySelector('.card-body .card-title');

    if (nombrePost.innerText.toLowerCase().indexOf(entrada) > -1) {
      posts[i].parentElement.style.display = '';
    } else {
      posts[i].parentElement.style.display = 'none';
    }
  }
}

function sinNumeros() {
  let inputBox = document.getElementById("filtro");

  let invalidChars = "^[0-9]+$";

  inputBox.addEventListener("keydown", function(e) {
    if (e.key.match(invalidChars)) {
      e.preventDefault();
    }
  });
}

//consumir posts
const listadoPost = document.getElementById('listadoPost');
let posts = []
const getPostsData = async () => {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((postsApi) => {
      posts = postsApi;
      for (let i = 0; i < 20; i++) {
        listadoPost.innerHTML +=
          `<div class="col-md-4">
            <div id="${posts[i].id}" class="card post-card">
                          <img class="card-img-top"
                src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb"
                alt="Card image cap">
              <div class="card-body">
                <span class="badge-box"><i class="fa fa-check"></i></span>
                <h4 class="card-title">${posts[i].title}</h4>
                <p class="card-text">${posts[i].body}</p>
                <button onclick = "abrirModal(${posts[i].id}, ${posts[i].userId})" class="btn-post btn btn-default text-uppercase" data-bs-toggle="modal" data-bs-target="#modalPost" >Pincha aquí para más detalles</button>
              </div>
            </div>
          </div>`
      }
    });
  }
  catch (err) {
    console.log(err)
  }
};

getPostsData();

//Abrir el modal cuando se clickea un post

function abrirModal(id, userId) {
  let targetCard = posts.find(e => e.id == id && e.userId === userId)
  document.getElementById('modal-titulo').innerHTML = targetCard.title;
  document.getElementById('modal-detalle').innerHTML = targetCard.body;
}

//Promesa
function funcionPromesa() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Información enviada');
    }, 3000);
  });
}

async function funcionAsincronica() {
  const mensaje = await funcionPromesa();
  console.log(mensaje)
}

//Funcion para el loader que aparece antes de que carguen los posts
function cargado(fcnVisible) {
  //Se oculta el listado de posts
  document.querySelector('#listadoPost').style.display = 'none';
  //Se revisa cada 1 seg si se cargo hasta el post 20 o podria ser otra condicion. 
  var intervalId = window.setInterval(function() {
    if (document.getElementById('20') !== undefined) {
      window.clearInterval(intervalId);
      fcnVisible.call(this);
    }
  }, 1000);
}

cargado(function() {
  document.querySelector('#listadoPost').style.display = '';
  document.querySelector('.lds-roller').style.display = 'none';
})