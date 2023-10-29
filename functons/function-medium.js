// Место для первой задачи
function calculateVolumeAndArea(length) {
  if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }

  let volume = 0,
    area = 0;

  volume = length * length * length;
  // length ** 3 - это тоже самое, что и выше или варианты через цикл.
  // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
  area = 6 * (length * length);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));

//Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:

// Место для второй задачи

function getCoupeNumber(num) {
  if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
    return "Ошибка. Проверьте правильность введенного номера места"
    
  } else if (num === 0 || num > 36) {
    return "Таких мест в вагоне не существует";
  }

  return Math.ceil(num/4);
}
