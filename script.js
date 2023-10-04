//** Nouveau carrousel */

let slideIndex = 1;
showSlides(slideIndex);

//*diapo suivant
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//*diapo actuel
function currentSlide(n) {
  showSlides((slideIndex = n));
}
//*affichage diapo
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("custom-slider");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//** ajout de setInterval pour faire défiler automatiquement les diapos toutes les secondes.

let isBurgerMenuOpen = false;
setInterval(() => {
  if (!isBurgerMenuOpen) {
    plusSlides(1);
  }
}, 2000);

/*MENU BURGER*/

function burgerToggle() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
  isBurgerMenuOpen = !isBurgerMenuOpen;
}

document.getElementById("btnOpen").addEventListener("click", burgerToggle);

//*remove
// const sideBurger = document.getElementById("menu");
// const slideContainer = document.querySelector(".slide-container");

// if (isBurgerMenuOpen == true) {
//   document.body.addEventListener("click", () => {
//     sideBurger.classList.remove("active");
//   });
// }


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