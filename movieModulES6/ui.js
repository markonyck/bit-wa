export function collectData() {
        
    var movieTitleField = document.querySelector("#movie-title");
    var movieLengthField = document.querySelector("#movie-length");
    var movieGenreField = document.querySelector("#movie-genre");

    var movieTitle = movieTitleField.value;
    var movieLength = movieLengthField.value;
    var movieGenre = movieGenreField.value;
    
    return {
        title: movieTitle,
        length: movieLength,
        genre: movieGenre
    }
}

export function addToMovieList(movie){
    var movieTitleField = document.querySelector("#movie-title");
    var movieLengthField = document.querySelector("#movie-length");
    var movieGenreField = document.querySelector("#movie-genre");

    var movieUL = document.querySelector(".movie-list");
    var movieLI = document.createElement("li");
    var movieTextNode = document.createTextNode(movie.getData());
    movieLI.appendChild(movieTextNode);
    movieUL.appendChild(movieLI);

    movieTitleField.value = "";
    movieLengthField.value = "";
    movieGenreField.value = "-"
}
export function displayTotalLength(totalMovieLength){
    var totalField = document.querySelector("#total-length");
    totalField.innerHTML = totalMovieLength;
}

