"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');
console.log(_typeof(numberOfFilms));
var obj = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
console.log(obj);
var a = prompt('Один из последних просторенніх фильмов', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просторенніх фильмов', ''),
    d = prompt('На скоко оцените его?', '');
obj.movies[a] = b;
obj.movies[c] = d;
console.log(obj);