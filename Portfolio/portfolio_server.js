const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'Portfolio'))); // Serve static files


// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Portfolio', 'Portfolio html.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});
