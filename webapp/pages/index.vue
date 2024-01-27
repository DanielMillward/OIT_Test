<template>
    <div id="app">
        <div class="search-container">
            <input type="text" v-model="searchQuery" @keyup.enter="searchMovies" placeholder="Enter movie title">
            <button @click="searchMovies">Search</button>
        </div>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div v-if="movies.length === 0">
                No movies found.
            </div>
            <div v-else class="movie-container">
                <div v-for="movie in movies" :key="movie.movie_id" class="movie">
                    <h2><a :href="getMovieUrl(movie.movie_id)" target="_blank">{{ movie.title }}</a></h2>
                    <img :src="movie.poster_image_url" :alt="movie.title">
                    <p>{{ movie.popularity_summary }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
}

.search-container {
    align-self: center;
    text-align: center;

    margin-bottom: 20px;
}

.movie-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.movie {
    width: 200px;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
}

.movie img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}
</style>
    
<script>
import { fetchData } from '../services/MovieService';

export default {
    data() {
        return {
            loading: false,
            movies: [],
            searchQuery: ''
        };
    },
    mounted() {
        this.searchMovies();
    },
    methods: {
        searchMovies() {
            if (this.searchQuery.trim() === '') {
                this.movies = [];
                return;
            }
            this.loading = true;
            // Adjust the endpoint URL to include the search query
            const endpoint = `http://localhost:8080/movies?title=${encodeURIComponent(this.searchQuery.trim())}`;
            fetch(endpoint)
                .then(response => response.json())
                .then(data => {
                    this.movies = data;
                    this.loading = false;
                })
                .catch(error => {
                    console.error('Error fetching movies:', error);
                    this.loading = false;
                });
        },
        getMovieUrl(movieId) {
            return `https://www.themoviedb.org/movie/${movieId}`; // Replace example.com with your actual domain
        }
    }
};
</script>
  