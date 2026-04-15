// let s = 'dasdas2342'
// function secLagNum(s) {
//     // let nums = s.replace(/[^0-9]/g,"") --- or
//     const nums = s.match(/[0-9]/g)
//     console.log("numsss", nums)
//     let max = 0
//     let secMax = 0
//     for (let char of nums) {
//         console.log("dasd", char)
//         if (max < char) {
//             secMax = max
//             max = char
//         } else if (char > secMax && char !== max) {
//             secMax = char
//         }
//     }
//     console.log("ans", max, secMax)
// }
// secLagNum(s)


function isPaldrm() {
    let num = 121
    let temp = num
    let s = 0
    if (num < 0) {
        console.log("00", num)
        return false
    }
    while (num > 0) {
        let r = num % 10
        s = s * 10 + r
        num = Math.floor(num / 10)
    }
    if (temp == s) {
        console.log("true", s)
        return true
    } else {
        console.log("false", s)
        return false
    }
}
// isPaldrm()


function countNegatives(arr) {
    // implement your solution here
    if (arr.length === 0) {
        return 0
    }
    let count = 0
    for (let i of arr) {
        if (i < 0) {
            count++
        }
    }
    return count
}

let res1 = countNegatives([-1, 0, -1])
let res2 = countNegatives([-2, -5, -7])
let res3 = countNegatives([0, 3, 2])
let res4 = countNegatives([])

console.log("count", res1, res2, res3, res4)
