//ex1
let llista_numeros = new Array(5);
let listaDiv = document.getElementById("array1")
let resultats = document.getElementById("resultats");
function mostrar1() {
    listaDiv.innerHTML = "";//limpiar el div
    llista_numeros.forEach(valor => {
        listaDiv.innerHTML += "<div id=nums1>" + valor + "</div>";
    });
}
for (i = 0; i < llista_numeros.length; i++) {
    llista_numeros[i] = Math.floor(Math.random() * 10) + 1;
    mostrar1();
}
//ex2
let llista_bidimensional = [[], []];
let listaDiv2 = document.getElementById("array2");
function mostrar2() {
    listaDiv2.innerHTML = "";
    llista_bidimensional.forEach(fila => {
        fila.forEach(valor => {
            listaDiv2.innerHTML += "<div id=nums2>" + valor + "</div>";
        });
    });
}
for (i = 0; i < 2; i++) {
    for (j = 0; j < 5; j++) {
        llista_bidimensional[i][j] = Math.floor(Math.random() * 10) + 1;
        listaDiv2.innerHTML += "<div id=nums2>" + llista_bidimensional[i][j] + "</div>";
    }
}
//ex3
document.getElementById("boton1").addEventListener("click", function () {
    resultats.innerHTML = llista_numeros[0] + " i " + llista_numeros[llista_numeros.length - 1] + "<br>";
    resultats.innerHTML += llista_bidimensional[0][0] + " i " + llista_bidimensional[0][4] + "<br>";
    resultats.innerHTML += llista_bidimensional[1][0] + " i " + llista_bidimensional[1][4];
});
//ex4
document.getElementById("boton2").addEventListener("click", function () {
    llista_numeros.pop();
    mostrar1();
    llista_bidimensional[0].pop();
    llista_bidimensional[1].pop();
    mostrar2();
});
//ex5
document.getElementById("boton3").addEventListener("click", function () {
    let num = Math.floor(Math.random() * 10) + 1;
    llista_numeros.push(num);
    mostrar1();
    llista_bidimensional[0].push(num);
    llista_bidimensional[1].push(num);
    mostrar2();
});