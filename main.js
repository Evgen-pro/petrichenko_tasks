const str = "text";
const arr = [1, 4];
console.log(str.length);
console.log(arr.length);

// const text = str.toUpperCase()
// console.log(text)
// console.log(text.toLowerCase())

// const veg = 'lorem Ipsum'
// console.log(veg.indexOf('sum'))

const array = [2, 8, 4];
console.log(array.indexOf(8));

const log = "hello world";
console.log(log.slice(6));

const test = "qwerty";
console.log(test.slice(3, 4));

const text = "apple";
console.log(text.substr(1, 2));

const rez = "12.3px";
console.log(parseInt(rez));
console.log(parseFloat(rez));

const str1 = "    dcdc    ";
console.log(str1.trim());


// Динамическая типизация

const fontSize = 26 + 'px';

// To number

console.log(typeof(Number('4')))

console.log(typeof(+'4'))

console.log(typeof(parseInt('15px')));

// To booolean

// 0, ''. null. underfined, NaN

let switcher = null;
if (switcher) {
    console.log('working')
} 

switcher = 1;

if (switcher) {
    console.log('working')
} 

//----

console.log(typeof(Boolean('4')))

// 
console.log(typeof(!!('4')))