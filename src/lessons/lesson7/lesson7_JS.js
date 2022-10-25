class Animal {
    constructor(animalName) {
        this.name = animalName;
    }

    walk = () => {
        console.log(`${this.name} walking`)
    }

    eat() {
        console.log(`${this.name} eating`)
    }

    sleep() {
        console.log(`${this.name} sleeping`)
    }
}

const monkey = new Animal('Masha');

// console.log(monkey.eat())
// console.log(monkey.walk())
// console.log(monkey.sleep())

const personN = {
    name: "Natasha",
    age: 42,
    greet: function () {
        console.log('Hello')
    }
}

const personD = new Object({
    name: "Dima",
    age: 36,
    greet: function () {
        console.log('Hello')
    }
})

Object.prototype.sayHello = function () {
    console.log('say Hellow')
}

const Lena = Object.create(personD)

Lena.name = "Elena"

const str = new String("i'm string")
