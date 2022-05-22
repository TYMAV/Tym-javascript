"use strict";

function calculateVolumeAndArea(length) {
  // if (typeof(length) !== 'number' ) {
  //     return 'При вычислении произошла ошибка';
  // }
  var str = '';

  for (var i = 1; i < 10; i++) {
    if (i <= 1000) {
      str = "\u041E\u0431\u044A\u0435\u043C \u043A\u0443\u0431\u0430:".concat(Math.pow(i, 3), ", \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u0432\u0441\u0435\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438:").concat(6 * Math.pow(i, 2), " ");
    } else {
      return 'При вычислении произошла ошибка';
    }

    return str;
  }
}

calculateVolumeAndArea(5);
console.log(calculateVolumeAndArea(5));