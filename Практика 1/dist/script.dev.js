"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var numberOfFilms;
console.log(_typeof(numberOfFilms));

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');

  while (obj == '' || obj == null || isNaN(obj)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');
  }
}

start();
var obj = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
console.log(obj); // const a = prompt('Один из последних просторенніх фильмов', ''),
//     b =  prompt('На сколько оцените его?', ''),
//     c =  prompt('Один из последних просторенніх фильмов', ''),
//     d =  prompt('На скоко оцените его?', '');
//     obj.movies[a] = b;
//     obj.movies[c] = d;

console.log(obj); // ПРАКТИКА 2
// 1

for (var i = 0; i < 2; i++) {
  var a = prompt('Один из последних просторенніх фильмов', ''),
      b = prompt('На сколько оцените его?', ''); //  2       

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    obj.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }

  obj.movies[a] = b;
} // 3


if (obj.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (obj.count >= 10 && obj.count <= 30) {
  console, log('классический зритель!');
} else if (obj.count > 30) {
  console.log('вы выноман мать твою');
} else {
  console.log('error');
}

console.log(obj); //  4