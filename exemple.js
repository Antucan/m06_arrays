let llistaCompra = new Array(10);//el atribut lenght valgui 10
llistaCompra[0] = "Pepsi";
llistaCompra[3] = "Pikachu";
llistaCompra[1] = 666;
llistaCompra[15] = "Nachos";
console.log(llistaCompra);
console.log(llistaCompra[1]);
console.log(llistaCompra.length);
llistaCompra.length = 2;
console.log(llistaCompra);
llistaCompra[2] = new Array(2, 5, "Juanito");
console.log(llistaCompra);

//altre tipus d'arra
let llistaUsuaris = ["kike", "sofi"];
llistaUsuaris[20] = "toni";
console.log(llistaUsuaris);
for (k = 0; k < llistaUsuaris; k++) {
    console.log(k + "-" + llistaUsuaris[k]);
}
llistaUsuaris.forEach(function (usuari, pos) {
    console.log(pos + "-" + usuari);
});

//splice()altera un array añadiendo o borrando alabaus
let llistaSplice = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(llistaSplice);
//accedes a la pos, borras y pones a kike
llistaSplice.splice(0, 0, "abalau");
console.log(llistaSplice);

//function
function addAlabauArray(array) {
    array.push("kike");
    console.log("Array Push Kike", array);
}
addAlabauArray(llistaSplice);
console.log("LlistaSplice: ", llistaSplice);