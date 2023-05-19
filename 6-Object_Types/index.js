"use strict";
// 1 Tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
}
const product1 = {
    name: "Camisa",
    price: 9.99,
    isAvailable: true,
};
showProductDetails(product1);
function showUserDetails(user) {
    if (user.email) {
        console.log(`O email é ${user.email}`);
    }
    console.log(`Usuario ${user.nome}`);
}
const user1 = { nome: "joao", senha: "senha" };
const user2 = { nome: "matheus", senha: "senha", email: "Mat@gmail.com" };
showUserDetails(user1);
showUserDetails(user2);
const car1 = { brand: "VW", wheels: 4 };
car1.brand = "BMW";
let coords = {
    x: 10,
    y: true,
};
coords.z = 54;
console.log(coords);
const matheus = { name: "Matheus", age: 30 };
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Voar", "Kamehameha"],
};
console.log(goku);
const arnold = {
    name: "Arnold",
    gun: "Shotgun",
    caliber: 12,
};
console.log(arnold);
// 7 - ReadOnly Array
let myArray = ["Maçã", "laranja", "banana"];
// myArray[3] = "Mamão";
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const user = ["Joao", 20];
console.log(user);
// 9 - Tuplas com ReadOnly
function showNumbers(numbers) {
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([99, 11]);
