"use strict";

const str = 'test';

console.log(str.toUpperCase()); //изменение выворда в консоль


const fruit = "some fruit";
console.log(fruit.indexOf('fruit')); //с какой позиции начинается fruit, если -1, то слово в строке не найдено

const logg = "meow 678 gav";
console.log(logg.slice(5, 12)); //start-end выводит кусок по позициям, если одно число, то вырезается вся строка

console.log(logg.substring(5, 12)); //тоже самое ^

console.log(logg.substr(6, 5)); //вместо end писать сколько символов необходимо вырезать (вырежет 5 символов) (устарело)

const num = 420.22;
console.log(Math.round(num)); //округляет

const test = '230.22px';
console.log(parseInt(test)); //округляет

console.log(parseFloat(test)); //возвращает с дробными ед.
