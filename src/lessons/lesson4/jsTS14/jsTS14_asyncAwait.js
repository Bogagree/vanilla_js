console.log('jsTS14_asyncAwait')

const api = {
   async save() {

    },
    // read() {
    //     // return new Promise( res => res({name: 'api object'}))
    //     return Promise.resolve({name: 'api object'})
    // }
    async read() {
        // return new Promise( res => res({name: 'api object'}))
        return {name: 'api object'}
    }
}

async function run() {
    await api.save()
    console.log('saved')
    let data = await api.read()
    console.log('read: ', data)
}

run()