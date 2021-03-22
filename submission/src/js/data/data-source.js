class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed94c15844d5687a41edbd52b892330d&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }
    static showMovie() {
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ed94c15844d5687a41edbd52b892330d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`Error`);
                }
            })
    }
}
export default DataSource;