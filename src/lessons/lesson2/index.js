function superSum(n) {
    if (n === 0) return 0

    return function curried(...args) {
        console.log(args)

        if (args.length >= n) {
            return args.slice(0, n).reduce((a, b) => a + b, 0)
        } else {
            return function (...newArgs) {
                return curried.apply(this, args.concat(newArgs))
            }
        }
    }
}

console.log(
    superSum((3))(2)(3)(4)(5)) //10
// console.log(superSum(3)(3)(4)(3)(1)) // не работает потому что вызвал больше n раз.
console.log(superSum(4)(2, 3)(4)(1)) //10

// console.log(superSum(3)(3)(4)(3)) //10
// console.log(superSum(3)(2,3)(5))  //10
// console.log(superSum(3)(2)(5, 3, 5)) //10
// console.log(superSum(3)(2, 5, 3))  //10
// console.log(superSum(3)(2, 5)(3, 9)) //10