const fs = require('fs');
const chalk = require('chalk');

const successMsg = chalk.green.bold.inverse;
const errorMsg = chalk.bold.red.inverse;
const warningMsg = chalk.hex('#FF8800').inverse;
// const getNotes = () => {
//     return 'Your notes...';
// };

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);    
    } catch(e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const addNote = (title, body) => {
    const notes = loadNotes();
    // Check if existing title is matching title we're about to add
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(successMsg('New note added.'));
    } else {
        console.log(warningMsg('Note with given title already exists.'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        console.log(successMsg('Note removed.'));
        saveNotes(notesToKeep);
    } else {
        console.log(errorMsg('No note found.'));
    }
};

module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};