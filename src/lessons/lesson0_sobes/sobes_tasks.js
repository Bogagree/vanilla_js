// дан массив arr = [1,1,2,2,2,5,5,5,2,7] нужно вернуть уникальный массив, отсортированный по частоте встречаемости. 2 встречается чаще всего, потом 5, и т.д [2,5,1,7]

const arr = [1, 1, 2, 2, 2, 5, 5, 5, 2, 7]

const sortedNewArr = (arr) => {
    // const obj = arr.reduce((acc,el) => {
    //     // const currCount = acc[el] || 0;
    //     // return {...acc, [el]: currCount + 1 }
    //     acc[el] = (acc[el] || 0 ) + 1
    //     return acc
    // }, {} )
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    console.log(obj)
    const newArr = Object.keys(obj).sort((a, b) => obj[b] - obj[a])
    console.log(newArr)
    return newArr
}

sortedNewArr(arr)