
    var movieList = [];

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
      }
      Movie.prototype.getData = function() {
        var movieData =
        this.title +
        ", " +
        this.length +
        "min, " +
        this.genre[0].toUpperCase() +
        this.genre[this.genre.length - 1].toUpperCase();
      return movieData;
      }

    export function createMovie(data){
        return new Movie(data.title, data.length, data.genre);
    }

    export function addMovie(movie){
        movieList.push(movie);
    }

    export function totalLength(){
        var total = 0;
        movieList.forEach(function(movie) {
            total += parseInt(movie.length);
        });
        return total;
    }