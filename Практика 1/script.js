"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');

console.log(typeof(numberOfFilms));

const obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

console.log(obj);

const a = prompt('Один из последних просторенніх фильмов', ''),
    b =  prompt('На сколько оцените его?', ''),
    c =  prompt('Один из последних просторенніх фильмов', ''),
    d =  prompt('На скоко оцените его?', '');

    obj.movies[a] = b;
    obj.movies[c] = d;

    console.log(obj);
