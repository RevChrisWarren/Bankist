'use strict';
/*
//Random code used as example. Doesn't really make sense.
const name = 'Jonas'

const first = () => {
    let a = 1;
    const b = second(7, 9);
    a = a + b;
    console.log(a);
    console.log(b);
    return a;

}

function second(x, y) {
    var c = 2;
    return c;
}

const x = first();
//console.log(a);
//console.log(b);
console.log(x);
*/

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName); //There because it is in global scope

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, and you're a millennial, ${firstName}`
            console.log(str);
        }
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
