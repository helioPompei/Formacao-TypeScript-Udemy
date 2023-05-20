"use strict";
// 1 - Typeof
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossivel realizar a soma!");
    }
}
sum("4", "5");
sum(9, 5);
sum("3", 2);
// 2 - Checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "somar") {
            console.log(arr.reduce((prev, atual) => prev + atual));
        }
        else if (operation === "multiplicar") {
            console.log(arr.reduce((prev, atual) => prev * atual));
        }
    }
    else {
        console.log("Por favor, defina uma operação!");
    }
}
operations([1, 2, 3, 4, 5], "multiplicar");
// 3 - Instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const jack = new SuperUser("Jack");
console.log(jhon);
console.log(jack);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Ola super usuario ${user.name}`);
    }
    else if (user instanceof User) {
        console.log(`Ola usuario comum ${user.name}`);
    }
    else {
        console.log("Ola usuario generico!");
    }
}
userGreeting(jack);
userGreeting(jhon);
// 4 - Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const dog1 = new Dog("Toto");
const dog2 = new Dog("Princesa", "chihuahua");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro não tem raça definida!");
    }
}
showDogDetails(dog1);
showDogDetails(dog2);
const showReviews = (review) => {
    if (typeof review === "number") {
        switch (review) {
            case 1:
                console.log("Nota baixa");
                break;
            case 2:
                console.log("Nota media baixa");
                break;
            case 3:
                console.log("Nota media");
                break;
            case 4:
                console.log("Nota media alta");
                break;
            case 5:
                console.log("Nota alta");
                break;
            default:
                console.log("informe um numero maior que 1 e menor que 5!");
        }
    }
    else if (typeof review === "boolean") {
        if (review == false) {
            console.log("Você não avaliou!");
        }
        else {
            console.log("O valor 'true' não é aceito!");
            return;
        }
    }
};
showReviews(false);
