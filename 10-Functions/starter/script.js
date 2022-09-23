'use strict';
/*
const bookings = []

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    //ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;


    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 45, 325);
createBooking('LH123', 4);
createBooking('LH123', undefined, 325);

const flight = 'LH234';
const chris = {
    name: 'Chris Warren',
    passport: 246398126
}

const checkIn = function (flightNumber, passenger) {
    flightNumber = 'Lh999';
    passenger.name = 'Mr.' + passenger.name
    if (passenger.passport === 246398126) {
        alert('Checked In')
    } else {
        alert('Wrong Passport Number')
    }
}

// checkIn(flight, chris)
// console.log(flight, chris);

// //same as doing this
// const flightNumber = flight;
// const passenger = chris;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000)
}

newPassport(chris)
checkIn(flight, chris)
console.log(chris);

//FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
const oneWord = function (str) {
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [firstWord, ...otherWords] = str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ');
}

const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`transformed by: ${fn.name}`);
}

transformer('JavaScript is the best', upperFirstWord)
transformer('JavaScript is great', oneWord)

const high5 = function () {
    console.log('🤬');
}
document.body.addEventListener('click', high5)

const arr = ['Jonas', 'Martha', 'Adam'].forEach(high5)
*/
/*
//Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey')
greeterHey('Chris')
greeterHey('Jonas')

greet("Hello")("Doc")
let greeter1
const greet1 = (greeting) => {
    return greeter1 = (name) => {
        console.log(`${greeting}, ${name}`);

    }
}
greet1('Yo')('Daisy')

const greetArr = greeting => name => console.log(`${greeting}, ${name}`);
greetArr('Wassup')('Joy')
*/

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, passName) {
        console.log(`${passName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passName })
    }
}
lufthansa.book(236, 'Chris Warren')
lufthansa.book(655, 'John Smith')
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}
const book = lufthansa.book;
//Here the this keyword points to undefined, so does not work
//book(23, 'Jonas ')
//Telling JS how to define "This" with Call method
book.call(eurowings, 345, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, "Doug Cooper")
console.log(lufthansa);

const swiss = {
    airline: 'Swiss',
    iataCode: 'LX',
    bookings: [],

}
book.call(swiss, 677, 'Doc Daisiness')
console.log(swiss);

//Same thing with Apply method
const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)

book.apply(lufthansa, [655, "Johnny Depp"])

book.call(swiss, ...flightData)

//Bind method
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);

bookEW(43, "Steven Williams")
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Chris Warren');

//Objects with event listeners
lufthansa.planes = 300
lufthansa.buyPlane = function () {
    this.planes++
    console.log(this);
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application
const addTax = (rate, value) => {
    return value + value * rate
}

console.log(addTax(.10, 200));

const addVAT = addTax.bind(null, .23)

console.log(addVAT(1000))