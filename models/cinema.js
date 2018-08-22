const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.countFilm = function() {
  return this.films.length;
};

module.exports = Cinema;
