//ex1
let llista_numeros = new Array(5);
let listaDiv = document.getElementById("array1")
let resultats = document.getElementById("resultats");
function mostrar1() {
    forEach(valor => {
        listaDiv.innerHTML += "<div id=nums1>" + llista_numeros[valor] + "</div>";
    });
}
for (i = 0; i < llista_numeros.length; i++) {
    llista_numeros[i] = Math.floor(Math.random() * 10) + 1;
    mostrar1();
}

mostrar1();
//ex2
let llista_bidimensional = [[], []];
let listaDiv2 = document.getElementById("array2");
for (i = 0; i < 2; i++) {
    for (j = 0; j < 5; j++) {
        llista_bidimensional[i][j] = Math.floor(Math.random() * 10) + 1;
        listaDiv2.innerHTML += "<div id=nums2>" + llista_bidimensional[i][j] + "</div>";
    }
}
console.log(llista_bidimensional);
//ex3
document.getElementById("boton1").addEventListener("click", function () {
    resultats.innerHTML = llista_numeros[0] + " i " + llista_numeros[llista_numeros.length - 1] + "<br>";
    resultats.innerHTML += llista_bidimensional[0][0] + " i " + llista_bidimensional[0][4] + "<br>";
    resultats.innerHTML += llista_bidimensional[1][0] + " i " + llista_bidimensional[1][4];
});
//ex4
let listaDiv3 = document.getElementById("array1_1")
let listaDiv4 = document.getElementById("array2_2")
let listaDiv42 = document.getElementById("array2_2_1")
document.getElementById("boton2").addEventListener("click", function () {
    llista_numeros.pop();
    llista_numeros.forEach(valor => {
        listaDiv3.innerHTML += "<div id=nums2>" + valor + "</div>";
    });
    llista_bidimensional[0].pop();
    llista_bidimensional[1].pop();
    llista_bidimensional[0].forEach(valor => {
        listaDiv4.innerHTML += "<div id=nums2>" + valor + "</div>";
    });
    llista_bidimensional[1].forEach(valor => {
        listaDiv42.innerHTML += "<div id=nums2>" + valor + "</div>";
    });
});
