// Filtrar productos
function FiltroPost() {
  var entrada = document.getElementById('filtro').value.toLowerCase();
  var contenedor = document.getElementById('listadoPost');
  var posts = contenedor.getElementsByClassName('card');

  for (let i = 0; i < posts.length; i++) {
    var nombrePost = posts[i].querySelector('.card-body .card-title');

    if (nombrePost.innerText.toLowerCase().indexOf(entrada) > -1) {
      posts[i].style.display = '';
    } else {
      posts[i].style.display = 'none';
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

//post
var posts = [{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
  "userId": 1,
  "id": 3,
  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
  "userId": 1,
  "id": 4,
  "title": "eum et est occaecati",
  "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
},
{
  "userId": 1,
  "id": 5,
  "title": "nesciunt quas odio",
  "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
}];

const listadoPost = document.getElementById('listadoPost');

posts.forEach(function(post) {
  listadoPost.innerHTML +=
    `<div class="col-md-4">
            <div id="${post.id}" class="card post-card">
              <!--               <img class="card-img-top"
                src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb"
                alt="Card image cap"> -->
              <div class="card-body">
                <!--<span class="badge-box"><i class="fa fa-check"></i></span> -->
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.body}</p>
                <button class="btn-post btn btn-default text-uppercase" data-bs-toggle="modal" data-bs-target="#modalPost">Pincha aqui para mas post</button>
              </div>
            </div>
          </div>`
});

//Abrir el modal cuando se clickea un post
$('.btn-post').on('click', e => {
  //Obtener id de la card clickeada 
  let cardId = e.currentTarget.parentElement.parentElement.id;
  //Obtener objeto de la Api con misma id que card clickeada
  let targetCard = posts.find(e => e.id == cardId)

  document.getElementById('modal-titulo').innerHTML = targetCard.title;
  document.getElementById('modal-detalle').innerHTML = targetCard.body;

})