// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

function firstTask() {
  for (let i = 5; i < 11; i++) {
    console.log(i);
  }
}

firstTask();

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

function secondTask() {
  for (let i = 20; i > 9; i--) {
    console.log(i);
    if (i === 13) break;
  }
}

secondTask();

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

function thirdTask() {
  for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

thirdTask();

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

let i = 2;
while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}

//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
  const arrayOfNumbers = [];

  // Пишем решение вот тут
  for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
  }

  // Не трогаем
  console.log(arrayOfNumbers)
  return arrayOfNumbers;
}

fifthTask();
