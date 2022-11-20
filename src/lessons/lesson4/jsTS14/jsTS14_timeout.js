// setTimeout(() => {
//     console.log('-----------------------------')
//     console.log('JS/TS 14 timeout')
// }, 3000)


function wait(ms) {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, ms)
    })
}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run()