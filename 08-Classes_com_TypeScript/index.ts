// 1 - Campos em classe
class User {
  name!: string;
  age!: number;
}

const user1 = new User();
user1.name = "Matheus";

console.log(user1);

// 2 - Constructor em classe
class Person {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("joao", 22);
console.log(person1);

// 3 - Readonly em Classes
class Car {
  name;
  readonly wheels = 4;
  constructor(name: string) {
    this.name = name;
  }
}

const car1 = new Car("Fusca");
console.log(car1);

// 4 - Herança e super
class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

class KillerMachine extends Machine {
  guns;
  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const machine1 = new Machine("Trator");
const killerMachine = new KillerMachine("Destroyer", 10);
console.log(machine1, killerMachine);

// 5 - Metodos
class Dwarf {
  name;
  constructor(name: string) {
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
  model;
  hp;
  constructor(model: string, hp: number) {
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
  private name;
  private surname;
  constructor(name: string, surname: string) {
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
  x!: number;
  y!: number;

  setX(x: number) {
    this.x = x;
  }
  setY(y: number) {
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

// 9 - Herança de interfaces
interface showTitle {
  itemTitle(): string;
}

class BlogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
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
  public name;
  constructor(name: string) {
    this.name = name;
  }
}

// 12 - Protected
class E {
  protected name: string = "João";
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
  private name: string = "Private";

  getName(): string {
    return `Name: ${this.name}`;
  }
}

const privado = new PrivateClass();

console.log(privado.getName());

// 14 - Static members
class StaticMembers {
  static prop = "Teste Static";

  static greeting1(): void {
    console.log("Ola meu amigo! - 1");
  }

  static greeting2(): void {
    console.log("Ola meu Companheiro! - 2");
  }
}

console.log(StaticMembers.prop);
StaticMembers.greeting1();
StaticMembers.greeting2();

// 15 - Generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}

const newItem = new Item("Opa", 20);
console.log(newItem);

// 16 - Parameter propeties

class ParameterPropeties {
  constructor(public name: String, private price: number) {
    this.name = name;
    this.price = price;
  }
}

const newProduct = new ParameterPropeties("Camisa", 20);

// 17 - Class expressions
const myClass = class<T> {
  name;
  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Pessoinha");

// 18 - Classe abstrata
abstract class Funcionario {
  abstract name: string;
  abstract showName(): void;
}

class Terrestre extends Funcionario {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }

  showName(): void {
    console.log("Mostra o nome e tals");
  }
}
