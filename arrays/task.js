// Задача: Создание объекта
// Создайте объект person с полями name, age и gender. Заполните их соответствующими значениями и выведите объект в консоль.

const person = {
  name: "Anna",
  age: 22,
  gender: "female",
};

console.log(person);

// Задача: Доступ к свойствам объекта Создайте объект car с полями brand, model и year. Выведите в консоль значение свойства model с использованием точечной нотации и квадратных скобок.

const car = {
  brand: "Alfa Romeo",
  model: "156",
  year: 1999,
};

console.log(car.model);
console.log(car["model"]);

// Задача: Изменение значения свойства объекта. Создайте объект book с полем title. Измените значение свойства title на новое значение и выведите обновленный объект в консоль.

const book = {
  title: "Apple",
};

book.title = "orange";
console.log(book);

// Задача: Добавление нового свойства. Создайте объект person с полями name и age. Добавьте новое поле city со значением и выведите обновленный объект в консоль.

const person1 = {
  name: "Evgen",
  age: 31,
};

person1["city"] = "Polotsk";
console.log(person1);

// Задача: Перебор свойств объекта. Создайте объект student с полями name, age и grade. Используя цикл for...in, выведите все свойства и их значения объекта в консоль.

const student = {
  name: "Vika",
  age: 31,
  grade: 8,
};

for (let key in student) {
  console.log(`${key} - ${student[key]}`);
}

// Задача: Удаление свойства объекта. Создайте объект person с полями name, age и city. Удалите свойство city из объекта и выведите обновленный объект в консоль.

const person2 = {
  name: "Alesya",
  age: 22,
  city: "Brest",
};

delete person2.city;
console.log(person2);

// Задача: Копирование объекта. Создайте объект source с несколькими полями. Создайте новый объект target и скопируйте все свойства из source в target. Выведите оба объекта в консоль и убедитесь, что они идентичны.

const source = {
  name: "Masha",
  age: 33,
};

const target = {};

for (let key in source) {
  target[key] = source[key];
}

console.log(target);

// Задача: Объект в качестве значения свойства. Создайте объект user с полями name и age. Создайте объект address с полями street и city. Добавьте объект address в качестве значения свойства address объекта user. Выведите объект user в консоль и убедитесь, что свойство address содержит объект.

const user = {
  name: "Yulya",
  age: 20,
};

const address = {
  street: "Pole",
  city: "Minsk",
};

user.address = address;
console.log(user);

// Задача: Объекты в массиве. Создайте массив students и добавьте в него несколько объектов-студентов. Каждый объект должен содержать поля name, age и grade. Используйте цикл для перебора массива и вывода информации о каждом студенте.

const students = [
  {
    name: "John",
    age: 18,
    grade: 8,
  },
  {
    name: "Anna",
    age: 19,
    grade: 9,
  },
];

for (let i = 0; i < students.length; i++) {
  console.log(`Students name: ${students[i].name}`);
  console.log(`Students age: ${students[i].age}`);
  console.log("------");
}
