const router = require('express').Router();

const { readFromFile, writeToFile, readAndAppend, uuid } = require('../helpers/fsUtils');

// saves notes and joins to db.json
router.get("/notes", (req, res) => {
    readFromFile('./db/db.json')
        .then((router) =>
            res.json(JSON.parse(router)))
});
// adds notes to db.json
router.post('/notes', (req, res) => {
    let newNote = req.body;
    const note = {
        title: newNote.title,
        text: newNote.text,
        id: uuid(),
    };
    console.log(uuid());
    readAndAppend(note, './db/db.json');
    res.json("your note is saved");
})

router.delete('/notes/:id', (req, res) => {
    readFromFile('./db/db.json')
        .then((journal) => {
            let dbParse = JSON.parse(journal);
            lastParse = dbParse.filter(journal => journal.id !== req.params.id);
            writeToFile('./db/db.json', lastParse);
            res.json(lastParse)
        })
})

module.exports = router;