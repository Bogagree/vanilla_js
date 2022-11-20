console.log('Error handler')

function findUsersInDB() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => json.map(user => ({
            name: user.name,
            address: user.address
        })));
}

const usersNameArr = []

const users = findUsersInDB()
    .then( data => {
        return data
    })

console.log('users: ', users)

users
    .then(users => {
        console.log('users: ', users)
        return users.map(user => usersNameArr.push(user.name))
    } )
    .catch(err => console.warn(err))

console.log('sync: ',usersNameArr)