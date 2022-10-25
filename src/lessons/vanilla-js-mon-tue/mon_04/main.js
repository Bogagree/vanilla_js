const todoListID_1 = "qwer"
const todoListID_2 = "qwer"


const todoList = [
    {
        id: todoListID_1,
        title: "What to do?",
        filter: "all",
        tasks: [
            {id: 12, title: "JS", isDone: false},
            {id: 13, title: "CSS", isDone: false},
            {id: 14, title: "React", isDone: false},
        ]
    },
    {
        id: todoListID_2,
        title: "What to buy?",
        filter: "all",
        tasks: [
            {id: 21, title: "Bread", isDone: false},
            {id: 22, title: "Cheese", isDone: false},
            {id: 27, title: "Milk", isDone: false},
        ]

    }
]
// ассоциативный массив пара ключ значение.
// в квадратных скобках адрес (square brackets notation)
// https://learn.javascript.ru/object#kvadratnye-skobki
const tasks = {
    [todoList[0].id]: [
        {id: 12, title: "JS", isDone: false},
        {id: 13, title: "CSS", isDone: false},
        {id: 14, title: "React", isDone: false},
    ],
    [todoList[1].id]: [
        {id: 21, title: "Bread", isDone: false},
        {id: 22, title: "Cheese", isDone: false},
        {id: 27, title: "Milk", isDone: false},
    ]
}


console.log(tasks[todoList[0].id][0].title)

// метод reduce может заменить все методы массива, кроме sort

const nums = [10, 30, 20] // sum -?
console.log(nums.reduce((acc, el) => {
    acc = acc + el
    return acc
}, 0))

// sum короткая запись
console.log(nums.reduce((acc, el) => acc + el, 0))

console.log(nums.reduce((acc, el) => {
    if (acc > el) {
        return acc
    } else {
        return el
    }
}))

// найти максимальный элемент короткая запись
console.log(nums.reduce((acc, el) => acc > el ? acc : el))


let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];


console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

console.log(students.reduce((acc, el) => acc + el.scores, 0))

const st = {
    1: {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    }
}

// создать новую структуру данных
console.log(students.reduce((acc, el)=> {
    acc[el.id] = {...el} // "1": {...el}
    delete acc[el.id].id
    return acc
}, {}))
