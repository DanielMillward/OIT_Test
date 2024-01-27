<template>
    <div id="app">
        <div>
            <input type="text" v-model="searchQuery" placeholder="Enter movie title">
            <button @click="searchMovies">Search</button>
        </div>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div v-if="movies.length === 0">
                No movies found.
            </div>
            <div v-else>
                <div v-for="movie in movies" :key="movie.movie_id" class="movie">
                    <h2>{{ movie.title }}</h2>
                    <img :src="movie.poster_image_url" :alt="movie.title">
                    <p>{{ movie.popularity_summary }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
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
        }
    }
};
</script>
  