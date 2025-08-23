const { Buffer } = require('node:buffer');

const buf = Buffer.alloc(6);
// alloc() --> Allocates a new Buffer of size bytes. 
// If fill is undefined, the Buffer will be zero-filled.

console.log(buf);

const bufFill = Buffer.alloc(8, "Paris");
// This repeates the memory Allocation
// Like: for Paris Alloc is --> 50 61 72 69 73
// But: for 8 Paris Alloc is --> 50 61 72 69 73 50 61 72
// i.e., It generally takes 5 bytes & remaining 3 bytes is repeated

console.log(bufFill);

// As Buffer represent a fixed-length sequence of bytes
// We can access any of it's byte
console.log(bufFill[4]); 
console.log(bufFill[5].toString()); 


const city = "Paris";
const bufCity = Buffer.from(city);
// from() --> Creates a new Buffer from string

console.log(bufCity);

const city2 = "Paris";
const bufCity2 = Buffer.from(city);
console.log(bufCity2);

const bufCity3 = Buffer.from("London");
console.log(bufCity3);
console.log(bufCity3.toString());



const buff = Buffer.alloc(8);
buff.write("New York");
console.log(buff);
console.log(buff.toString('utf-8', 0, 5));



// Buffer manipulation
const bufff = Buffer.from("chai");
console.log(bufff);
bufff[0] = 0x4a;
console.log(bufff);
console.log(bufff.toString());
console.log(bufff.length);



const buff1 = Buffer.from("Paris");
const buff2 = Buffer.from("Hilton");
const merge = Buffer.concat([buff1, buff2]);
console.log(merge);
console.log(merge.toString());

console.log(merge[1]);
console.log(merge[2]);
