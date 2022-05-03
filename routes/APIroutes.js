const router = require('express').Router();
const fs = require('fs');

// get /api/notes
router.get('/notes', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
})

module.exports = router;