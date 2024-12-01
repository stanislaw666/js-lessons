'use strict';

// let number = 5; debugger
// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// };
// number = 6;
// logNumber(); debugger

//каждый вызов функции это создание нового лексического окружения со своими специфичными для этого вызова локальными переменными

function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1, c2, c3);

// for (let i = 0; i < 9; i++) {
//     for (let j = 0; i < 9; i++) {
//         let num = 3; //не выведется в console.log так как переменная находится ТОЛЬКО внутри второго цикла
//     }

//     console.log(num);
// }