//begin to do an app

const numberOfFilms = prompt("How many films did you watch?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: [],
  genres: [],
  privat: false,
};

const a = prompt("Last film?"),
  b = prompt("Grade?"),
  c = prompt("last film?"),
  d = prompt("Grade?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

//cycles

let num = 30;

/* switch (num) {
  case 22:
    console.log("Ok!");
    break;
  case 30:
    console.log("not ok!");
    break;
  default:
    console.log('i would like 33')
    break;
} 

do {
  console.log(num);
  num++;
} while (num < 50);

*/

for (let i = 0; i < 30; i++) {
  console.log(num);
  num++;
}
