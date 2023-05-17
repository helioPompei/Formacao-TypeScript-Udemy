// 1 - Numbers
let x: number = 10;
let y: number = 3.1415;

console.log(x);
console.log(typeof x);

console.log(y.toPrecision(3));
console.log(typeof y);

// 2 - String
const firstName: string = "Hélio";
let lastName: string = "Pompei";
let fullName: string;

console.log(firstName.toUpperCase());

fullName = firstName + " " + lastName;

console.log(fullName);
console.log(typeof fullName);

// 3 - Boolean
let a: boolean = false;
console.log(a);
console.log(typeof a);

// 4 - Inference e annotation

let annotation: string = "Teste"; // Annotation
let inference = "teste"; // Inference

/*
 * Não se pode atribuir numero a Strings.
 * annotation = 1;
 * inference = 1;
 */

// 5 --- Desafio ---
let v1: number = 10;
let v2 = "";

v2 = v1.toString();
console.log(`O valor da variavel v2 é: ${v2}`);
console.log(typeof v2);
