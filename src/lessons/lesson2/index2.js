function superSum(n) {
    if (n === 0) return 0

    return function curried(...args) {
        console.log(args)

        if (args.length >= n) {
            return args.slice(0, n).reduce((a, b) => a + b, 0)
        } else {
            return function (...newArgs) {
                return curried.apply(this, args.concat(newArgs))
            }
        }
    }
}

console.log(
    superSum((3, 4))(2)(3)(4)(5)) //10
// console.log(superSum(3)(3)(4)(3)(1)) // не работает потому что вызвал больше n раз.
console.log(superSum(4)(2, 3)(4)(1)) //10

// console.log(superSum(3)(3)(4)(3)) //10
// console.log(superSum(3)(2,3)(5))  //10
// console.log(superSum(3)(2)(5, 3, 5)) //10
// console.log(superSum(3)(2, 5, 3))  //10
// console.log(superSum(3)(2, 5)(3, 9)) //10


// код для объяснения, что такое замыкание на собеседовании
function makeCount() {
    let counter = 0
    return () => {
        console.log(counter++)
    }
}

const counter = makeCount()
const counter2 = makeCount()

counter() //0
counter() //1

counter2() //0
counter2() //1

let c = 0

function makeCount2() {

    return () => {
        console.log(c++)
    }
}

const counter3 = makeCount2()
const counter4 = makeCount2()

counter3() //0
counter3() //1

counter4() //2
counter4() //3


// еще один пример про лексическое окружение
let userName = 'Alex'

function sayHi() {
    console.log("Hi " + userName)
}

sayHi() // Alex

userName = 'Masha'

sayHi() // Masha


// пример сallback
function sayHi2() {
    const userName2 = 'Ivan'
    return () => {
        console.log(userName2)
    }
}

let userName2 = 'Tanya'

const cb = sayHi2()

cb() // Ivan

// рекурсия
function pow(x, n) {
    if (n === 0) return 1
    if (n === 1) return x
    return x * pow(x, n - 1)
}

console.log('pow result = ', pow(3, 3))
console.log('pow result = ', pow(3, 0))


// рекурсивно найти сумму
function sumTo(n) {
    if (n === 1) return 1;
    return n + sumTo(n - 1);
}

console.log('рекурсивная сумма от n до 0', (sumTo(3)));

// сумма элементов от 0 до n с шагом a

function recSum(n, a) {
    let arr = []
    for (let i = 0; i <= n; i = i + a) {
        arr.push(i)
    }
    console.log(arr)

    function sum(arr, res) {
        res = res || 0
        if (arr.length) {
            return sum(arr, res + arr.pop())
        } else {
            return res
        }
    }

    return sum(arr, 0)
}

console.log('recSum result = ', recSum(3, 0.5))


