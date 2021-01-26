'use strict';
let numberOfFilms = askHowManyMoves(),
    q1 = 'What is the last movie you watched?',
    q2 = 'What score will you give?';

checkUserStatus(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    //Добавление Фильма и его оценки
    addNewMovieIntoDB: (movie, movieScore) => {
        personalMovieDB.movies[movie] = movieScore;
        //        console.log(personalMovieDB);
    },
    //Вывести все вильмы из базы данных
    showAllMoviesIntoBD: () => {
        console.log(personalMovieDB.movies);
    },
    //check DB to private if false show in console
    showMyDB: () => {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB);
        } else {
            console.log(`DB in private state`);
        }
    }
};

//Меняем значение на значение из задачи
numberOfFilms = 2;
for (let i = 0; i < numberOfFilms; i++) {
    askQuestionsAboutMovies();
}

personalMovieDB.showAllMoviesIntoBD();
personalMovieDB.showMyDB();
//------------------------FUNCTIONS---------------------------------------///
//Ask a questions
//
// What score will you give?
// What is the last movie you watched?
function askQuestionsAboutMovies() {
    let movie = chekUserUnswer(q1),
        movieScore = chekUserUnswer(q2);

    personalMovieDB.addNewMovieIntoDB(movie, movieScore);
}

//Check users unswer (mustn't be empty and more than 50 symbols)
function chekUserUnswer(question) {
    
    let userUnswer = null,
        startOfAnswer;

    if (question == q1) {
        startOfAnswer = 'Movie';
    } else {
        startOfAnswer = 'Score';
    }


    while (userUnswer == null) {
        userUnswer = prompt(question, '');
        if (userUnswer != null) {
            if (userUnswer == '') {
                alert(`${startOfAnswer} can't be empty, please try again!`);
                userUnswer = null;
            } else if (userUnswer.length > 50) {
                alert(`${startOfAnswer} length can't be more than 50 symbols, please try again!`);
                userUnswer = null;
            }
            if (startOfAnswer == 'Score') {
                if (isNaN(userUnswer)) {
                    alert(`${startOfAnswer} must be a number, please try again!`);
                    userUnswer = null;
                }
            }
        } else {
            alertOfCancel();
        }
    }
    return userUnswer;
}


//Ask and check How many movies user whached
function askHowManyMoves() {
    let userUnswer = null;
    while (userUnswer == null) {
        userUnswer = prompt('How many movies are you watched?', '');
        if (userUnswer != null) {
            if (userUnswer == '') {
                alert(`Can't be empty, please try again!`);
                userUnswer = null;
            } else if (isNaN(userUnswer)) {
                alert(`Unswer must be Number!`);
                userUnswer = null;
            }
        } else {
            alertOfCancel();
        }
    }

    return userUnswer;

}

//Give notice for user)
function checkUserStatus(x) {
    if (x < 10) {
        alert(`You whached not so many mivies.`);
    } else if (x >= 10 && x < 30) {
        alert(`You classic movies whatcher.`);
    } else if (x >= 30) {
        alert(`You are big movie fan`);
    }
}

// alert for user
function alertOfCancel() {
    alert(`Don't cancel!!!`);
}