import { collectData, addToMovieList, displayTotalLength } from "./ui.js";
import { createMovie, addMovie, totalLength } from "./data.js";


export function init() {
    var btn = document.querySelector('#submit-movie');
    btn.addEventListener('click', function () {

        var movieData = collectData()

        var movie = createMovie(movieData)
        addToMovieList(movie);
        addMovie(movie);
        var totalMovieLength = totalLength();
        displayTotalLength(totalMovieLength);
        console.log(movie);

    })
}




