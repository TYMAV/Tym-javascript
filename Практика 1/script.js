"use strict";


let numberOfFilms;

console.log(typeof(numberOfFilms));

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');

    while (obj == '' || obj == null || isNaN(obj)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');
    }
}

start();

const obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

console.log(obj);

// const a = prompt('Один из последних просторенніх фильмов', ''),
//     b =  prompt('На сколько оцените его?', ''),
//     c =  prompt('Один из последних просторенніх фильмов', ''),
//     d =  prompt('На скоко оцените его?', '');


   

//     obj.movies[a] = b;
//     obj.movies[c] = d;

    console.log(obj);



    // ПРАКТИКА 2
// 1
        for(let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просторенніх фильмов', ''),
              b = prompt('На сколько оцените его?', '');
            
//  2       
        if (a != null && b != null && a != '' && b  != '' && a.length < 50) {
            obj.movies[a] = b;
            console.log ('done');
        } else {
            console.log ('error');
            i--;
        }

            obj.movies[a] = b;
    }
// 3
    if (obj.count < 10) {
        console.log ('Просмотрено довольно мало фильмов');
    } else if (obj.count >= 10 && obj.count <= 30 ) {
        console,log('классический зритель!');
    } else if  (obj.count > 30) {
        console.log ('вы выноман мать твою');
    } else {
        console.log ('error');
    }

    console.log (obj);

//  4

    