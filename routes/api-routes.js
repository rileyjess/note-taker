const apiRoute = require('express').Router();
const fs = require('fs');

// npm package to create a unique id
const { v4: uuidv4 } = require('uuid');

// GET /api/notes should read the db.json file and return all saved notes as JSON
apiRoute.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json')
        .then((data) => res.json(JSON.parse(data)));
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
apiRoute.post('/api/notes', (req, res) => {
    fs.readFile('../db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const parsedNotes = JSON.parse(data);

            const newNote = {
                title: req.body.title,
                text: req.body.text,
                // give each note a unique id when it's saved - use an npm package
                id: uuidv4(),
            };

            parsedNotes.push(newNote);

            fs.writeFile('../db/db.json', JSON.stringify(parsedNotes));
        }
    })
});

// Bonus: DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete
apiRoute.delete('/api/notes/:id', (req, res) => {
    // read all notes from the db.json file
    fs.readFile('../db/db.json', 'utf8', (data) => {
        const notes = JSON.parse(data);

        // remove the note with the given id property
        removeNote = notes.filter((note) => note.id !== req.params.id)

        // rewrite the notes to the db.json file
        fs.writeFile('../db/db.json', JSON.stringify(removeNote));

        res.json(`Note ${id} has been deleted.`);
    })
});

module.exports = apiRoute;