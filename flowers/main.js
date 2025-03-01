window.onload = () => {
    document.body.classList.remove("container");
    // Mostrar el mensaje "Felices!!! 19"
    setTimeout(() => {
        document.querySelector(".felicidades-text").style.display = "block";
    }, 500);

    // Desaparecer "Felices!!! 19" después de 5 segundos
    setTimeout(() => {
        let texto = document.querySelector(".felicidades-text");
        texto.style.animation = "fade-out 1s forwards";

        setTimeout(() => {
            texto.style.display = "none"; // Oculta el texto después de la animación
            // Mostrar el mensaje secundario
            document.querySelector(".mensaje-secundario").style.display = "block";
        }, 1000);
    }, 10000);

    // Desaparecer el mensaje secundario después de 5 segundos y mostrar el botón
    setTimeout(() => {
        let textoSecundario = document.querySelector(".mensaje-secundario");
        textoSecundario.style.animation = "fade-out 1s forwards";

        setTimeout(() => {
            textoSecundario.style.display = "none"; // Ocultar el mensaje secundario
            // Mostrar el botón con animación
            let boton = document.querySelector(".volver-inicio");
            boton.style.display = "block";
            boton.style.opacity = "1";
            boton.style.visibility = "visible";
        }, 1000);
    }, 20000);
};