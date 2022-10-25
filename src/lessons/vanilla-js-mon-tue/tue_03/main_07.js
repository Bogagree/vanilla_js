//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
const repeatString = (str, n, separ) => {
    let result = ''
    for (let i = 1; i <= n; i++) {
        result += str
        (i === n) ? result : result += separ
    }
    return result
}

// const repeatString1 = (str, n, separ) => new Array(n).fill(str).join(separ)
const repeatString2 = (str, n, separ) => {
    if (n <= 0) {
        return ''
    } else {
        return (str + separ).repeat(n - 1) + str
    }
}

console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))
console.log(repeatString2("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром строку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
const checkStart = (str, el) => str.slice(0, el.length).toLowerCase() === el

console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, n) => str.slice(0, n) + "..."

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром строку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (str) => str
    ? str.split(' ').reduce((a, b) => b.length < a.length ? b : a)
    : null


console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))

//5. Реализуйте функцию, которая принимает параметром строку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) => str.toLowerCase()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')


console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

//6. Реализуйте функцию, которая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// every()

const isIncludes = (str, el) => {
    let arrStr = str.toLowerCase().split('')
    return el.toLowerCase().split('').every(el => arrStr.indexOf(el) > -1)
}

console.log(isIncludes("Incubator", "Cut")) // true
console.log(isIncludes("Incubator", "table")) // false