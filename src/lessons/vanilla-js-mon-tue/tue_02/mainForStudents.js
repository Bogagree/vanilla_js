const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
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
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

//Проверка:
// console.log(user===copyUser) // false
// console.log(user.friends===copyUser.friends) //  true


//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
// console.log(user===deepCopyUser) // -  false
// console.log(user.friends===deepCopyUser.friends) // - false

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
// console.log(students === copyStudents ) // -  false
// console.log(students[1] === copyStudents[1]) // - true
// console.log(students[2].isMarried === copyStudents[2].isMarried) // -  true
// console.log(students[3].scores === copyStudents[3].scores) // -  true

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map( s => ({...s}));

//Проверка:
// console.log(students === deepCopyStudents) // false
// console.log(students[1] === deepCopyStudents[1]) // false
// console.log(students[2].name === deepCopyStudents[2].name) // true


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents].sort((s1, s2) => s1.name.localeCompare(s2.name) );
// console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((s1,s2) => s2.scores - s1.scores);
// console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter( s => s.scores >= 100 );
// console.log(bestStudents)

//6a. Получите массив ("вырежьте") трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = bestStudents.slice(0, 3);
// console.log(topStudents)
// console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
let newDeepCopyStudentsConcat = topStudents.concat(deepCopyStudents);
// console.log(newDeepCopyStudents)
// console.log(newDeepCopyStudentsConcat)
// задумался на этом вопросе

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter( s => !s.isMarried );
// console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map( s => s.name);
// console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ');
// console.log(namesWithSpace)
let namesWithComma = studentsNames.join(', ');
// console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map( s =>  ({...s, isStudent: true}) );
// console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = deepCopyStudents.map( s => s.name === 'Nick' ? {...s, isMarried: true} : s);
// console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = deepCopyStudents.find( s => s.name === 'Ann');
// console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
// let bestStudent = deepCopyStudents.reduce( (acc, cur) =>  acc.scores > cur.scores ? acc : cur ); // правильное решение
let bestStudent = deepCopyStudents.reduce( (acc, cur) =>  acc.scores > cur.scores ? acc : {...cur} , {} );
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum = deepCopyStudents.reduce( (acc, student) => acc + student.scores , 0 );
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => students.map( stud =>  ({...stud, friends: students.filter( s => s.name !== stud.name)} ))

// students.map(student => ({...student, friends: students.map(st => st.name).filter(name => name !== student.name)}))


console.log(addFriends(students));