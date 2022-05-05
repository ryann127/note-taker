const router = require('express').Router();

const path = require('path');

const fs = require('fs');
const util = require('util');

// get /api/notes 
router.get('/api/notes', function (req, res) {
    readFileAsync("./db/db.json", "utf8").then(function (data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
})


module.exports = router;