const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Milan.');
fs.appendFileSync('notes.txt', ' 2020 was shit so far and it\'s not getting better.');