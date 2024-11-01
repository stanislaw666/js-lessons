"use strict";

let num = 20;

// глагол, с припиской того над чем выполняется действие
function showFirstMessage(text) {    //замыкание функции - сама функция вместе со всеми внешними переменными, которые ей доступны
    console.log(text);
    let num = 10
}

showFirstMessage('meooowow');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 2));
console.log(calc(4, 8));
console.log(calc(1, 88));

function ret() {
    let num = 50;

    return num; //функция возвращает во 'внешний мир' значение переменной (let)
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('meow')
};

logger();

const calc = (a, b) => { 
    console.log('1');
    return a + b;
};