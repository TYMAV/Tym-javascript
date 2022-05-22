"use strict";



var obj = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    obj.count = +prompt('Сколько фильмов вы уже посммотрели?', '');
  
    while (obj.count == '' || obj.count == null || isNaN(obj.count)) {
      obj.count = +prompt('Сколько фильмов вы уже посммотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (var i = 0; i < 2; i++) {
      var a = prompt('Один из последних просторенніх фильмов', '').trim(),
          b = prompt('На сколько оцените его?', '');       
  
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        obj.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
  
      obj.movies[a] = b;
    }
  },
  detectPersonalLevel: function() {
    if (obj.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (obj.count >= 10 && obj.count <= 30) {
      console.log('классический зритель!');
    } else if (obj.count > 30) {
      console.log('вы выноман мать твою');
    } else {
      console.log('error');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(obj);
    }
  },
  writeYourGenres: function() {
    for (var i = 1; i <= 3; i++) {
      var genre = prompt(`Ваш любимый жанр под номером ${i}`);
      
      if(obj.genres == '' || obj.genres == null) {
        console.log('Что то не то ввели.Анука давайте,не филоньте!');
      } else {
        obj.genres[i - 1] = genre;
      }
      
      obj.genres.forEach((title, i) => {
        console.log(`Любимый жанр #${i + 1} - это ${title}`);
      });

    }
  },
  toggleVisibleMyDB: function() {
    if(obj.privat) {
     obj.privat = false;
    } else {
      obj.privat = true;
    } 
  }
};
