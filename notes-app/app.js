// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Create YARGS commands
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    handler: () => {
        console.log('Removing the note.')        
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        console.log('Listing all notes.')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the note.',
    handler: () => {
        console.log('Reading the note.')
    }
})

yargs.parse();