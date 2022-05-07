const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const util = require('util');


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




module.exports = router;