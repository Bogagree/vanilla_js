// const axios = require('axios').default;
// const axios = require('axios')

console.log('lesson js/ts-14')

const promise1 = fetch('https://jsonplaceholder.typicode.com/posts?userId=1')

// promise1.then( data => console.log(data))

// eslint-disable-next-line no-undef
const promise2 = axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')

promise1
    .then((response) => response.json())
    .then(data => console.log('promise1', data));

// promise1
//     .then(data => console.log('promise1.1', data))

promise2
    .then(data => console.log('promise2', data))

const resolvedPromise = Promise.resolve([{name: 'resolved Promise'}])
console.log(resolvedPromise)

const rejectedPromise = Promise.reject({message: 'Some error'})
console.log(rejectedPromise)

console.log('finish')


const p = new Promise((res, rej) => {
    setTimeout(() => {
        res('new P after 2sec')
    }, 2000)
})

p.then((data) => console.log(data))

const promiseChain = new Promise(res => {
    res( 'PromiseChain resolved' )
    return new Promise( res => res('return'))
})

promiseChain.then( data => console.log(data))