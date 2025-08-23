const fs = require('node:fs');

fs.mkdirSync('games');
//  This Creates a Directory

fs.mkdirSync('play/ps5/uncharted', {recursive: true});
//  This Creates a Nested Directories

const contents = fs.readFileSync('./01HelloNode.js', 'utf-8')
// This Reads the mentioned file & returns it content as String

console.log(contents);

fs.writeFileSync('hello.txt', 'Hello Node JS', 'utf-8')
// This Creates a new File with mentioned name & content
// But, this function always Overwrites the data [ Hence writeFile ]

fs.writeFileSync('hello.txt', HelloNode.js, 'utf-8')
// This Copies the contents of "HelloNode.js" into "helo.txt"

fs.appendFileSync('hello.txt', 'Hello Node JS', 'utf-8')
// This Creates a new File with mentioned name & content
// But, This Appends the content [ doesn't overwrite]

fs.unlinkSync('hello.txt');
// This Deletes the File