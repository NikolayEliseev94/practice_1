let numberOfFilms = askHowManyMoves();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    //Добавление Фильма и его оценки
    addNewMovieIntoDB: function (movie, movieScore) {
        personalMovieDB.movies[movie] = movieScore;
        //        console.log(personalMovieDB);
    },
    //Вывести все вильмы из базы данных
    showAllMoviesIntoBD: function () {
        console.log(personalMovieDB.movies);
    }
};

//Меняем значение на значение из задачи
numberOfFilms = 2;
for (let i = 0; i < numberOfFilms; i++) {
    askQuestionsAboutMovies();
}

personalMovieDB.showAllMoviesIntoBD();

//------------------------FUNCTIONS---------------------------------------///
//Ask a questions
//
// What score will you give?
// What is the last movie you watched?
function askQuestionsAboutMovies() {
    let movie = chekUserUnswer('What is the last movie you watched?'),
        movieScore = chekUserUnswer('What score will you give?');

    personalMovieDB.addNewMovieIntoDB(movie, movieScore);
}

//Check users unswer (mustn't be empty and more than 50 symbols)
function chekUserUnswer(question) {
    let userUnswer = null;
    while (userUnswer == null) {
        userUnswer = prompt(question, '');
        if (userUnswer != null) {
            if (userUnswer == '') {
                alert(`Movie name can't be empty, please try again!`);
                userUnswer = '';
            }
            if (userUnswer.length > 50) {
                alert(`Movie length name can't be more than 50 symbols, please try again!`);
                userUnswer = '';
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
            } else if (userUnswer == isNaN) {
                alert(`Unswer must be Number!`);
                userUnswer = null;
            }
        } else {
            alertOfCancel();
        }
    }

    return userUnswer;

}

// alert for user
function alertOfCancel() {
    alert(`Don't cancel!!!`);
}