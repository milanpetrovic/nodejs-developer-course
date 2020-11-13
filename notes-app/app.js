// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');

const log = console.log;

const successLog = chalk.green.inverse;
const errorLog = chalk.white.bgRed.bold;
const warningLog = chalk.black.bgHex('#FF8800');

log(getNotes());

log(successLog('This is a success message!'));
log(errorLog('This is a big fat error!'));
log(warningLog('I warn you, don\'t you dare to stop learning MERN!'));
