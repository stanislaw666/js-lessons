'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //функция - это метод нашего обьекта, чтобы он умел что-то делать
        console.log('meow');
    }
};
options.makeTest();


console.log(Object.keys(options).length); //этот метод берет обьект и на его основании создает массив в котором все эл-ты это ключи, также показывает length

// методы это действия, кот. умеет совершать наш объект
//обьекты это структуры которые могут хранить в себе любые виды данных в формате ключ-значение

// console.log(options.name);

// delete options.name; //удаляет ключ

// перебор обьектов:
let counter = 0;
for (let key in options) { //цикл будет работать столько раз сколько свойств находиться внутри объекта
    if (typeof options[key] === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
};
console.log(counter);


const bio = {
    name: 'stanislav',
    bornIn: '01.10.2005',
    musicTaste: 'playBoyCarti, feduk',
    interests: {
        climbing: 'boulder',
        basketPos: 'pg'
    }
};

console.log(Object.keys(bio).length);

const {climbing, basketPos} = bio.interests;
console.log(climbing, basketPos);

for (let key in bio) {
    if (typeof(bio[key]) === 'object') {
        for (let i in bio[key]) {
            console.log(`Свойство ${i} имеет значение ${bio[key][i]}`)
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${bio[key]}`)
    }
}
