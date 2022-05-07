const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
const { readFromFile, writeToFile,readAndAppend  } = require('../helpers/fsUtils');
const uuid = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
// get /api/notes 
// router.get('/api/notes', function (req, res) {
//     readFileAsync("../db/db.json", "utf8").then(function (data) {
//         notes = [].concat(JSON.parse(data))
//         res.json(notes);
//     })
// })
//saves notes and joins to db.json
router.get("/api/notes", (req,res) => {
    readFromFile('./db/db.json')
    .then((router) => 
    res.json(JSON.parse(router)))
});
// adds notes to db.json
router.post('/api/notes', (req, res) => {
    let newNote = req.body;
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));

    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
})



module.exports = router;