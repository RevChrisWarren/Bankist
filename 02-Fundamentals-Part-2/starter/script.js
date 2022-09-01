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

const calcAge = function (birth) {
    return 2022 - birth;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    } else {
        console.log(`${firstName} has already retired 😀`)
        return -1;
    }

    //return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1974, "Chris"));
console.log(yearsUntilRetirement(1918, "Joe"));


const calcAverage = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3;



// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins, avgKoalas)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win with a score of Dolphins ${avgDolphins} and a score of Koalas ${avgKoalas}!`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log((`Koalas win with a score of Koalas ${avgKoalas} and a score of Dolphins ${avgDolphins}!`))
    } else {
        console.log("No team had twice the other team's score, so no winner is declared!")
    }
};
checkWinner(avgDolphins, avgKoalas)



const friends = ["Michael", "Steven", "Peter"];

console.log(friends)
//Array function using new keyword
const randomYears = new Array(1991, 1984, 2008, 2020);
console.log(randomYears)

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas"
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[years.length - 1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3)
const ages = [calcAge(years[0]), calcAge(years[years.length - 1]), calcAge(years[2])]

//const ages = [age1, age2, age3]
console.log(ages)


//Array Methods
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength)

friends.unshift("John");
console.log(friends);

friends.pop(); //removes last element of array
const popped = friends.pop()
console.log(friends);
console.log(popped)

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //will get -1
console.log(friends.includes('Michael'));
console.log(friends.includes('Mic'));


if (friends.includes('Peter')) {
    console.log('You have a friend named Peter')
}
if (friends.includes('Steven')) {
    console.log('You have a friend named Steven')
}*/
//coding challenge 2

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * .15
    } else {
        return bill * .2
    }
}
console.log(calcTip(100));

const bills = [125, 555, 44]
console.log(bills[0])


const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
const totals2 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills)
console.log(tips)
console.log(totals)
console.log(totals2)
