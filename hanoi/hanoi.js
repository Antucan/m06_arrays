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
//actualizar pila1
function actualizarP1() {
    torre1.innerHTML = "";
    for (i = 0; i < pilas[0].length; i++) {
        torre1.innerHTML += "<div id='n" + pilas[0][i].value + "'>"
            + pilas[0][i] + "</div>";
    }
}

//buttons to move stacks
let t1b2 = document.getElementById("t1p2");
let t1b3 = document.getElementById("t1p3");
let t2b1 = document.getElementById("t2p1");
let t2b3 = document.getElementById("t2p3");
let t3b1 = document.getElementById("t3p1");
let t3b2 = document.getElementById("t3p2");
let resultat = document.getElementById("resultat");
t1b2.addEventListener("click", function () {
    let pieza = pilas[0].shift();
    pilas[1].push(pieza);
    actualizarP1();
    torre2.innerHTML = "";
    for (i = 0; i < pilas[1].length; i++) {
        torre2.innerHTML += "<div id='n" + pilas[1][i].value + "'>"
            + pilas[1][i] + "</div>";
    }
})



