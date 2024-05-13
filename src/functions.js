function add(a, b){
    return a + b;
}


// function expression (przypisanie funkcji do zmiennej)
const add1 = function(a, b){
    return a + b;
}

console.log(add1(1, 2))

const add2 =(a, b) => {
    return a + b;
}

const add3 = () => 42;
const add4 = a => 42;

// implicit return, nie ma curly braces (klamerek)
const add5 = (a, b) => a + b;

// max
function max(coll) {
    let result = coll[0];

    for (const digit of coll) {
        if (digit > result){
            result = digit;
        }
    }
    return result;
}

console.log(max([1, 2, 3, 4, 5, 2]))

function range(start, stop, step=1){
    if (stop === undefined) {
        stop = start;
        start = 0;
    }

    const result = [];
    let counter = start;

    while (result.length < (stop - start) / step) {
        result.push(counter);
        counter += step;
    }

    return result;
}

// console.log(range(5)) /// [0, 1 ,2, 3, 4, 5]
// console.log(range(1, 5)) /// [1 ,2, 3, 4, 5]
// console.log(range(2, 10, 2)) /// [2, 4 ,6, 8]
// console.log(range(10, 5, -1)) /// [10, 9 ,8, 7, 6]