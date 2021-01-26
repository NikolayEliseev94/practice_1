let numberOfFilms = prompt('Сколько фильмов вы уже смотрели?', '');

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


//Functions

//Ask a questions
function askQuestionsAboutMovies() {
    let movie = prompt('Один из последних просмотренных фильмов?', '');
    let movieScore = prompt('На сколько его оцените?', '');

    personalMovieDB.addNewMovieIntoDB(movie, movieScore);
}