const fs = require('fs');
const path = require('path');

function checkNote(note) {
    let title = note.title
    if (!title || typeof title !== 'string') {
        return false;
    }
    let text = note.text
    if (!text || typeof text !== 'string') {
        return false;
    }
    return true;
}

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}



module.exports = {
    createNewNote,
    checkNote
}