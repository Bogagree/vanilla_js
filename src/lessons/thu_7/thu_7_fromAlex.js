//descriptors, iterators, objects to primitives

//Object.getOwnPropertyDescriptor
//Object.getOwnPropertyDescriptors
//Object.create
//Object.defineProperty
//Object.defineProperties
//Object.preventExtensions

// const user = {
// 	name: 'Alex',
// 	age: 23
// }

// console.log(
// 	Object.getOwnPropertyDescriptor(user, 'name')
// )

// console.log(
// 	Object.getOwnPropertyDescriptor(user, 'age')
// )

// console.log(
// 	Object.getOwnPropertyDescriptors(user)
// )

//

// const user = {
// 	name: 'Alex'
// }

// const user1 = Object.create(Object.prototype, {
// 	name: {
// 		value: 'Alex',
// 		writable: true,
// 		enumerable: true,
// 		configurable: true
// 	}
// })

// const user2 = {}

// Object.defineProperty(user2, 'name', {
// 	value: 'Alex',
// 	writable: true,
// 	enumerable: true,
// 	configurable: true
// })

// const user3 = {}

// Object.defineProperties(user3, {
// 	name: {
// 		value: "Alex",
// 		writable: true,
// 		enumerable: true,
// 		configurable: true
// 	}
// })



//=================== WRITABLE ====================
//Не дает переписать свойство оператором = (равно)
//'use strict'; // ->>> Try with this!
// const user = Object.create(Object.prototype, {
// 	name: {
// 		value: 'Alex',
// 		writable: false,
// 		enumerable: true,
// 		configurable: true
// 	}
// })

// user.name = 'Hanna'

// console.log(user)



//=================== ENUMERABLE ====================

//Не видно свойства в циклах (Object.keys, for in) и в консольке свойство тоже не увидим

//'use strict'; // ->>> Try with this!
// const user = Object.create(Object.prototype, {
// 	name: {
// 		value: 'Alex',
// 		writable: true,
// 		enumerable: false,
// 		configurable: true
// 	},
// 	age: {
// 		value: 23,
// 		writable: true,
// 		enumerable: true,
// 		configurable: true
// 	}
// })

// console.log(user)

// console.log(
// 	Object.keys(user)
// )

// for (let k in user) {
// 	console.log(k)
// }


//=================== CONFIGURABLE ====================



//'use strict'; // ->>> Try with this!

//1. Нельзя удалить свойство
// const user = Object.create(Object.prototype, {
// 	name: {
// 		value: 'Alex',
// 		writable: true,
// 		enumerable: true,
// 		configurable: false
// 	},
// })

// delete user.name

// console.log(user)

//2. Нельзя переопределить enumerable и configurable как с true -> false так и с false -> true
// const user = Object.create(Object.prototype, {
// 	name: {
// 		value: 'Alex',
// 		writable: true,
// 		enumerable: false,
// 		configurable: false
// 	},
// })

// Object.defineProperty(user, 'name', {
// 	value: 'Alex',
// 	writable: true,
// 	enumerable: true,
// 	configurable: false
// })

//3. Мы не можем поменять writable c false -> true
// const user = Object.create(Object.prototype, {
// 	name: {
// 		value: 'Alex',
// 		writable: false,
// 		enumerable: true,
// 		configurable: false
// 	},
// })

// Object.defineProperty(user, 'name', {
// 	value: 'Alex',
// 	writable: false,
// 	enumerable: true,
// 	configurable: false
// })

// console.log(user)

// ===================== OBject.preventExtenisions, Object.seal, Object.freeze

// const user = {
// 	name: 'Alex'
// }

// Object.preventExtensions(user)

// user.age = 23

// console.log(user)


// const user = {
// 	name: 'Alex'
// }

// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// Object.seal(user)

// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// user.age = 23

// delete user.name

// console.log(user)



// const user = {
// 	name: 'Alex'
// }

// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// Object.freeze(user)

// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// user.age = 23

// delete user.name

// user.name = 'Hanna'

// console.log(user)


// const user = Object.create(Object.prototype, {
// 	name: {
// 		value: 'Alex',
// 		writable: false,
// 		configurable: false,
// 		enumerable: true
// 	}
// })



// ============================ ITERATORS =============================


// class Range {
// 	#from;
// 	#to;

// 	constructor(range) {
// 		this.#from = range.from
// 		this.#to = range.to
// 	}


// 	[Symbol.iterator]() {

// 		return {
// 			from: this.#from,
// 			to: this.#to,

// 			next() {
// 				if (this.from <= this.to) {
// 					return {
// 						done: false,
// 						value: this.from++
// 					}
// 				} else {
// 					return {
// 						done: true,
// 						value: undefined
// 					}
// 				}
// 			}
// 		}
// 	}
// }


// const range = new Range({ from: 0, to: 10 })

// for (let n of range) {
// 	console.log(n)
// }



// =============== OBJECT TO PRIMITIVES ===============

//Hints = "string" | "number" < - > "default"


//1 Try to call Symbol.toPrimitive(hint)
//2 if hint string -> toString() -> valueOf()
//if hint number | default -> valueOf() -> toString()

// let hint = "string"

// if (user[Symbol.toPrimitive]) {

// 	user[Symbol.toPrimitive](hint)

// } else {

// 	if (hint === "string") {
// 		let value = user.toString()

// 		if (value.isPrimitive) return value

// 		return user.valueOf()
// 	}

// 	if(hint === 'number' | hint === 'default') {
// 		let value = user.valueOf()

// 		if (value.isPrimitive) return value

// 		return user.toString()
// 	}
// }
