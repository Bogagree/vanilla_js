function foo(callback) {
    setTimeout(function () {
        callback('A');
    }, Math.random() * 5000);
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

let yandex = {
    set(interval) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), interval)
        })
    },
}

// yandex.set().then(() => foo(console.log))
// yandex.set(1000).then(() => bar(console.log))
// yandex.set(2000).then(() => baz(console.log))

// let arr = [foo, bar, baz]
//
// arr.forEach((el, index) => yandex.set(1000 * index).then(() => el(console.log)))


// типа крутое решение
function promiseMaker(func) {
    return new Promise((resolve) => {
        func(arg => resolve(arg))
    })
}
Promise.all([promiseMaker(foo), promiseMaker(bar), promiseMaker(baz)])
    .then(value => {
    value.forEach((el)=>console.log(el))
});