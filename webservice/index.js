// server.js
const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const PORT = 8080;

// Use CORS middleware
app.use(cors());

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello from Express Server!'
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
