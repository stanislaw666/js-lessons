// const hamburger = true;
// const fries = true;
// if (hamburger && fries) {
//     console.log('я сыт');
// }

const hamburger = 2;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola === 1 && fries); //в консоли получили 0 - оператор возвращает первое ложное значение, на котором остановился

console.log(1 && 0); //оператор запнулся на последнем не правдивом выражении = 0 в консоли
console.log(1 && 5); //возвращает последнее значение
console.log(null && 5); //вернуло первое неправдивое значение
console.log(0 && 'asddas'); //запнулся на первом не правдивом

// оператор && 
// всегда возвращает первое ложное значение, если оно есть. на нем он запинается, возвращает в консоль и дальше код уже не идет
// если все аргументы верны, код дошел до конца, возвращает в консоль значение последнего аргумента

// и - запинается на лжи, или - запинается на правде

if (hamburger === 3 && cola === 1 && fries) { 
    console.log('все сыты!');
} else {
    console.log('мы уходим');
}

-----------

const hamburger = 3;
const fries = 0;
const cola = 0;
const nuggets = 2;

if (hamburger ===3 && cola ===2 || fries === 3 && nuggets) { //  ||(или) запинается на первой правде тк дальше нету смысла, если все не правда, то возвращается последнее ложное значение
    console.log('все довольны!');
} else {
    console.log('мы уходим');
}

let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport)

console.log(!0); //не неправда (не ноль) ( !=нет )

// дз
console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


let hamburger; //Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение. С const будет ошибка
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
console.log(hamburger || cola || fries === 3 || nuggets);


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

console.log(hamburger && cola || fries === 3 && nuggets);
