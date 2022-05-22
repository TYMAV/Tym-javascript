"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');
console.log(_typeof(numberOfFilms));

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');
  }
}

start();
var obj = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  
};
console.log(obj); 

// const a = prompt('Один из последних просторенніх фильмов', ''),
//     b =  prompt('На сколько оцените его?', ''),
//     c =  prompt('Один из последних просторенніх фильмов', ''),
//     d =  prompt('На скоко оцените его?', '');
//     obj.movies[a] = b;
//     obj.movies[c] = d;

console.log(obj); // ПРАКТИКА 2

function rememberMyFilms() {
  // 1
  for (var i = 0; i < 2; i++) {
    var a = prompt('Один из последних просторенніх фильмов', '').trim(),
        b = prompt('На сколько оцените его?', ''); //  2       

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      obj.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }

    obj.movies[a] = b;
  }
}

rememberMyFilms(); // 3

function detectPersonalLevel() {
  if (obj.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (obj.count >= 10 && obj.count <= 30) {
    console.log('классический зритель!');
  } else if (obj.count > 30) {
    console.log('вы выноман мать твою');
  } else {
    console.log('error');
  }
}

detectPersonalLevel(); //  ПРАКТИКА 3 
// 2

console.log(obj);

function showMyDB(hidden) {
  if (!hidden) {
    console.log(obj);
  }
}

showMyDB(); // 3

function writeYourGenres() {
  for (var i = 1; i <= 3; i++) {
    var genre = prompt("\u0412\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C ".concat(i));
    obj.genres[i - 1] = genre;
  }
}

writeYourGenres();