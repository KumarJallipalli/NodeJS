/**
 *  Declare an array named teaFlavors that contains the Strings "green tea", "black tea", "oolong tea" and "Lemon tea"
    Access the first element of the array and store it in a variable named firstTea.
*/
const teaFlavors = ["green tea", "black tea", "oolong tea", "Lemon tea"];

let firstTea = teaFlavors[0];


/**
 *  Declare an array named teaFlavors that contains the Strings "green tea", "black tea", "oolong tea" and "Lemon tea"
    Access the third element of the array and store it in a variable named favaouriteTea.
*/
let favaouriteTea = teaFlavors[2];


/**
 *  Declare an array named teaFlavors that contains the Strings "green tea", "black tea", "oolong tea" and "Lemon tea"
    Change the second element of the array to "jasmine tea"
*/
teaFlavors[1] = "jasmine tea";
console.log(teaFlavors);


/**
 *  Declare an array named teaFlavors that contains the Strings "green tea", "black tea", "oolong tea" and "Lemon tea"
    Add a new element "masala tea" to the array using push method
*/
console.log(teaFlavors.length);
teaFlavors.push("masala tea");

console.log(teaFlavors.length);
console.log(teaFlavors);
// teaFlavors[teaFlavors.length] = "chutney tea";   Another way to add at end


/**
 *  Declare an array named teaFlavors that contains the Strings "green tea", "black tea", "oolong tea" and "Lemon tea"
    Remove the last element from the array using pop method & store it in a varibale "lastTea"
*/
let lastTea = teaFlavors.pop();
console.log(lastTea);


/**
 *  Declare an array named teaFlavors that contains the Strings "green tea", "black tea", "oolong tea" and "Lemon tea"
    Create a Soft Copy of this Array named softCopyTeas
*/
let softCopyTeas = teaFlavors
console.log(softCopyTeas);


/**
 *  Declare an array named teaFlavors that contains the Strings "green tea", "black tea", "oolong tea" and "Lemon tea"
    Create a Hard Copy of this Array named hardCopyTeas
*/
let hardCopyTeas1 = [...teaFlavors];
let hardCopyTeas2 = teaFlavors.slice();

teaFlavors.pop()
console.log(hardCopyTeas1);
console.log(hardCopyTeas2);
console.log(teaFlavors);


/**
 *  You have two arrays: `europeanCities' containing "Paris" and "Rome", and `asianCities' containing "Tokyo" and "Bangkok".
    Merge these two arrays into a new array named worldCities'.
*/
const europeanCities = ["Paris", "Rome"];
const asianCities = ["Tokyo", "Hyderabad"];

const worldCities1 = [...asianCities, ...europeanCities];
const worldCities2 = asianCities + europeanCities       // Doesn't Works
const worldCities3 = asianCities.concat(europeanCities)

console.log(worldCities1);
console.log(worldCities2);
console.log(worldCities3);

console.log(typeof worldCities2);


/**
 *  Declare an array named teaFlavors that contains the Strings "green tea", "black tea", "oolong tea" and "Lemon tea"
    Find the Length of the Array & store it in a variable named menuLength
*/
let menuLength = teaFlavors.length;
console.log(menuLength);


/**
 *  Declare an array named teaFlavors that contains the Strings "green tea", "black tea", "oolong tea" and "Lemon tea"
    Check if "oolong tea" is present in the Array & store the result in a variable named "isOolongInList"
*/
let isOolongInList = teaFlavors.includes("oolong tea");
console.log(isOolongInList);

