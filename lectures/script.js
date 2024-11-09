'use strict';

const arr = [1, 2 , 4, 5, 666];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
};

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}) 

arr.pop();
arr.push('мяу');
console.log(arr);
//свойство length состоит из последнего индекса который есть у нас в массиве +1(прибавлятся еденица к последнему индексу (если 4 эл-та в массива, в консоль выведет длину 5))
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

for (let value of arr) { //value - каждый отдельный элемент массива
    console.log(value);
};

const str = prompt('', '');
const products = str.split('', '');
products.sort();
console.log(products.join('; '));