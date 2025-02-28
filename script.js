(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "3/2/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }

    const countDown = new Date(birthday).getTime(),
          x = setInterval(function () {    

        const now = new Date().getTime(),
              distance = countDown - now;

        updateCounter("days", Math.floor(distance / (day)));
        updateCounter("hours", Math.floor((distance % (day)) / (hour)));
        updateCounter("minutes", Math.floor((distance % (hour)) / (minute)));
        updateCounter("seconds", Math.floor((distance % (minute)) / second));

        if (distance < 0) {
            document.getElementById("headline").innerText = "¡SORPRESA!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            document.getElementById("redirectButton").style.display = "block";

            clearInterval(x);
        }
    }, 1000);

    function updateCounter(id, newValue) {
        let element = document.getElementById(id);
        if (element.innerText != newValue) {
            element.classList.add("changed");
            setTimeout(() => {
                element.innerText = newValue;
                element.classList.remove("changed");
            }, 300);
        }
    }
})();
