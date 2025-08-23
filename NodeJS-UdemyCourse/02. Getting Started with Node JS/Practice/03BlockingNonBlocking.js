const fs = require('node:fs');

console.log("Start of Execution Line");

const contents = fs.readFileSync('02fs.js', 'utf-8');
console.log("Contents of File :", contents);
// What if the file is of 1TB size. 
// Suppose It takes 1min time -> until that time Thread is blocked
// Execution doesn't move to next line of Code 
// as it is blocked by fs read operation

const nonBlockingContents = fs.readFile('02fs.js', 'utf-8', function (err, data) {
    if (err) console.log("Error :", err);
    else console.log("Contents of File :", data)
})
// This is Non-Blocking Code
// It uses callback function to handle the data later 

console.log("End of Execution Line");