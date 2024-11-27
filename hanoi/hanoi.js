//elementos de html
let torre1 = document.getElementById("torre1");
let torre2 = document.getElementById("torre2");
let torre3 = document.getElementById("torre3");
let pilas = [[], [], []];
//elemntos de js
document.getElementById("start").addEventListener("click", function () {
    let numDiscs = document.getElementById("numDiscs");
    if (numDiscs.value == 0 || numDiscs.value == "" ||
        numDiscs.value < 3 || numDiscs.value > 5) {
        alert("Inserta un número entre 3 y 5");
    } else {
        torre1.innerHTML = "";
        pilas = [[], [], []];
        let num = 1;

        for (i = 0; i < numDiscs.value; i++) {
            pilas[0][i] = num;
            torre1.innerHTML += "<div id='n" + num + "'>"
                + pilas[0][i] + "</div>";
            num++;
        }
    }
});