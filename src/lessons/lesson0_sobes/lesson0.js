console.log('lesson 1')

// напиши промис
const p = new Promise((res, rej) => {
    setTimeout(() => {
        res()
    }, 2000)
})

// напиши цепочку промисов
p.then(() => {
})
    .then()
    .catch()
    .finally()


// замыкание
const a = 2;

const foo = () => {
    return a
}

foo()

// как доказать что this в глобальном scope это глобальный объект

const obj1 = {
    name: "Dima",
    getName: () => this.name
}

console.log(obj1.getName())
console.log('this', this)

//методы работы с функцией call/apply/bind


// function foo11 () {
//     const name = "Dima"
//     return this.name
// }

const obj11 = {
    name: 'Dima',
    getName() {
        return this.name
    }
}
const obj22 = {
    name: 'Natasha'
}

console.log('---------------')

const bar = obj11.getName.apply(obj22)

console.log('bar ->', bar)
console.log('obj11.getName ->', obj11.getName())
console.log('obj11.getName.apply(obj22) ->', obj11.getName.apply(obj22))


// как this работает в конструкторе
function Car(name) {
    this.name = name
}

const volvo = new Car('volvo')

// цепочка прототипов
const prot1 = {
    name: "Dima"
}

const prot2 = {
    age: 37
}

Object.setPrototypeOf(prot1, prot2)

console.log('---------------')
console.log(prot1.age)


// два класса чтобы один наследовался от другого
class NewClassA {
    // static name = 'Dima' - это имя будет только у этого класса NewClassA
    name = 'Dima' // свойство Name будет у всех экземпляров класса NewClassA
}

class NewClassB extends NewClassA {

    getName(){}

}

// написать то что выше на функциях конструкторах
function A () {
}

function B () {
}

A.name = 'aaa'

B.__proto__ = A
B.prototype.__proto__ = A.prototype

B.prototype.getName = function() {
    return 5
}




// From 12 - super-mentor IT-incubator to Everyone 08:34 PM
//
// setTimeout(function () {
//     console.log(1)
// }, 30);
//
//
// setTimeout(function () {
//     console.log(2)
// }, 10);
//
//
// new Promise(function (resolve) {
//     console.log(3);
//     resolve();
//     console.log(4);
// }).then(function () {
//     console.log(5);
// });
//
//
// async function test1() {
//     console.log(6);
//     await test2()
//     console.log(9)
// }
//
//
// async function test2() {
//     console.log(8);
// }
//
// test1();
