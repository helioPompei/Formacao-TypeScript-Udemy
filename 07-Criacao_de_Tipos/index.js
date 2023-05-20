"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("texto"));
console.log(showData(true));
// 2 - Constraint em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
console.log(showProductName(myObj));
const myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "Branco",
};
const myPen = {
    name: "BIC",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no obj e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Hélio",
    age: 21,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));
// 6 - Typeof type operator
const userName = "Hélio";
const userName2 = "João";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão bacana",
};
function showKm(km) {
    console.log(`O veiculo tem a km de ${km}`);
}
showKm(newTruck["km"]);
const testing = "Some text";
