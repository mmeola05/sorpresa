// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      dataArr = Object.keys(data);
      dataArr.map((customData,index) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(
              `[data-node-name*="${customData}"]`
            ).innerText = data[customData];
          }
        }

        // Check if the iteration is over
        // Run animation if so
        if (index === dataArr.length - 1)  {
          animationTimeline();
        }
      });
    });
};

// Animation Timeline
const animationTimeline = () => {
  const textBoxChars = document.querySelector(".hbd-chatbox");

  if (!textBoxChars) { 
    console.error("❌ Error: No se encontró `.hbd-chatbox` en el DOM."); 
    return; 
  }

  // ❌ Se ha deshabilitado la animación de los caracteres en .hbd-chatbox ❌
  /*
  if (!textBoxChars.querySelector("span")) {
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
  }
  */

  const ideaTextTrans = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
  const ideaTextTransLeave = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" };
  const tl = new TimelineMax();

  tl.to(".container", 0.1, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .from(".two", 0.4, { opacity: 0, y: 10 })
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".three-extra", 0.7, { opacity: 0, y: 10 })
    .to(".three-extra", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    // ❌ Aquí se ha comentado la animación de los caracteres en .hbd-chatbox ❌
    /*
    .staggerTo(".hbd-chatbox span", 0.5, {opacity: 1, visibility: "visible" }, 0.05)
    */
    .to(".fake-btn", 0.1, { backgroundColor: "#fc789d" })
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=1.5")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.8, { scale: 1.2, x: 10, backgroundColor: "#ff8db1", color: "#fff" })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=3.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-5", 0.7, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=0.5")
    .to(".idea-5 .smiley", 0.7, { rotation: 90, x: 8 }, "+=0.4")
    .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
    .from(".idea-6", 0.7, ideaTextTrans)
    .to(".idea-6", 0.7, ideaTextTransLeave, "+=2")
    .from(".idea-7", 0.7, ideaTextTrans)
    .to(".idea-7", 0.7, ideaTextTransLeave, "+=1.5")
    .staggerFrom(".idea-8 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
    .staggerTo(".idea-8 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1")
    .from(".idea-9", 0.7, ideaTextTrans)
    .to(".idea-9", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-10", 0.7, ideaTextTrans)
    .to(".idea-10", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-11", 0.7, ideaTextTrans)
    .to(".idea-11", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-12", 0.7, ideaTextTrans)
    .to(".idea-12", 0.7, ideaTextTransLeave, "+=1.5")
    .staggerFromTo(".baloons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)
    .call(() => { 
      window.location.href = "../../sorpresa/flowers/flower.html"; // Cambia "pagina-destino.html" por la URL de tu destino
    });
};

// Run fetch and animation in sequence
fetchData();
