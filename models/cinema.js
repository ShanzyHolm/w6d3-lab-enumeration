const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.countFilm = function() {
  return this.films.length;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {
    return film.title
  })
};

// Cinema.prototype.getFilmTitleList = function() {
//   const filmTitleArray = this.films
//   filmTitleArray.map(film => film.title);
//   return filmTitleArray;
// };

Cinema.prototype.filmByTitle = function (title) {
  return this.films.find((film) => {
    return film.title === title;
  })
};

Cinema.prototype.hsaYear = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  })
};

// Cinema.prototype.getFilmByTitle = function (titleOfFilm) {
//   const filmArray = this.films
//   result = filmArray.filter(film => film.title === titleOfFilm);
//   return result;
// };

// Cinema.prototype.getFilmsbyGenre = function (genre) {
//   filmArray = [];
//   result = this.films.filter(film => film.genre == genre)
//     filmArray.push(result);
//     return filmArray;
// };

// Cinema.prototype.totalRunningTime = function (films) {
//   console.log(
// };









// Cinema.prototype.sortByGenre = function() {
//   var genreA = a.genre.toUpperCase();
//   var genreB = b.genre.toUpperCase();
//   if (genreA < genreB) {
//     return -1;
//   }
//   if (genreA > genreB) {
//     return 1;
//   }
//   return 0
// };

// Cinema.prototype.getFilmYear = function (titleOfFilm) {
//   const filmArray = this.films
//   result = filmArray.filter(film => film.year === titleOfFilm);
//   return result;
// };

// Cinema.prototype.sortByGenre = function groupBy(filmArray, genre) {
//   return filmArray.reduce("genre");
//   })
// };

module.exports = Cinema;
