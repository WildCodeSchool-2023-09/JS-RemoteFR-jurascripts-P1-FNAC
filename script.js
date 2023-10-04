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

//**MENU BURGER*/

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
