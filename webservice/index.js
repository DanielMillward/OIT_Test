// server.js
const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const fetchTMDB = require('./model');
const app = express();
const PORT = 8080;

// Use CORS middleware
app.use(cors());

app.get('/movies', (req, res) => {
    const searchTitle = req.query.search;
    fetchTMDB(searchTitle)
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
