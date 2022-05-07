const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
// const uuid = Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
// get /api/notes 
// router.get('/api/notes', function (req, res) {
//     readFileAsync("../db/db.json", "utf8").then(function (data) {
//         notes = [].concat(JSON.parse(data))
//         res.json(notes);
//     })
// })
//saves notes and joins to db.json
router.get("/api/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});
// adds notes to db.json
router.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
})



module.exports = router;