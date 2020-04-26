const arr = []
const length = 100000000

for (let i = 0; i < length; i++) {
    arr.push(i + 1)
}

const number = Math.floor(Math.random() * length)

console.log('Length of arr:', length)
console.log('Number for search:', number)

function linearSearch() {
    console.time('Linear time')
    let result
    for (let num of arr) {
        if (num === number) {
            result = num
            break
        }
    }
    console.timeEnd('Linear time')
    return result
}

function binarySearch() {
    console.time('Binary time')
    let result = binary(arr, number)
    console.timeEnd('Binary time')
    return result
}

function binary(arr, target) {
    if (arr[0] === target) return arr[0]
    if (arr[arr.length - 1] === target) return arr[arr.length - 1]
    const midIndex = Math.floor((arr.length - 1) / 2)
    if (target > arr[midIndex]) {
        return binary(arr.slice(midIndex, arr.length - 1), target)
    } else {
        if (target < arr[midIndex]) {
            return binary(arr.slice(0, midIndex), target)
        } else {
            return arr[midIndex]
        }
    }
}

async function main() {
    const [linearResult, binaryResult] = await Promise.all([linearSearch(), binarySearch()])
    console.log('Linear result:', linearResult)
    console.log('Binary result:', binaryResult)
}

main()
