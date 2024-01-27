<template>
    <div id="app">
        <h1>{{ message }}</h1>
    </div>
</template>
  
<script>
import { fetchData } from '../services/MovieService';

export default {
    data() {
        return {
            message: ''
        };
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData() {
            try {
                const data = await fetchData();
                this.message = data.message;
            } catch (error) {
                console.error('Error loading data:', error);
            }
        }
    }
};
</script>
  