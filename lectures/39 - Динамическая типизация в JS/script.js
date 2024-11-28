'use strict';


//все что мы получаем от пользователя приходит нам в виде типа данных 'строка'
//to string
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 + ''));

const fontSize = 26 + 'px';

//to num
//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));
//3)
console.log(typeof(parseInt('4', 10)));

let answ = +prompt('hello', '');

//to boolean
//0, '', null, undefined, NaN; это false
// 1)
let switcher = null;
if (switcher) {
    console.log('working...');
}
switcher = 1;
if (switcher) {
    console.log('working...');
}
// 2)
console.log(typeof(Boolean('5')));
// 3)
console.log(typeof(!!'44444'));