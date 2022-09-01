"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");
//reserved for possible future use
//const interface = "audio";
//const private = "home";


function logger() {
    console.log('My name is Chris');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
};

const chrisAge1 = calcAge1(1974);
console.log(chrisAge1);

//function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const chrisAge2 = calcAge2(1975);
console.log(chrisAge2);


//Arrow function

const calcAge3 = birthYear => 2022 - birthYear;
const chrisAge3 = calcAge3(1974)
console.log(chrisAge3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1974, "Chris"))
console.log(yearsUntilRetirement(1971, "Glenn"));
*/

function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}
const newJuice = fruitProcessor(2, 3)
console.log(newJuice)