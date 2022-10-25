const deleteuser = (userId) => {

}

// class DeleteUserAction {
//     constructor(userId) {
//         this.type = 'DELETE-USER';
//         this.payload = {
//             userId: userId
//         }
//     }
// }
//
// const action1 = new DeleteUserAction(111)
// const action2 = new DeleteUserAction(222)
//
// console.log(action1)
// console.log(action2)

// создание объекта через фабрику, где в литерал объекта засовываются свойсва, но методы общие.
// function commonHello() {
//     console.log(`I am ${this.name} from ${this.site}`)
// }
//
// const userFabric = (name) => {
//     const user = {
//         name: name,
//         site: 'it-incubator.by',
//         dateOfBirth: new Date(1985,9,29),
//         hello: commonHello
//     }
//     return user
// }
//
// const u1 = userFabric('Dimych B')
// const u2 = userFabric('Natasha')
//
// u1.hello()
// u2.hello()

// создание через прототипы
// function User(name,site,dob) {
//     this.name = name
//     this.site = site
//     this.dateOfBirth = dob
// }
//
// User.prototype.hello = function ( ) {
//     console.log(`I am ${this.name} from ${this.site}`)
// }
//
// const u1 = new User('Dimych B', 'it-incubator.by', new Date(1985,9,29))
// const u2 = new User('Natasha', 'it-incubator.by', new Date(1979,12,2))


// создание объектов через class
class User {
    constructor(name, site, dob) {
        this.name = name
        this.site = site
        this.dateOfBirth = dob
        this.counter = 0
    }

    hello() {
        debugger
        this.counter++
        console.log(`I am ${this.name} from ${this.site}`)
    }

}

const u1 = new User('Dimych B!!!', 'it-incubator.by', new Date(1985, 9, 29))
const u2 = new User('Natasha!!', 'it-incubator.by', new Date(1979, 12, 2))

// console.log(u1)
// console.log(u2)

u1.hello()
u2.hello()

console.log(u1.hello === u2.hello)
console.log(u1.hello === User.prototype.hello)