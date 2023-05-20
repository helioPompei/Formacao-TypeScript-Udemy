"use strict";
// 1 - Função Void
const semRetorno = () => {
    console.log("Não vou retornar nada!");
    // return 10;
};
semRetorno();
// 2 - Callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, name) {
    console.log("Preparando a função!");
    const greet = f(name);
    console.log(greet);
}
preGreeting(greeting, "Joao");
// 3 - Generic function
function firstElement(arr) {
    return arr[0];
}
const numeros = [1, 2, 3];
const letras = ["a", "b", "c"];
console.log(firstElement(numeros));
console.log(firstElement(letras));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Helio" }, { job: "programer" });
console.log(newObject);
// 4 - Constraints + Generic function
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(2, 5));
console.log(biggestNumber("7", "5"));
// console.log(biggestNumber("9", 3));
// 5 - Especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ["teste", "testado"]));
// 6 - Argumentos opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    else {
        return `Olá ${name}!`;
    }
}
console.log(modernGreeting("Pedro"));
console.log(modernGreeting("João", "senhor"));
// 7 - Parâmetro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(12, 12));
// 8 - Unkown
function doSomething(x) {
    console.log(x);
    // console.log(x[0]); - erro
}
doSomething(1);
// 9 - Never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Errou!");
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
// 11 - Destructuring
function destructedPerson({ name, age, }) {
    return `O nome da pessoa é ${name} e ela tem ${age} anos!`;
}
const person = { name: "joão", age: 10, job: "Dev" };
console.log(destructedPerson(person));
