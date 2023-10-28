1; // Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Место для первой задачи
function sayHello(name) {
  return `Привет, ${name}!`;
}

console.log(sayHello("Igor"));

/* 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6]. */

// Место для второй задачи
function returnNeighboringNumbers(num) {
  const arr = [];

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      arr[i] = num - 1;
    } else if (i === 1) {
      arr[i] = num;
    } else if (i === 2) {
      arr[i] = num + 1;
    }
  }
  return arr;
}

console.log(returnNeighboringNumbers(6));

// second variant

function returnNeighboringNumbers2(num) {
  return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers2(8));

/* 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть. */

// Место для третьей задачи
function getMathResult(num, times) {
  if (typeof times !== "number" || times <= 0) {
    return num;
  }

  let str = "";

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
    } else {
      str += `${num * i}---`;
    }
  }

  return str;
}

console.log(getMathResult(10, 5));

