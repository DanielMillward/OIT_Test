const fetch = require("node-fetch");
const fs = require("fs");
const token = require('./token')

function fetchTMDB(query_string, pageNum = 1) {
    const htmlSafeString = encodeURIComponent(query_string);
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + htmlSafeString + '&include_adult=false&language=en-US&page=' + String(pageNum);
    const authToken = token;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: authToken
        }
    };

    // Return the entire promise chain
    return fetch(url, options)
        .then(res => res.json())
        .then(json => {
            const responseData = json.results.slice(0, 10);
            const output = responseData.map(movie => ({
                movie_id: movie.id,
                title: movie.title,
                poster_image_url: "https://image.tmdb.org/t/p/w200/" + movie.poster_path,
                popularity_summary: `Popularity: ${movie.popularity}. Number of votes: ${movie.vote_count}`
            }));
            return output;
        })
        .catch(err => {
            console.error('error:' + err);
            throw err; // Rethrow the error so it can be caught by the caller
        });
}



module.exports = fetchTMDB;