//ex1
let llista_numeros = new Array(5);
let listaDiv = document.getElementById("array1")
let resultats = document.getElementById("resultats");

for (i = 0; i < llista_numeros.length; i++) {
    llista_numeros[i] = Math.floor(Math.random() * 10) + 1;
    listaDiv.innerHTML += "<div id=nums1>" + llista_numeros[i] + "</div>";
    //ex3
    resultats.innerHTML = llista_numeros[0] + " i " + llista_numeros[4];
}
//ex2
let llista_bidimensional = new Array(10);
let listaDiv2 = document.getElementById("array2");
for (i = 0; i < llista_bidimensional.length; i++) {
    llista_bidimensional[i] = Math.floor(Math.random() * 10) + 1;
    listaDiv2.innerHTML += "<div id=nums2>" + llista_bidimensional[i] + "</div>";
}
