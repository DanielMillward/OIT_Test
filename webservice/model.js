const fetch = require("node-fetch");
const fs = require("fs");
const token = require('./token')

function fetchTMDB() {
    const url = 'https://api.themoviedb.org/3/search/movie?query=the%20matrix&include_adult=false&language=en-US&page=1';
    const authToken = token;
    console.log("token", authToken)
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: authToken
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}


module.exports = fetchTMDB;