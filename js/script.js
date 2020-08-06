"use strict"

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log('Слишком много');
// } else {
//     console.log('Okay!!!');
// }

// Одно = это знак присвоения, а не равенства (в отличии от == и ===)
// (num === 50) ? console.log('Okay') : console.log('Error');

//Конструкция switch выполняет строго только сравнение. break нужен, чтобы прекращать выполнение функции
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Правильно');
//         break;
//     default:
//         console.log('Ничего не угадали');
//         break;

// }

// let number = 50;

// while (number <= 55) {
//     console.log(number);
//     number++;
// }

// do {
//     console.log(number);
//     number++;
// }
// while (number < 55);

//Первое - задаем переменную итерратора. Второе - при каком условие выполнение цикла остановится. Третье - само выполнение цикла. 
// for (let i = 1; i < 10; i++) {
//     if (i == 6) {
//         break;
//     }

//     console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//     if (i == 6) {
//         continue;
//     }

//     console.log(i);
// }
// Здесь он пропустит 6 и продолжит дальше до 10


// Ответ: 50, 51.., 56. Остановится когда i будет больше 7


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('well done!!11');
    } else {
        console.log('error. Try to type all of the answers');
        i--;
    }
}

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('well done!!11');
        } else {
            console.log('error. Try to type all of the answers');
            i--;
        }
    }
}

rememberMyFilms();


if(personalMovieDB.count < 10) { 
    console.log("Просмотрено слишком мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log("Ну вы типичный зритель"); 
} else if (personalMovieDB.count >= 30) {
    console.log("Вы нормальльный такой киноман");
} else {
    console.log("Произошла ошибка");
}

function detectPersonalLevel () {
    if(personalMovieDB.count < 10) { 
        console.log("Просмотрено слишком мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log("Ну вы типичный зритель"); 
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы нормальльный такой киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();