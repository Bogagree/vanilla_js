function foo(callback) {
    setTimeout(function () {
        callback('A');
    }, Math.random() * 2000);
}

function bar(callback) {
    setTimeout(function () {
        callback('B');
    }, Math.random() * 100);
}

function baz(callback) {
    setTimeout(function () {
        callback('C');
    }, Math.random() * 100);
}


const promiseMaker = (func) => {
    return new Promise((resolve) => {
        func(fn => resolve(fn))
    })
}

// promiseMaker(foo)
//     .then((func) => {
//         func(console.log)
//         return promiseMaker(bar)
//     })
//     .then((func) => {
//         func(console.log)
//         return promiseMaker(baz)
//     })
//     .then((func) => {
//         func(console.log)
//     }
// )

// const asyncFunctionYandexTask = async () => {
//     let func = await promiseMaker(foo)
//     func(console.log)
//
//     func = await promiseMaker(bar)
//     func(console.log)
//
//     func = await promiseMaker(baz)
//     func(console.log)
// }
//
// asyncFunctionYandexTask()

// let yandex = {
//     set(interval) {
//         return new Promise((resolve) => {
//             setTimeout(() => resolve(), interval)
//         })
//     },
// }

// yandex.set().then(() => foo(console.log))
// yandex.set(1000).then(() => bar(console.log))
// yandex.set(2000).then(() => baz(console.log))

// yandex.set()
//     .then(() => {
//         foo(console.log)
//         return yandex.set()
//     })
//     .then(()=> {
//         bar(console.log)
//         return yandex.set()
//     })
//     .then(()=> {
//         baz(console.log)
//     })

// let arr = [foo, bar, baz]
// arr.forEach((el) => promiseMaker(el).then(() => el(console.log)))


// типа крутое решение
function promiseMakerFromMasha(func) {
    return new Promise((resolve) => {
        func(arg => resolve(arg))
    })
}

// Promise.all([promiseMakerFromMasha(foo), promiseMakerFromMasha(bar), promiseMakerFromMasha(baz)])
Promise.all([promiseMaker(foo), promiseMaker(bar), promiseMaker(baz)])
    .then(value => {
        value.forEach((el) => console.log(el))
    });


// еще одно костыльное решение
// const sleep = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }
//
// async function abc() {
//     foo(console.log);
//     await sleep(1000)
//     bar(console.log);
//     await sleep(1000)
//     baz(console.log);
// }
//
// abc()