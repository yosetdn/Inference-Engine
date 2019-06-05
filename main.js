const fs = require('fs');
const args = require('yargs').argv;
const content = require('./helpers/content');
const forward = require('./chainings/forward');
const backward = require('./chainings/backward');

const fileContent = fs.readFileSync(`./cases/${args.file}`, 'utf8');


if (args._[0] === 'forward') forward.main(
    content.getBC(fileContent),
    content.getBH(fileContent)[0],
    content.goal(fileContent)[0]
);

else if (args._[0] === 'backward') backward.main(
    content.getBC(fileContent),
    content.getBH(fileContent)[0],
    content.goal(fileContent)[0]
);
else return console.log('Method no exist');