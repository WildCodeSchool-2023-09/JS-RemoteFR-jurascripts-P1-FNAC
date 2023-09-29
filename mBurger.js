let side_burger = document.getElementById("menu");
let btnOpen = document.getElementById("btnOpen");
let btnClose = document.getElementById("btnClose");

btnOpen.onclick = openNav;
btnClose.onclick = closeNav;

/* permet de ramener la largeur de la navbar latérale à 250px.*/
function openNav() {
  side_burger.classList.add("active");
}

/* permet de ramener la largeur de la navigation latérale à 0. */
function closeNav() {
  side_burger.classList.remove("active");
}
