// While loop to cal sum from 1 to 5 & store it in "sum" variable
let sum = 0;
let i = 1

while (i <= 5) {
    sum += i;
    i++;
}

console.log(sum);


// While Loop that counts down from 5 to 1 & store the Numbers in an Array "countdown"
let count = 5;
let countdown = [];

while (count > 0) {
    countdown.push(count);
    count--;
}

console.log(countdown);


// Use a do-while loop that prompts a user to eneter their fav food until they 
// enter "stop" && store each food item in an Array called "foodCollection"
let foodCollection = [];
let foodItem =  null;

do {
    foodItem = prompt("Enter your Favaorite Food ..!");
    if (foodItem != "stop") {
        foodCollection.push(foodItem);
    }
} while (foodItem != "stop");

console.log(foodCollection);


// Use a do-while loop that adds numbers from 1 to 3 & stores result in "total"
let total = 0;
let num = 1;

do {
    total += num;
    num++;
} while (num <= 3);

console.log(total);


// Write a for loop that multiplies each element in array [2, 4, 6] with 2 &&
// stores the result in new Array "multipliedNumbers"
let arr = [2, 4, 6];
let multipliedNumbers = [];

for (let i=0; i<arr.length; i++) {
    let tempEle = arr[i] * 2;
    multipliedNumbers.push(tempEle);
}

console.log(multipliedNumbers);


// write a for loop that lists all the cities in the array ["paris", "New York", "Tokyo", "London"] and
// stores each city in new array named "cityList"
let cities = ["paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i=0; i<cities.length; i++) {
    cityList.push(cities[i]);
}

console.log(cityList);
