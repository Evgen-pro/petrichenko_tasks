// let a = 5,
//     b = a;


// b = b + 5;
// console.log(b)
// console.log(a)

// const obj = {
//     a: 5,
//     b: 1
// }

// const copy = obj;
// copy.a = 10;

// console.log(obj)
// console.log(copy)

function copy(mainObj) {
    let objCopy = {}

    for (let key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newObj = copy(numbers)
numbers.a = 10;
// console.log(newObj)
// console.log(numbers)

// Object asign

const add = {
    d: 17,
    e: 20
}

const clone = (Object.assign({}, add)) // независимая поверхностная копия обьекта 
clone.d = 1000;

console.log(clone)
console.log(add)

// copy of array

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'iwjdijwd';
console.log(newArray)
console.log(oldArray)

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet)

function log(a, b, c) {
    console.log(a, b, c)
}

const num = [2, 5, 7];
log(...num)

const array = ['a', 'b'];

const newAaray = [...array]
console.log(newAaray)


const q = {
    one: 1,
    two: 2
}

const newObjj = {...q}