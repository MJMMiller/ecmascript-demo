const botones = document.querySelectorAll(".pestanas button");
const paneles = document.querySelectorAll(".panel");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {

    botones.forEach(function (b) {
      b.classList.remove("activa");
    });
    paneles.forEach(function (p) {
      p.classList.remove("visible");
    });

    boton.classList.add("activa");
    document.getElementById(boton.dataset.panel).classList.add("visible");
  });
});