<template>
    <div id="app">
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div v-for="movie in movies" :key="movie.movie_id" class="movie">
                <h2>{{ movie.title }}</h2>
                <img :src="movie.poster_image_url" :alt="movie.title">
                <p>{{ movie.popularity_summary }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import { fetchData } from '../services/MovieService';

export default {
    data() {
        return {
            movies: 'loading...'
        };
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData() {
            fetch('http://localhost:8080/movies?title=Truman')
                .then(response => response.json())
                .then(data => {
                    // Set the fetched data to the movies array
                    console.log("MYDATA" + data);
                    this.movies = data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
};
</script>
  