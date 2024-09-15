const path = require('path');
const html = require('express').Router();

// GET /notes should return the notes.html file
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// GET * should return the index.html file
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

module.exports = html;