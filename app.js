// SECTION 1

var thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
  // code block
} 

let stringExample = `Alejandro`;
let pi = 3.14;
let bool = false;

// keeps track of the current score
let currentScore = 95;

var temp1 = `100`;
var temp2 = 100;
if (temp1 == temp2) {
    console.log("Using ==, the variables are the same");
} else {
        console.log("Using ==, the variables are not the same");

}

if (temp1 === temp2) {
    console.log("Using ===, the variables are the same");
} else {
        console.log("Using ===, the variables are not the same");

}

// SECTION 2

let isWeekend = false;
let schedule;
isWeekend ? schedule = "Day off" : schedule = "Work day";
console.log(schedule);

let userAge = 16;
if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
    console.log("Ready to process");
}

for (let num = 1; num < 6; num = num + 1) {
    console.log(num);
}

for (let num = 0; num < 9; num = num + 1) {
    if (num == 7) {
        break;
    }
}

let counter = 10;
do {
    console.log("Running once");
} while(counter == 100);

// SECTION 3

function calculateArea(width, height) {
    return width * height;
}
resultArea = calculateArea(5,10);
console.log(resultArea);

var fruitlist;
fruitlist = ['Apple', 'Banana'];
fruitlist.push('Grape');
fruitlist.shift();
var indexOfBan = fruitlist.indexOf('Banana');
console.log(indexOfBan);
console.log(fruitlist);

let originalData =['red','blue','green','orange'];
var clonedData = originalData.slice();
// it is a shallow copy
// we should be aware that object references altered in the original array may alter the copy as well

function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}


var animalArray = [
    new Animal('Canine', 'Woof'),
    new Animal('Feline', 'Meow')
]
console.log(animalArray);


