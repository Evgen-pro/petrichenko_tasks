"use strict";

const options = {
  name: "test",
  width: 1024,
  heigth: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  maketest: function () {
    console.log("test");
  },
};

options.maketest();
// console.log(options["colors"]["border"]);

// let counter = 0;

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);

// console.log(Object.keys(options).length);

const town = {
  name: "Polotsk",
  population: 50000,
};

// console.log(Object.keys(town).length);

let counter = 0;

for (let key in town) {
  console.log(`Property ${key} znach ${town[key]}`);
}

const { border, bg } = options.colors;
console.log(border);
