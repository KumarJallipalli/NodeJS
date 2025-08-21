const obj = {
    firstName: "Paris",
    lastName: "Hilton"
}

console.log(obj.firstName);

obj.firstName = "Hammer";
console.log(obj.firstName);

// But this is NOT possible
// obj = {};
console.log(obj);


console.log(Number(NaN));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(false));
