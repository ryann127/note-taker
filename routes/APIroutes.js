const router = require('express').Router();

const { readFromFile, writeToFile,readAndAppend, uuid  } = require('../helpers/fsUtils');

// get /api/notes
// router.get('/api/router', function (req, res) {
//     readFileAsync("../db/db.json", "utf8").then(function (data) {
//         router = [].concat(JSON.parse(data))
//         res.json(router);
//     })
// })
// saves notes and joins to db.json
router.get("/api/notes", (req,res) => {
    readFromFile('./db/db.json')
    .then((router) => 
    res.json(JSON.parse(router)))
});
// adds notes to db.json
router.post('/api/notes', (req, res) => {
    let newNote = req.body;
    const note = {
        title,
        text, id: uuid(),
    };
    console.log(uuid);
    readAndAppend(note, './db/db.json');
    res.json("your note is saved");
})

module.exports = router;