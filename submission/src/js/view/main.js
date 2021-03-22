import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = result => {
        movieListElement.movies = result;
    };
    const fallbackResult = message => {
        movieListElement.renderError(message);
    };
    const showMovie = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ed94c15844d5687a41edbd52b892330d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
        const responseJson = await response.json();
        if (responseJson.results) {
            movieListElement.movies = responseJson.results;
        }
    }
    showMovie();
    searchElement.clickEvent = onButtonSearchClicked;
}
export default main;