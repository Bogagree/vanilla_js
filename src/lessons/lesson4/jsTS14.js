// const axios = require('axios').default;
// const axios = require('axios')

console.log('lesson js/ts-14')

//задача на логику
//
// const trickyX = {
//     count: 0,
//     toString() {
//         return this.count++
//     }
// }
//
// const test = (x) => `${x}` !== `${x}` // должно вернуть true
// console.log(test(trickyX))

// const promise1 = fetch('https://jsonplaceholder.typicode.com/posts')

// promise1.then( data => console.log(data))

// eslint-disable-next-line no-undef
// const promise2 = axios.get('https://jsonplaceholder.typicode.com/posts')
//
// promise1
//     .then((response) => response.json())
//     .then(data => console.log('promise1', data));
//
// // promise1
// //     .then(data => console.log('promise1.1', data))
//
// promise2
//     .then(data => console.log('promise2', data))
//
// const resolvedPromise = Promise.resolve([{name: 'resolved Promise'}])
// console.log(resolvedPromise)
//
// const rejectedPromise = Promise.reject({message: 'Some error'})
// console.log(rejectedPromise)
//
// console.log('finish')


// const p = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('new P after 2sec')
//     }, 2000)
// })
//
// p.then((data) => console.log(data))
//
// const promiseChain = new Promise(res => {
//     res('PromiseChain resolved')
//     return new Promise(res => res('return'))
// })
//
// promiseChain.then(data => console.log(data))
//
// const promise1810 = new Promise((res, rej) => {
//     res('I can do promise')
// })
//
// promise1810.then(logData => {
//     console.log(logData)
// })
//
// function delay(ms) {
//     // return new Promise((res) => (
//     //     setTimeout(() => res(`promise resolved after ${ms / 1000} секунд`), ms)
//     // ))
//     return new Promise(resolve => setTimeout(resolve, ms));
//
// }
//
// // delay(3000).then((data) => console.log('выполнилось через 3 секунды',data));
// delay(3000).then(() => console.log('выполнилось через 3 секунды'));
//
// delay(3500).then(() => console.log('============================'));


async function getNumber() {
    // const promise =  Promise.resolve(Math.random())
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(Math.random())
                console.log('1111111111111')
            }, 2000
        )
    })
    return promise
}


// getNumber().then(n => console.log(n)).catch(err => console.log(err))

const newItems = []


const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (e) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
                resolve()
            } catch (e) {
                reject(e)
            }
        })
        return promise
    }
}

getNumber().then(n => {
    console.log(n)
})

const result = repo.save(({name: 'repo save method'}))

if (result) {
    console.log('SAVED')
} else {
    console.warn('NOT SAVED')
}

// repo.saveAsync({name: 'async data'})
//     .then(() => { console.log('Saved async') })
//     .catch( error => console.log( 'NOT SAVED' + error ))

const runAsync = async () => {
await repo.saveAsync({name: 'async data'})
    console.log('Saved async')
}


console.log('============================')