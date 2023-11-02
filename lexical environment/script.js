// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number)
// }

// number = 6;
// logNumber(); debugger

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1; debugger
        return counter; debugger
    }
    return myFunction;
}

const increment = createCounter();
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3)

// const result = getSum(5, 6);
const getSum = function(a, b) {
    return a + b;
}

console.log(typeof(NaN))

const user = {
    name: 'Alex',
    age: 25
}
const {name, age} = user;

console.log(name, age)

console.log(0 || NaN || false || null)

console.log(Boolean(null))

function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
console.log(result)

