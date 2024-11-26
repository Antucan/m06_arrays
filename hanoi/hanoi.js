//elementos de html
let torre1 = document.getElementById("torre1");
let torre2 = document.getElementById("torre2");
let torre3 = document.getElementById("torre3");

//elemntos de js
document.getElementById("start").addEventListener("click", function () {
    torre1.innerHTML = "";
    let numDiscs = document.getElementById("numDiscs");
    let pila1 = [];
    let num = 1;

    for (i = 0; i < numDiscs.value; i++) {
        pila1[i] = num;
        torre1.innerHTML += "<div>" + pila1[i] + "</div><br>";
        num++;
    }
});