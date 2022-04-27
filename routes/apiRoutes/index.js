const router = require('express').Router();

const { checkNote, createNewNote } = require('../../lib/noteFuncs');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!checkNote(req.body)) {
        res.status(400).send('This note is improperly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;