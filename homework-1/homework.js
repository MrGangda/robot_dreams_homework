

//Without recursion
// If the value is a string

let someArrString = "[1, 2, [3, 4, [5]], 6]";

const sumArr = function (arr) {
    return arr.replace(/\s+/g, '').split('').reduce((acc, item) => {
        if(Number.isInteger(+item)) {
            return acc + +item
        } else {
            return acc;
        }
    }, 0);
}
console.log(sumArr(someArrString));

// With recursion

let someArr = [1, 2, [3, 4, [5]], 6];

function isNotObject(value) {
    return typeof value !== 'object' || value === null;
}

const someArrWithRecursion = function (arr) {
    let result = 0;

    for (let item of arr) {
        if (isNotObject(item)) {
            result += item;
        } else if (Array.isArray(item)) {
            result += someArrWithRecursion(item);
        }
    }

    return result;
}

console.log(someArrWithRecursion(someArr));


