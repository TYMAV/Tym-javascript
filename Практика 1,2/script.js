"use strict";


let numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');

console.log(typeof(numberOfFilms));

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посммотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
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

function rememberMyFilms() {
        // 1
    for(let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просторенніх фильмов', '').trim(),
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

}
rememberMyFilms();

// 3
   
    function detectPersonalLevel() {
        if (obj.count < 10) {
            console.log ('Просмотрено довольно мало фильмов');
        } else if (obj.count >= 10 && obj.count <= 30 ) {
            console.log('классический зритель!');
        } else if  (obj.count > 30) {
            console.log ('вы выноман мать твою');
        } else {
            console.log ('error');
        }
    
    }
    detectPersonalLevel();
//  ПРАКТИКА 3 

// 2
    console.log (obj);

    function showMyDB (hidden) {

        if (!hidden) {
            console.log(obj);
        }
    }
    showMyDB();
// 3

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        obj.genres[i - 1] = genre;
    }
}

writeYourGenres();


    