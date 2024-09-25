const path = require('path');
const htmlRoute = require('express').Router();

// GET /notes should return the notes.html file
htmlRoute.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET * should return the index.html file
htmlRoute.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = htmlRoute;