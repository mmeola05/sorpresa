onload = () => {
  document.body.classList.remove("container");

  // Ocultar el texto y mostrar el botón después de 5 segundos
  setTimeout(() => {
    let texto = document.querySelector(".felicidades-text");
    texto.style.animation = "fade-out 1s forwards";

    setTimeout(() => {
      texto.style.display = "none"; // Oculta el texto después de la animación
      document.querySelector(".volver-inicio").classList.add("show");
    }, 1000);
  }, 10000);
};

