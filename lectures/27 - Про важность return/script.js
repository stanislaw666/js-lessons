"use strict";

const usdCurr = 28;
const eurCurr = 52;
const discont = 0.9;

function convert(amount, curr) {
    return curr * amount;          //после return не ставить перенос строки
}

function promotion(result) {
    console.log(result * discont);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
        if (i === 3) {return};
    }
    console.log('done')
}

test();