const router = require('express').Router();
const fs = require('fs');
const util = require('util');

// get /api/notes 
router.get('/notes', (req, res) => {
    util.promisify(fs.readFile('../db/db.json'))
    .then(notes => console.log(notes))
})

module.exports = router;