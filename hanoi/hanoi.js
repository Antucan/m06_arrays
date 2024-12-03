//bloqueamos el juego
document.getElementById("game").style.pointerEvents = "none";
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
        document.getElementById("game").style.pointerEvents = "auto";
        torre1.innerHTML = "";
        pilas = [[], [], []];
        torre1.innerHTML = "";
        torre2.innerHTML = "";
        torre3.innerHTML = "";
        let num = 1;
        for (i = 0; i < numDiscs.value; i++) {
            pilas[0][i] = num;
            torre1.innerHTML += "<div id='n" + num + "'>"
                + pilas[0][i] + "</div>";
            num++;
        }
    }
});
//actualizar pilas
function actualizarP1() {
    torre1.innerHTML = "";
    for (i = 0; i < pilas[0].length; i++) {
        torre1.innerHTML += "<div id='n" + pilas[0][i] + "'>"
            + pilas[0][i] + "</div>";
    }
}
function actualizarP2() {
    torre2.innerHTML = "";
    for (i = 0; i < pilas[1].length; i++) {
        torre2.innerHTML += "<div id='n" + pilas[1][i] + "'>"
            + pilas[1][i] + "</div>";
    }
}
function actualizarP3() {
    torre3.innerHTML = "";
    for (i = 0; i < pilas[2].length; i++) {
        torre3.innerHTML += "<div id='n" + pilas[2][i] + "'>"
            + pilas[2][i] + "</div>";
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
//BOTONES PILA 1
t1b2.addEventListener("click", function () {
    resultat.innerHTML = "";
    if (pilas[0][0] > pilas[1][0] || pilas[0].length === 0) {
        resultat.innerHTML = "IL·LEGAL O NO HI HA RES";
    } else {
        let pieza = pilas[0].shift();
        pilas[1].unshift(pieza);
        actualizarP1();
        ganado();
        torre2.innerHTML = "";
        for (i = 0; i < pilas[1].length; i++) {
            torre2.innerHTML += "<div id='n" + pilas[1][i] + "'>"
                + pilas[1][i] + "</div>";
        }
    }
})
t1b3.addEventListener("click", function () {
    resultat.innerHTML = "";
    if (pilas[0][0] > pilas[2][0] || pilas[0].length === 0) {
        resultat.innerHTML = "IL·LEGAL O NO HI HA RES";
    } else {
        let pieza = pilas[0].shift();
        pilas[2].unshift(pieza);
        actualizarP1();
        ganado();
        torre3.innerHTML = "";
        for (i = 0; i < pilas[2].length; i++) {
            torre3.innerHTML += "<div id='n" + pilas[2][i] + "'>"
                + pilas[2][i] + "</div>";
        }
    }
})
//BOTONES PILA 2
t2b1.addEventListener("click", function () {
    resultat.innerHTML = "";
    if (pilas[1][0] > pilas[0][0] || pilas[1].length === 0) {
        resultat.innerHTML = "IL·LEGAL O NO HI HA RES";
    } else {
        let pieza = pilas[1].shift();
        pilas[0].unshift(pieza);
        actualizarP2();
        ganado();
        torre1.innerHTML = "";
        for (i = 0; i < pilas[0].length; i++) {
            torre1.innerHTML += "<div id='n" + pilas[0][i] + "'>"
                + pilas[0][i] + "</div>";
        }
    }
})
t2b3.addEventListener("click", function () {
    resultat.innerHTML = "";
    if (pilas[1][0] > pilas[2][0] || pilas[1].length === 0) {
        resultat.innerHTML = "IL·LEGAL O NO HI HA RES";
    } else {
        let pieza = pilas[1].shift();
        pilas[2].unshift(pieza);
        actualizarP2();
        ganado();
        torre3.innerHTML = "";
        for (i = 0; i < pilas[2].length; i++) {
            torre3.innerHTML += "<div id='n" + pilas[2][i] + "'>"
                + pilas[2][i] + "</div>";
        }
    }
})
//BOTONES PILA 3
t3b1.addEventListener("click", function () {
    resultat.innerHTML = "";
    if (pilas[2][0] > pilas[0][0] || pilas[2].length === 0) {
        resultat.innerHTML = "IL·LEGAL O NO HI HA RES";
    } else {
        let pieza = pilas[2].shift();
        pilas[0].unshift(pieza);
        actualizarP3();
        ganado();
        torre1.innerHTML = "";
        for (i = 0; i < pilas[0].length; i++) {
            torre1.innerHTML += "<div id='n" + pilas[0][i] + "'>"
                + pilas[0][i] + "</div>";
        }
    }
})
t3b2.addEventListener("click", function () {
    resultat.innerHTML = "";
    if (pilas[2][0] > pilas[1][0] || pilas[2].length === 0) {
        resultat.innerHTML = "IL·LEGAL O NO HI HA RES";
    } else {
        let pieza = pilas[2].shift();
        pilas[1].unshift(pieza);
        actualizarP3();
        ganado();
        torre2.innerHTML = "";
        for (i = 0; i < pilas[1].length; i++) {
            torre2.innerHTML += "<div id='n" + pilas[1][i] + "'>"
                + pilas[1][i] + "</div>";
        }
    }
})

//ganado
function ganado() {
    if (pilas[2].length === parseInt(numDiscs.value)) {
        resultat.innerHTML = "HAS GUANYAT!";
        document.getElementById("game").style.pointerEvents = "none";
    }
}
