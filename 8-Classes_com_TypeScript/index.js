"use strict";
// 1 - Campos em classe
class User {
}
const user1 = new User();
user1.name = "Matheus";
console.log(user1);
// 2 - Constructor em classe
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person("joao", 22);
console.log(person1);
// 3 - Readonly em Classes
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const car1 = new Car("Fusca");
console.log(car1);
// 4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const machine1 = new Machine("Trator");
const killerMachine = new KillerMachine("Destroyer", 10);
console.log(machine1, killerMachine);
// 5 - Metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
jimmy.greeting();
// 6 - This
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}`);
    }
}
const truck1 = new Truck("BMW", 200);
truck1.showDetails();
// 7 - Getters
class Persona {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullname() {
        return `${this.name} ${this.surname}`;
    }
}
const persona1 = new Persona("Helio", "Pompei");
console.log(persona1.getFullname());
// 8 - Setters
class Coords {
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
const coord = new Coords();
coord.setX(10);
coord.setY(20);
console.log(coord);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é ${this.title}`;
    }
}
const myPost = new BlogPost("Hello World!");
console.log(myPost.itemTitle());
// 10 - Override de métodos
class base {
    someMethod() {
        console.log("Base coisa!");
    }
}
class Nova extends base {
    someMethod() {
        console.log("Nova coisa!");
    }
}
const nova = new Nova();
nova.someMethod();
// 11 - Public
class PublicVisibility {
    constructor(name) {
        this.name = name;
    }
}
// 12 - Protected
class E {
    constructor() {
        this.name = "João";
    }
}
class F extends E {
    getName() {
        console.log("name: " + this.name);
    }
}
const fInstance = new F();
fInstance.getName();
// 13 - Private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    getName() {
        return `Name: ${this.name}`;
    }
}
const privado = new PrivateClass();
console.log(privado.getName());
// 14 - Static members
class StaticMembers {
    static greeting1() {
        console.log("Ola meu amigo! - 1");
    }
    static greeting2() {
        console.log("Ola meu Companheiro! - 2");
    }
}
StaticMembers.prop = "Teste Static";
console.log(StaticMembers.prop);
StaticMembers.greeting1();
StaticMembers.greeting2();
// 15 - Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const newItem = new Item("Opa", 20);
console.log(newItem);
// 16 - Parameter propeties
class ParameterPropeties {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
}
const newProduct = new ParameterPropeties("Camisa", 20);
// 17 - Class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Pessoinha");
// 18 - Classe abstrata
class Funcionario {
}
class Terrestre extends Funcionario {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log("Mostra o nome e tals");
    }
}
