// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');

// node app.js remove --title="This is the title" - YARGS package to parse title
const command = process.argv[2];
console.log(process.argv);

if (command === 'add') {
    console.log('Adding note...');
} else if (command === 'remove') {
    console.log('Removing note...');
}