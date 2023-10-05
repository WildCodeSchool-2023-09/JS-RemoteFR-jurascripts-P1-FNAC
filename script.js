//*CAROUSEL
let slideIndex = 1;

//*Image suivante
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//*Image actuelle
function currentSlide(n) {
  showSlides((slideIndex = n));
}

//*Affichage image
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
  for ( i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
showSlides(slideIndex);

//* Intervalle pour défilement auto
let isBurgerMenuOpen = false;
setInterval(() => {
  if (!isBurgerMenuOpen) {
    plusSlides(1);
  }
}, 3000);


//*MENU BURGER
function burgerToggle() {
  const menu = document.getElementById("menu");
  const btnOpen = document.getElementById("btnOpen");
  menu.classList.toggle("active");
  if (menu.classList[1]==="active") {
    btnOpen.innerHTML = "&#10005";
    btnOpen.style.fontSize = "1,1rem";
  }
  else {
    //btnOpen.innerHTML = "&#9776";
    btnOpen.innerHTML = "&#8942";
    btnOpen.style.fontSize = "2rem";
  }
  isBurgerMenuOpen = !isBurgerMenuOpen;
}

document.getElementById("btnOpen").addEventListener("click", burgerToggle);

//*remove
const sideBurger = document.getElementById("menu");
const slideContainer = document.querySelector(".slide-container");
if (isBurgerMenuOpen == true) {
  document.body.addEventListener("click", () => {
  sideBurger.classList.remove("active");
  });
}


//*BARRE DE RECHERCHE
function searchResto() {
  let searchBar = document.getElementById('searchBar');
  searchBar = searchBar.value.toLowerCase();
  const restaurants = document.querySelectorAll('.rest_container');
  const notFound = document.querySelector('.notFound');

  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    const titleResto = restaurant.querySelector('h2').textContent.toLowerCase();
    if (titleResto.includes(searchBar)) {
      notFound.style.visibility = 'hidden';
      restaurant.style.display = 'flex';
    } else {
      restaurant.style.display = 'none';
      notFound.style.display = 'block';
    }
  }
}

let searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', searchResto);

//*EASTER EGG - BENOÎT KEUR KEUR 
const easterEgg = document.getElementById("easterEgg");
let currentSrc = easterEgg.src;
let src1 = "./assets/img/plat_rougail.jpg";
let src2 = "./assets/img/img_tmnt.jpg";
let isDodo = true;

easterEgg.addEventListener("click", () => {
  if (isDodo) {
    easterEgg.src = src1;
    isDodo = false;
  } else {
    easterEgg.src = src2;
    isDodo = true;
  }
});