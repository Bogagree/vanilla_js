console.log('promise1 practices')

let pr = new Promise((resolve, reject) => {
    // resolve();
    setTimeout(() => {
        resolve('timeout 3000ms')
    }, 3000)
})

let axios = {
    get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('axios 2000ms')
                // reject('error YoYoYo')
            }, 2000)
        })
    }
}

axios.get()
    .then(data => console.log(data))
    .catch(err => console.error(err))

const a = {
    sum(a, b) {
        console.log(a + b)
        return this
    }
}

a.sum(1, 2)
    .sum(3, 4)
    .sum(5, 6)





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