// 1 - Typeof

type typeSum = number | string;

function sum(a: typeSum, b: typeSum) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossivel realizar a soma!");
  }
}

sum("4", "5");
sum(9, 5);
sum("3", 2);

// 2 - Checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "somar") {
      console.log(arr.reduce((prev, atual) => prev + atual));
    } else if (operation === "multiplicar") {
      console.log(arr.reduce((prev, atual) => prev * atual));
    }
  } else {
    console.log("Por favor, defina uma operação!");
  }
}

operations([1, 2, 3, 4, 5], "multiplicar");

// 3 - Instanceof

class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const jhon = new User("Jhon");
const jack = new SuperUser("Jack");

console.log(jhon);
console.log(jack);

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Ola super usuario ${user.name}`);
  } else if (user instanceof User) {
    console.log(`Ola usuario comum ${user.name}`);
  } else {
    console.log("Ola usuario generico!");
  }
}

userGreeting(jack);
userGreeting(jhon);

// 4 - Operador in
class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const dog1 = new Dog("Toto");
const dog2 = new Dog("Princesa", "chihuahua");

function showDogDetails(dog: Dog) {
  if ("breed" in dog) {
    console.log(`O cachorro é da raça ${dog.breed}`);
  } else {
    console.log("O cachorro não tem raça definida!");
  }
}

showDogDetails(dog1);
showDogDetails(dog2);
