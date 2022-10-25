const names = ["Artur", "Bob", "Vlad", "Alex", "Donald"]

console.log(names.sort())

const numbers = [100, 99, 65, 2, 1000]

// return > 0 -> будет перестановка
// return <= 0 -> не будет перестановки

const compareFn = (a, b) => {
    if (a > b) {
        return 10
    } else {
        return -10
    }
}

console.log(numbers.sort((a, b) => a - b))


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

const students1 = [...students]
console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students1.sort((a, b) => b.scores - a.scores).reverse())

console.log([...students].sort((a, b) => a.name.localeCompare(b.name)))
// сортировка по алфавиту

const nums = [13, 45, 67, 12, 99, 87]

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {

        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]  // современный синтаксис
        }
    }
    if (isSorted) break
}

console.log(nums)