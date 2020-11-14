const fs = require('fs');
const chalk = require('chalk');

const successMsg = chalk.green.bold.inverse;
const errorMsg = chalk.bold.red.inverse;
const warningMsg = chalk.hex('#FF8800').inverse;

const noteTitleChalk = chalk.white.bgBlue.bold;
const noteBodyChalk = chalk.green.bold.inverse;
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
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
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
    // Store all notes with non-matching titles
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(successMsg('Note removed.'));
        saveNotes(notesToKeep);
    } else {
        console.log(errorMsg('No note found.'));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse.bold('Your Notes: \n'));
    for(const note of notes) {
        console.log(noteTitleChalk(note.title));
    }
};

module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};