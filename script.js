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
    carouselPano.style.transition = "all 0,8s ease";
  };
  rightButton.onclick = function () {
    if (p < 0) p++;
    carouselPano.style.transform = "translate(" + p * 100 + "vw)";
    carouselPano.style.transition = "all 0,8s ease";
  };
};
