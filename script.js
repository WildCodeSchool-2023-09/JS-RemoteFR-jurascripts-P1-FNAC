/*CARROUSEL*/
document.body.onload = function () {
  nbrImg = 6;
  p = 0;
  carouselPano = document.getElementById("carouselPano");
  leftButton = document.getElementById("g");
  rightButton = document.getElementById("d");

  carouselPano.style.width = 100 * nbrImg + "vw";
  for (i = 1; i <= nbrImg; i++) {
    divCar = document.createElement("div");
    divCar.className = "photo";
    divCar.style.backgroundImage = "url('assets/img/carousel" + i + ".jpg')";
    carouselPano.appendChild(divCar);
  }

  leftButton.onclick = function () {
    if (p > -nbrImg + 1) p--;
    carouselPano.style.transform = "translate(" + p * 100 + "vw)";
    carouselPano.style.transition = "all 0.8s ease";
  };
  rightButton.onclick = function () {
    if (p < 0) p++;
    carouselPano.style.transform = "translate(" + p * 100 + "vw)";
    carouselPano.style.transition = "all 0.8s ease";
  };
};

/*MENU BURGER*/
let side_burger = document.getElementById("menu");
let btnOpen = document.getElementById("btnOpen");
let btnClose = document.getElementById("btnClose");


function openNav() {
  side_burger.classList.add("active");
  side_burger.style.position = "fixed";
}

function closeNav() {
  side_burger.classList.remove("active");
  side_burger.style.position = "absolute";
}

btnOpen.onclick = openNav;
btnClose.onclick = closeNav;

/*BARRE DE RECHERCHE*/
function searchResto() {
  const searchBar = document.getElementById('searchBar');
  const lowerCase = searchBar.value.toLowerCase();
  const restaurants = document.querySelectorAll('.rest_container');

  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    const titleResto = restaurant.querySelector('h2').textContent.toLowerCase();
    if (titleResto.includes(lowerCase)) {
      restaurant.style.display = 'block';
    } else {
      restaurant.style.display = 'none';
    }
  }
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', searchResto);

/*AFFICHER AUCUN RESULTAT*/
function noResult () {
  const resultNo = element.innerHTML;
  if (searchResto != '') {
    return searchResto;
  } else {
    return "Aucun résultat"
  }
}

/*FILTRES DE RECHERCHE*/
/*PRIX*/
function isfilterPrice() {
  const filterPrice = document.getElementById('filterPrice').value;
  const restaurants = document.querySelectorAll('.rest_container');

  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    const price = restaurant.querySelector(.price).value;
    if (price === 5&15) {
      restaurant.style.display = 'block';
    } if (price === 15&30) {
        restaurant.style.display = 'block';
    } if (price === 30&50) {
          restaurant.style.display = 'block';
    } if (price === 'infinite') {
            restaurant.style.display = 'block';
    } else {
      restaurant.style.display = 'none';
    }
  }
}
const filterPrice = document.getElementById('filterPrice');
filterPrice.addEventListener('change', searchResto);

/*CATEGORIES*/
function isfilterType() {
  const filterType = document.getElementById('filterType').value;
  const restaurants = document.querySelectorAll('.rest_container');

  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    const type = restaurant.querySelector('/*CATEGORIES*/').value;
    if (type === 'vege') {
      restaurant.style.display = 'block';
    } if (type === 'gastro') {
      restaurant.style.display = 'block';
    } if (type === 'street') {
      restaurant.style.display = 'block';
    } if (type === 'monde') {
      restaurant.style.display = 'block';
    } else {
      restaurant.style.display = 'none';
    }
  }
}
const filterType = document.getElementById('filterType');
filterPrice.addEventListener('change', searchResto);