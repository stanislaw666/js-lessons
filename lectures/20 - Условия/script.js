// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('OK');
// }

// // это тернарный оператор, потому что в его работе учавствуют 3 эл-та (он такой единственный в js)
// (num === 50) ? console.log('OK') : console.log('error');

// это бинарный
// 4+4
// это унарный 
// +4

const num = 40;
switch (num) {
    case 49: 
            console.log('неверно');
            break; 
    case 100:
            console.log('нет!')
            break;
    case 50:
            console.log('верно')
            break;
    default:
            console.log('next time!')
            break;
}